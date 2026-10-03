import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const scanRoot = process.cwd();
const excludedDirs = new Set(["node_modules", "dist", "build", ".git", ".output", ".vinxi", ".nitro"]);
const excludedFiles = new Set(["bun.lock", "bun.lockb", "package-lock.json", "yarn.lock", "pnpm-lock.yaml"]);
const literalDash = String.fromCodePoint(0x2014);
const forbiddenText = [literalDash, "\\u" + "2014", "&#8212;", "&#x2014;", "&mdash;"];
const violations = [];

async function scan(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!excludedDirs.has(entry.name)) {
        await scan(path);
      }
      continue;
    }

    if (excludedFiles.has(entry.name)) continue;

    const content = await readFile(path, "utf8").catch(() => null);
    if (content === null) continue;

    content.split(/\r?\n/).forEach((line, index) => {
      if (forbiddenText.some((value) => line.toLowerCase().includes(value))) {
        violations.push(`${relative(process.cwd(), path)}:${index + 1}:${line}`);
      }
    });
  }
}

await scan(scanRoot);

if (violations.length > 0) {
  console.error("Em dashes are not allowed. Fix these occurrences:");
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Dash check passed.");
