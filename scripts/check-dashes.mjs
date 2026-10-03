import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const sourceRoot = join(process.cwd(), "src");
const forbidden = /—|\\u2014|&#8212;|&#x2014;|&mdash;/i;
const violations = [];

async function scan(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(path);
      continue;
    }

    const content = await readFile(path, "utf8");
    content.split(/\r?\n/).forEach((line, index) => {
      if (forbidden.test(line)) {
        violations.push(`${relative(process.cwd(), path)}:${index + 1}:${line}`);
      }
    });
  }
}

await scan(sourceRoot);

if (violations.length > 0) {
  console.error("Em dashes are not allowed. Fix these occurrences:");
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Dash check passed.");