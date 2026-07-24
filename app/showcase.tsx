"use client";

import Link from "next/link";
import { useState } from "react";

export type ProjectKey = "work-buddy" | "trea" | "codex";

type Project = {
  key: ProjectKey;
  number: string;
  maker: string;
  title: string;
  subtitle: string;
  game: string;
  color: string;
  summary: string;
  facts: string[];
  strengths: string[];
  limits: string[];
};

export const projects: Project[] = [
  {
    key: "work-buddy",
    number: "01",
    maker: "WORK BUDDY",
    title: "财神跳一跳",
    subtitle: "轻量、直接、像经典跳一跳",
    game: "/games/work-buddy/index.html",
    color: "#56d6ff",
    summary: "一份单文件 Canvas 游戏。按住蓄力、松手跳跃，以最短路径完成了连续平台玩法。",
    facts: ["1 个可运行 HTML", "Canvas 绘制", "本地最高分", "连续平台生成"],
    strengths: ["打开即玩，交付形态最轻", "核心循环清晰，学习成本低", "无外部服务依赖"],
    limits: ["视觉资产较少，品牌辨识度弱", "交付文档与游戏代码分离", "缺少独立自动化测试文件"],
  },
  {
    key: "trea",
    number: "02",
    maker: "TREA",
    title: "Codex 跳一跳",
    subtitle: "技术感、反馈密集、完整 HUD",
    game: "/games/trea/index.html",
    color: "#ff6ea8",
    summary: "同样采用单文件 Canvas，但增加开场面板、蓄力条、连击、粒子与音效反馈，呈现更强的街机感。",
    facts: ["1 个可运行 HTML", "Canvas + WebAudio", "连击反馈", "键盘与触屏"],
    strengths: ["状态反馈更完整", "桌面与移动端操作兼容", "视觉风格统一且辨识度较高"],
    limits: ["文件标题仍保留 Codex 命名", "成果来源目录混有其他项目", "缺少对应的独立测试证据"],
  },
  {
    key: "codex",
    number: "03",
    maker: "CODEX",
    title: "灯跃浮岛",
    subtitle: "折纸世界、路线选择、完整产品化",
    game: "/games/codex/index.html",
    color: "#ffbd4a",
    summary: "从“复刻跳一跳”转为原创分支玩法：按住纸灯蓄力，左右选择路线，在连续浮岛间推进。",
    facts: ["微信小游戏源码", "网页交互原型", "3 张原创视觉素材", "纯逻辑与启动测试"],
    strengths: ["视觉设定与玩法机制绑定", "拥有文档、问题库和回归证据", "路线选择让连续跳跃产生决策"],
    limits: ["网页展示的是设计原型，不等同微信运行包", "正式真机仍需要项目 AppID 与扫码", "现有字体资源使展示包体较大"],
  },
];

const dimensions = [
  ["核心循环", "连续蓄力跳跃", "连续蓄力跳跃", "蓄力 + 左右选路"],
  ["视觉表达", "几何平台", "深色技术风", "折纸浮岛世界"],
  ["反馈层次", "得分 / 失败", "蓄力 / 连击 / 音效", "路线 / 灯火 / 救援"],
  ["工程形态", "单 HTML", "单 HTML", "小游戏源码 + Vite 原型"],
  ["验证证据", "可运行页面", "可运行页面", "测试 + 检查脚本 + 问题库"],
  ["试玩入口", "已接入", "已接入", "已接入网页原型"],
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/">
      <span className="brand-mark">J</span>
      {!compact && <span>JUMP LAB / 03</span>}
    </Link>
  );
}

function JumpTrack() {
  return (
    <div className="jump-track" aria-hidden="true">
      <i className="track-platform p1" />
      <i className="track-platform p2" />
      <i className="track-platform p3" />
      <i className="jumper" />
      <span className="arc arc1" />
      <span className="arc arc2" />
    </div>
  );
}

