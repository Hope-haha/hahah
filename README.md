# 跳一跳：三种交付成果对比

同一份微信小游戏工作流、同一个“做一个像跳一跳的小游戏”想法，分别展示 Work Buddy、Trea 与 Codex 的执行结果。

## 在线查看

- [打开完整对比网页](https://hope-haha.github.io/hahah/)
- [Work Buddy 成果页](https://hope-haha.github.io/hahah/work-buddy/)
- [Trea 成果页](https://hope-haha.github.io/hahah/trea/)
- [Codex 成果页](https://hope-haha.github.io/hahah/codex/)

每一份成果页都内嵌了可操作版本，并提供独立全屏试玩入口。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

构建验证：

```bash
npm run build
```

## 目录

- `app/`：对比总览与三份独立成果页
- `public/games/work-buddy/`：Work Buddy 网页游戏
- `public/games/trea/`：Trea 网页游戏
- `public/games/codex/`：Codex“灯跃浮岛”网页交互原型构建产物

## 证据边界

对比内容只依据三份本机成果目录中可见的代码、页面、文档与测试文件。Codex 网页入口是设计原型，不等同于微信开发者工具中的正式小游戏运行包；真机测试仍需正式 AppID 与用户扫码。
