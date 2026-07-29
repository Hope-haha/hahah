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
  focus: string;
  playLoop: string;
  delivery: string;
  bestFor: string;
  explanation: string;
  verdict: string;
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
    focus: "先把“蓄力—起跳—落点—继续”的核心循环做出来",
    playLoop: "按住蓄力，松手起跳，落到下一块平台继续得分",
    delivery: "一个 HTML 文件，打开即可运行",
    bestFor: "想快速验证经典跳一跳玩法的人",
    explanation: "Work Buddy 选择了最短交付路径：不扩展世界观，也不增加复杂系统，先保证玩家一打开就知道怎么玩。它的价值在于速度和清晰度，代价是视觉表达与工程证据较少。",
    verdict: "三者中最轻、最快，也最像一个玩法验证版。",
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
    focus: "在经典连续跳跃上补足即时反馈和街机节奏",
    playLoop: "开始游戏，观察蓄力条，连续落点触发连击和声效",
    delivery: "一个 HTML 文件，同时支持键盘与触屏",
    bestFor: "更看重操作反馈和游戏氛围的人",
    explanation: "TRAE 沿用经典蓄力跳跃，但把重点放在玩家每次操作后的反馈：蓄力过程更明确，成功和连击更有存在感，声音与粒子让游戏更像一个完整街机小品。",
    verdict: "三者中反馈最密，试玩时最容易立刻感到“像游戏”。",
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
    focus: "把视觉世界观、路线选择和交付流程一起产品化",
    playLoop: "先选稳行或冒险路线，再按住纸灯蓄力并松手起跳",
    delivery: "微信小游戏源码、网页原型、视觉素材、测试与问题库",
    bestFor: "希望继续做成正式产品并保留扩展空间的人",
    explanation: "Codex 没有只复刻经典玩法，而是把纸灯、折纸浮岛和左右选路组合成新的决策机制；同时补齐文档、测试、问题库和发布准备。网页里展示的是交互原型，正式微信真机仍需 AppID 与扫码验证。",
    verdict: "三者中产品表达最完整，但交付体量和后续验证成本也最高。",
    facts: ["微信小游戏源码", "网页交互原型", "3 张原创视觉素材", "纯逻辑与启动测试"],
    strengths: ["视觉设定与玩法机制绑定", "拥有文档、问题库和回归证据", "路线选择让连续跳跃产生决策"],
    limits: ["网页展示的是设计原型，不等同微信运行包", "正式真机仍需要项目 AppID 与扫码", "现有字体资源使展示包体较大"],
  },
];

const dimensions = [
  ["一句话理解", "最快得到可玩版本", "把反馈做得更像游戏", "把玩法做成完整产品方向"],
  ["核心循环", "连续蓄力跳跃", "连续蓄力跳跃", "蓄力 + 左右选路"],
  ["视觉表达", "几何平台", "深色技术风", "折纸浮岛世界"],
  ["反馈层次", "得分 / 失败", "蓄力 / 连击 / 音效", "路线 / 灯火 / 救援"],
  ["工程形态", "单 HTML", "单 HTML", "小游戏源码 + Vite 原型"],
  ["验证证据", "可运行页面", "可运行页面", "测试 + 检查脚本 + 问题库"],
  ["主要取舍", "速度优先，表现较轻", "体验优先，证据较少", "完整度优先，成本更高"],
];

const experimentSteps = [
  ["01 / 输入相同", "三者收到的是同一句需求：做一个像“跳一跳”的小游戏。"],
  ["02 / 流程相同", "都按照需求梳理、玩法设计、视觉实现、开发、测试和交付的顺序推进。"],
  ["03 / 只看成果", "比较页面只采用实际能打开、能试玩或有文件证据的内容，不替任何一方补推测。"],
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
          <p className="eyebrow">AI 小游戏交付对比实验</p>
          <h1>同一个小游戏需求，三种交付结果</h1>
          <p className="hero-summary">我们把“做一个像跳一跳的小游戏”交给 Work Buddy、TRAE 和 Codex，并要求它们沿用同一套工作流。你可以先试玩三个成品，再比较它们在玩法、视觉、工程和验证方式上的差别。</p>
          <div className="hero-points" aria-label="实验条件">
            <span>同一句需求</span>
            <span>同一套工作流</span>
            <span>三个可玩结果</span>
          </div>
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
                <dl>
                  <div><dt>重点</dt><dd>{project.focus}</dd></div>
                  <div><dt>适合</dt><dd>{project.bestFor}</dd></div>
                </dl>
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

      <section className="experiment-section" aria-labelledby="experiment-title">
        <div className="compact-heading">
          <p className="eyebrow">CONTEXT / 先看懂这次实验</p>
          <h2 id="experiment-title">这个页面到底在比较什么？</h2>
          <p>不是比较三张静态效果图，也不是比较谁写得更会宣传，而是观察同一个模糊想法经过同一套产品工作流后，最终会变成怎样的可运行成果。</p>
        </div>
        <div className="experiment-grid">
          {experimentSteps.map(([title, copy]) => (
            <article key={title}><strong>{title}</strong><p>{copy}</p></article>
          ))}
        </div>
        <div className="reading-guide">
          <strong>建议这样看</strong>
          <ol>
            <li>先各试玩 30 秒，感受操作和反馈。</li>
            <li>再看下方表格，理解每个版本把时间花在了哪里。</li>
            <li>最后打开成果页，查看真实交付、优势和限制。</li>
          </ol>
        </div>
      </section>

      <section className="comparison-section" id="compare">
        <div className="compact-heading">
          <p className="eyebrow">RESULT / 结果怎么理解</p>
          <h2>没有绝对赢家，只有不同优先级</h2>
          <p>Work Buddy 优先“尽快可玩”，TRAE 优先“反馈完整”，Codex 优先“产品化与可继续开发”。下面逐项说明差别来自哪里。</p>
        </div>
        <div className="verdict-grid">
          {projects.map((project) => (
            <article className={`tone-${project.key}`} key={project.key}>
              <span>{project.number} / {project.maker}</span>
              <strong>{project.verdict}</strong>
            </article>
          ))}
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
        <p className="evidence-note">证据边界：这里只陈述三个成果目录中实际可见的代码、页面、文档和测试。网页能运行不等于微信真机已经通过；没有证据的能力不作推定。</p>
      </section>

      <section className="deep-dive-section">
        <div className="compact-heading">
          <p className="eyebrow">DEEP DIVE / 继续看</p>
          <h2>打开每一份完整成果</h2>
          <p>成果页会说明这个版本的实现思路、实际交付、适合什么场景，以及目前还不能证明什么。</p>
        </div>
        <div className="deep-dive-grid">
          {projects.map((project) => (
            <Link className={`deep-dive-row tone-${project.key}`} href={`/${project.key}`} key={project.key}>
              <span className="project-no">{project.number}</span>
              <strong>{project.maker}</strong>
              <span><b>{project.title}</b><small>{project.verdict}</small></span>
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
        <div className="detail-intro">
          <strong>{project.verdict}</strong>
          <p>{project.explanation}</p>
        </div>
      </section>

      <section className="game-room" id="game">
        <div className="game-frame"><iframe title={`${project.title} 在线试玩`} src={publicUrl(project.game)} /></div>
        <div className="game-tools">
          <span>ONLINE PLAYABLE BUILD</span>
          <h2>怎么玩</h2>
          <p>{project.playLoop}</p>
          <dl>
            <div><dt>交付形式</dt><dd>{project.delivery}</dd></div>
            <div><dt>更适合</dt><dd>{project.bestFor}</dd></div>
          </dl>
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
