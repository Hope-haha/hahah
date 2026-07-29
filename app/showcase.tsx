"use client";

import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicUrl(path: string) {
  return `${publicBasePath}${path}`;
}

export type ProjectKey = "work-buddy" | "trae" | "codex";

type Project = {
  key: ProjectKey;
  number: string;
  maker: string;
  title: string;
  subtitle: string;
  game: string;
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
    subtitle: "轻量直接，最接近经典玩法",
    game: "/games/work-buddy/index.html",
    summary: "单文件 Canvas 游戏，用最短路径完成连续蓄力跳跃。",
    facts: ["1 个可运行 HTML", "Canvas 绘制", "本地最高分", "连续平台生成"],
    strengths: ["打开即玩，交付形态最轻", "核心循环清晰，学习成本低", "无外部服务依赖"],
    limits: ["视觉资产较少，品牌辨识度弱", "交付文档与游戏代码分离", "缺少独立自动化测试文件"],
  },
  {
    key: "trae",
    number: "02",
    maker: "TRAE",
    title: "Codex 跳一跳",
    subtitle: "反馈更密，街机感更完整",
    game: "/games/trae/index.html",
    summary: "加入开场面板、蓄力条、连击、粒子与音效反馈。",
    facts: ["1 个可运行 HTML", "Canvas + WebAudio", "连击反馈", "键盘与触屏"],
    strengths: ["状态反馈更完整", "桌面与移动端操作兼容", "视觉风格统一且辨识度较高"],
    limits: ["文件标题仍保留 Codex 命名", "成果来源目录混有其他项目", "缺少对应的独立测试证据"],
  },
  {
    key: "codex",
    number: "03",
    maker: "CODEX",
    title: "灯跃浮岛",
    subtitle: "原创选路，产品化最完整",
    game: "/games/codex/index.html",
    summary: "按住纸灯蓄力，左右选择路线，在连续浮岛间推进。",
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
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/">
      <span className="brand-mark">J</span>
      {!compact && <span>JUMP LAB / 03</span>}
    </Link>
  );
}

export function ComparisonHome() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <Brand />
          <nav>
            <a href="#play">试玩</a>
            <a href="#compare">对比</a>
            <span className="online-status">3 个版本在线</span>
          </nav>
        </div>
      </header>

      <section className="comparison-hero" id="play">
        <div className="hero-intro">
          <p className="eyebrow">同一工作流 · 同一想法 · 三个答案</p>
          <h1>同一个想法，三种落点</h1>
          <p className="hero-summary">把“做一个像跳一跳的小游戏”交给三位执行者。这里直接看成果，也直接上手玩。</p>
        </div>

        <div className="triptych-grid">
          {projects.map((project) => (
            <article className={`triptych-card tone-${project.key}`} key={project.key}>
              <header className="triptych-heading">
                <span>{project.number}</span>
                <h2>{project.maker}</h2>
              </header>
              <div className="preview-stage">
                <iframe
                  title={`${project.maker} 游戏预览`}
                  src={publicUrl(project.game)}
                  loading="lazy"
                  tabIndex={-1}
                />
              </div>
              <div className="triptych-copy">
                <h3>{project.subtitle}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="triptych-actions">
                <a className="play-link" href={publicUrl(project.game)} target="_blank" rel="noreferrer">直接试玩</a>
                <Link className="detail-link" href={`/${project.key}`}>查看成果</Link>
              </div>
            </article>
          ))}
        </div>

        <a className="button primary compare-cta" href="#compare">查看完整对比</a>
      </section>

      <section className="comparison-section" id="compare">
        <div className="compact-heading">
          <p className="eyebrow">EVIDENCE / 有据可查</p>
          <h2>同一目标，取舍不同</h2>
          <p>只比较三个成果目录中实际可见的代码、页面、文档与测试证据。</p>
        </div>
        <div className="matrix" role="table" aria-label="三套成果对比">
          <div className="matrix-row matrix-head" role="row">
            <b>对比维度</b>
            {projects.map((project) => <b key={project.key}>{project.maker}</b>)}
          </div>
          {dimensions.map((row) => (
            <div className="matrix-row" role="row" key={row[0]}>
              {row.map((cell, index) => <span key={`${row[0]}-${index}`} className={index === 0 ? "dimension" : ""}>{cell}</span>)}
            </div>
          ))}
        </div>
        <p className="evidence-note">没有证据的能力不作推定；网页原型与微信真机运行包分别标注。</p>
      </section>

      <section className="deep-dive-section">
        <div className="compact-heading">
          <p className="eyebrow">DEEP DIVE / 继续看</p>
          <h2>打开每一份完整成果</h2>
        </div>
        <div className="deep-dive-grid">
          {projects.map((project) => (
            <Link className={`deep-dive-row tone-${project.key}`} href={`/${project.key}`} key={project.key}>
              <span className="project-no">{project.number}</span>
              <strong>{project.maker}</strong>
              <span>{project.title}</span>
              <em>查看成果</em>
            </Link>
          ))}
        </div>
      </section>

      <footer><Brand compact /><p>同一工作流实验 · 2026</p><a href="#play">回到顶部</a></footer>
    </main>
  );
}

export function ProjectShowcase({ projectKey }: { projectKey: ProjectKey }) {
  const project = projects.find((item) => item.key === projectKey)!;
  const otherProjects = projects.filter((item) => item.key !== projectKey);

  return (
    <main className={`detail-page tone-${project.key}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <Brand />
          <nav><Link href="/">返回总览</Link><a href="#game">立即试玩</a></nav>
        </div>
      </header>

      <section className="detail-hero">
        <span className="project-no">{project.number} / {project.maker}</span>
        <h1>{project.title}</h1>
        <p>{project.subtitle}</p>
      </section>

      <section className="game-room" id="game">
        <div className="game-frame"><iframe title={`${project.title} 在线试玩`} src={publicUrl(project.game)} /></div>
        <div className="game-tools">
          <span>ONLINE PLAYABLE BUILD</span>
          <p>可在上方直接操作，也可以打开独立页面获得完整屏幕和声音体验。</p>
          <a className="button primary" href={publicUrl(project.game)} target="_blank" rel="noreferrer">打开独立游戏网页</a>
        </div>
      </section>

      <section className="detail-grid">
        <article><span>事实</span><h2>实际交付</h2><ul>{project.facts.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><span>优势</span><h2>做得好的地方</h2><ul>{project.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><span>边界</span><h2>仍然存在的限制</h2><ul>{project.limits.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </section>

      <section className="next-projects">
        <span>NEXT / 继续比较</span>
        <div>{otherProjects.map((item) => <Link href={`/${item.key}`} key={item.key}><small>{item.number}</small>{item.maker}</Link>)}</div>
      </section>

      <footer><Brand compact /><p>{project.maker} 成果展示</p><Link href="/">对比全部版本</Link></footer>
    </main>
  );
}
