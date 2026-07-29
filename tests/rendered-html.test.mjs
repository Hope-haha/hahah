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

test("server-renders the centered three-way comparison", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>同一条起跑线，三种交付落点<\/title>/);
  assert.match(html, /同一个小游戏需求，三种交付结果/);
  assert.match(html, /这个页面到底在比较什么/);
  assert.match(html, /没有绝对赢家，只有不同优先级/);
  assert.match(html, /同一句需求/);
  assert.match(html, /同一套工作流/);
  assert.match(html, /三个可玩结果/);
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
