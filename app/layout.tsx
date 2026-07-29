import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jump-lab-three-2026.h13426558995.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
