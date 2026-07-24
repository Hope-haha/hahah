import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "同一条起跑线，三种交付落点",
  description: "Work Buddy、Trea 与 Codex 使用同一工作流完成跳一跳小游戏的成果对比与在线试玩。",
  openGraph: {
    title: "同一条起跑线，三种交付落点",
    description: "三套成果、三种方法、三个可以直接试玩的网页。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
