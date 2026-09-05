import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = path.join(root, "out");

test("genera el portafolio estático en español", async () => {
  const html = await readFile(path.join(output, "index.html"), "utf8");

  assert.match(html, /<html[^>]+lang="es"/i);
  assert.match(html, /Johanna Romero \| Desarrollo Full Stack JavaScript \+ Animación 3D/i);
  assert.match(html, /id="proyectos"/i);
  assert.match(html, /id="caso-estudio"/i);
  assert.match(html, /CreativeFlow Backend/i);
  assert.match(html, /https:\/\/github\.com\/Zkeh-x7\/creativeflow-backend/i);
  assert.match(html, /mailto:uranoanimations@gmail\.com/i);
  assert.match(html, /https:\/\/www\.linkedin\.com\/in\/uranoanimations/i);
  assert.match(html, /href="\/Johanna-Romero-CV\.pdf"[^>]*download/i);
  assert.doesNotMatch(html, /chatgpt\.site/i);
});

test("incluye los archivos públicos y la página de error", async () => {
  await Promise.all([
    access(path.join(output, "Johanna-Romero-CV.pdf")),
    access(path.join(output, "favicon.svg")),
    access(path.join(output, ".nojekyll")),
    access(path.join(output, "404.html")),
  ]);
});
