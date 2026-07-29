import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the editorial three-way comparison", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>/);
  assert.match(html, /同一工作流/);
  assert.match(html, /同一个跳一跳小游戏/);
  assert.match(html, /为什么做成了三种产品/);
  assert.match(html, /同一个起点，不同的优先级/);
  assert.match(html, /没有分数，只有取舍/);
  assert.match(html, /逐项看，差别才真正出现/);
  assert.match(html, /“有文件”不等于“走完流程”/);
  assert.match(html, /最好的第四版，不该从零开始/);
  assert.match(html, /WORK BUDDY/);
  assert.match(html, /TRAE/);
  assert.match(html, /CODEX/);
  assert.match(html, /\/games\/work-buddy\/index\.html/);
  assert.match(html, /\/games\/trae\/index\.html/);
  assert.match(html, /\/games\/codex\/index\.html/);
  assert.doesNotMatch(html, />TREA</);
});

test("keeps the corrected TRAE route and all three game builds", async () => {
  const response = await render("/trae");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /TRAE/);
  assert.match(html, /\/games\/trae\/index\.html/);
  assert.doesNotMatch(html, />TREA</);

  await Promise.all([
    access(new URL("../public/games/work-buddy/index.html", import.meta.url)),
    access(new URL("../public/games/trae/index.html", import.meta.url)),
    access(new URL("../public/games/codex/index.html", import.meta.url)),
  ]);

  const codexBundle = await readFile(
    new URL(
      "../public/games/codex/assets/index-DWfgupDC.js",
      import.meta.url,
    ),
    "utf8",
  );
  assert.match(codexBundle, /"\.\/assets\/paper-island-world-/);
  assert.match(codexBundle, /"\.\/assets\/charge-stage-/);
  assert.match(codexBundle, /"\.\/assets\/route-trajectories-/);

  const codexStyles = await readFile(
    new URL(
      "../public/games/codex/assets/index-BD6FG5SP.css",
      import.meta.url,
    ),
    "utf8",
  );
  assert.doesNotMatch(codexStyles, /url\(\/assets\//);
});
