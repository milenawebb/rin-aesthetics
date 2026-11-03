// Fails the build when an internal editorial marker sits in content that can render.
// Scans string literals in content data, routes and site components.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/data", "src/routes", "src/components/site", "src/components/home", "src/components/gallery"];
const markers = [
  /NEEDS APPROVAL/, /\bTODO\b/, /\bTBD\b/, /\bFIXME\b/, /\bPLACEHOLDER\b/, /\bDRAFT\b/, /\bDraft:/,
  /\bCONFIRM\b/, /\bCHECK\b/, /\bXXX\b/, /\?\?\?/, /\[ \]/, /lorem/i,
];
const strings = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`|>([^<>{}\n]+)</g;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".oj-cache") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name) && !name.endsWith(".gen.ts")) out.push(p);
  }
  return out;
}

const hits = [];
for (const file of roots.flatMap((r) => walk(r))) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
    for (const m of line.matchAll(strings)) {
      const text = m[1] ?? m[0];
      // The route's own guard that filters notes out is code, not content.
      if (/startsWith\("NEEDS APPROVAL"\)/.test(line)) continue;
      if (markers.some((re) => re.test(text))) hits.push(`${file}:${i + 1}: ${text.slice(0, 120)}`);
    }
  });
}

if (hits.length) {
  console.error(`Editorial markers found in renderable content (${hits.length}):\n` + hits.join("\n"));
  process.exit(1);
}
console.log("Draft check passed.");