export function ComparisonHome() {
  const [active, setActive] = useState<ProjectKey>("codex");

  return (
    <main>
      <header className="topbar">
        <Brand />
        <nav><a href="#compare">对比</a><a href="#play">试玩</a><span className="live-dot">3 个版本在线</span></nav>
      </header>

      <section className="hero">
        <div className="eyebrow"><span>同一工作流</span><span>同一想法</span><span>三个答案</span></div>
        <h1>同一条起跑线，<br /><em>三种交付落点。</em></h1>
        <p>把“做一个像跳一跳的小游戏”同时交给三位执行者。这里不看口头总结——直接比较成果，也直接上手玩。</p>
        <div className="hero-actions"><a className="button primary" href="#play">选择一个版本试玩 ↓</a><a className="button ghost" href="#compare">先看差异</a></div>
        <JumpTrack />
        <div className="hero-index">01 — 03</div>
      </section>

      <section className="section play-section" id="play">
        <div className="section-heading"><span>PLAYGROUND / 试玩场</span><h2>不止是展示，<br />三个都能玩。</h2></div>
        <div className="project-tabs" role="tablist">
          {projects.map((project) => (
            <button key={project.key} className={active === project.key ? "active" : ""} onClick={() => setActive(project.key)}>
              <small>{project.number}</small><span>{project.maker}</span>
            </button>
          ))}
        </div>
        {projects.map((project) => active === project.key && (
          <article className={`play-stage tone-${project.key}`} key={project.key}>
            <div className="phone-shell">
              <div className="phone-bar"><span /><span>试玩预览</span><span /></div>
              <iframe title={`${project.maker} 游戏预览`} src={project.game} />
            </div>
            <div className="play-copy">
              <span className="project-no">{project.number} / {project.maker}</span>
              <h3>{project.title}</h3>
              <p className="subtitle">{project.subtitle}</p>
              <p>{project.summary}</p>
              <div className="fact-chips">{project.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
              <div className="action-stack">
                <a className="button primary" href={project.game} target="_blank" rel="noreferrer">全屏开始玩 ↗</a>
                <Link className="text-link" href={`/${project.key}`}>查看这份成果的完整拆解 →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section compare-section" id="compare">
        <div className="section-heading"><span>EVIDENCE / 有据可查</span><h2>同一目标，<br />取舍完全不同。</h2></div>
        <div className="matrix" role="table" aria-label="三套成果对比">
          <div className="matrix-row matrix-head" role="row"><b>对比维度</b>{projects.map(p => <b key={p.key}>{p.maker}</b>)}</div>
          {dimensions.map((row) => <div className="matrix-row" role="row" key={row[0]}>{row.map((cell, index) => <span key={cell} className={index === 0 ? "dimension" : ""}>{cell}</span>)}</div>)}
        </div>
        <p className="evidence-note">比较仅依据本机三个成果目录中可见的代码、页面、文档与测试文件；没有证据的能力不作推定。</p>
      </section>

      <section className="section outcome-section">
        <div className="section-heading"><span>THREE OUTCOMES / 三份答案</span><h2>选择你想<br />深入看的版本。</h2></div>
        <div className="outcome-grid">
          {projects.map(project => (
            <Link className={`outcome-card tone-${project.key}`} href={`/${project.key}`} key={project.key}>
              <span className="project-no">{project.number}</span><h3>{project.maker}</h3><p>{project.title}</p><span className="corner-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <footer><Brand compact /><p>同一工作流实验 · 2026</p><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}

export function ProjectShowcase({ projectKey }: { projectKey: ProjectKey }) {
  const project = projects.find(item => item.key === projectKey)!;
  const otherProjects = projects.filter(item => item.key !== projectKey);

  return (
    <main className={`detail-page tone-${project.key}`}>
      <header className="topbar"><Brand /><nav><Link href="/">返回总览</Link><a href="#game">立即试玩</a></nav></header>
      <section className="detail-hero">
        <div><span className="project-no">{project.number} / {project.maker}</span><h1>{project.title}</h1><p>{project.subtitle}</p></div>
        <div className="detail-orbit"><i /><i /><i /><span>JUMP</span></div>
      </section>
      <section className="game-room" id="game">
        <div className="game-frame"><iframe title={`${project.title} 在线试玩`} src={project.game} /></div>
        <div className="game-tools"><span>ONLINE PLAYABLE BUILD</span><p>在上方区域直接操作，或打开独立页面获得完整屏幕和声音体验。</p><a className="button primary" href={project.game} target="_blank" rel="noreferrer">打开独立游戏网页 ↗</a></div>
      </section>
      <section className="detail-grid">
        <article><span>事实</span><h2>这份成果里<br />实际有什么</h2><ul>{project.facts.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article className="positive"><span>优势</span><h2>做得好的地方</h2><ul>{project.strengths.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article className="caution"><span>边界</span><h2>仍然存在的限制</h2><ul>{project.limits.map(item => <li key={item}>{item}</li>)}</ul></article>
      </section>
      <section className="next-projects"><span>NEXT / 继续比较</span><div>{otherProjects.map(item => <Link href={`/${item.key}`} key={item.key}><small>{item.number}</small>{item.maker}<b>→</b></Link>)}</div></section>
      <footer><Brand compact /><p>{project.maker} 成果展示</p><Link href="/">对比全部版本 ↑</Link></footer>
    </main>
  );
}
