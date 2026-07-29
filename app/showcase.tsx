"use client";

import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicUrl = (path: string) => `${publicBasePath}${path}`;

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
    key: "work-buddy", number: "01", maker: "WORK BUDDY", title: "财神跳一跳",
    subtitle: "轻量直接，最接近经典玩法", game: "/games/work-buddy/index.html",
    summary: "单文件 Canvas 游戏，用最短路径完成连续蓄力跳跃。",
    focus: "先把“蓄力—起跳—落点—继续”的核心循环做出来",
    playLoop: "按住蓄力，松手起跳，落到下一块平台继续得分",
    delivery: "一个 HTML 文件，打开即可运行", bestFor: "想快速验证经典跳一跳玩法的人",
    explanation: "Work Buddy 选择了最短交付路径：不扩展世界观，也不增加复杂系统，先保证玩家一打开就知道怎么玩。它的价值在于速度和清晰度，代价是视觉表达与工程证据较少。",
    verdict: "三者中最轻、最快，也最像一个玩法验证版。",
    facts: ["1 个可运行 HTML", "Canvas 绘制", "本地最高分", "连续平台生成"],
    strengths: ["打开即玩，交付形态最轻", "核心循环清晰，学习成本低", "无外部服务依赖"],
    limits: ["视觉资产较少，品牌辨识度弱", "交付文档与游戏代码分离", "缺少独立自动化测试文件"],
  },
  {
    key: "trae", number: "02", maker: "TRAE", title: "Codex 跳一跳",
    subtitle: "反馈更密，街机感更完整", game: "/games/trae/index.html",
    summary: "加入开场面板、蓄力条、连击、粒子与音效反馈。",
    focus: "在经典连续跳跃上补足即时反馈和街机节奏",
    playLoop: "开始游戏，观察蓄力条，连续落点触发连击和声效",
    delivery: "一个 HTML 文件，同时支持键盘与触屏", bestFor: "更看重操作反馈和游戏氛围的人",
    explanation: "TRAE 沿用经典蓄力跳跃，但把重点放在玩家每次操作后的反馈：蓄力过程更明确，成功和连击更有存在感，声音与粒子让游戏更像一个完整街机小品。",
    verdict: "三者中反馈最密，试玩时最容易立刻感到“像游戏”。",
    facts: ["1 个可运行 HTML", "Canvas + WebAudio", "连击反馈", "键盘与触屏"],
    strengths: ["状态反馈更完整", "桌面与移动端操作兼容", "视觉风格统一且辨识度较高"],
    limits: ["文件标题仍保留 Codex 命名", "成果来源目录混有其他项目", "缺少对应的独立测试证据"],
  },
  {
    key: "codex", number: "03", maker: "CODEX", title: "灯跃浮岛",
    subtitle: "原创选路，产品化最完整", game: "/games/codex/index.html",
    summary: "按住纸灯蓄力，左右选择路线，在连续浮岛间推进。",
    focus: "把视觉世界观、路线选择和交付流程一起产品化",
    playLoop: "先选稳行或冒险路线，再按住纸灯蓄力并松手起跳",
    delivery: "微信小游戏源码、网页原型、视觉素材、测试与问题库", bestFor: "希望继续做成正式产品并保留扩展空间的人",
    explanation: "Codex 没有只复刻经典玩法，而是把纸灯、折纸浮岛和左右选路组合成新的决策机制；同时补齐文档、测试、问题库和发布准备。网页里展示的是交互原型，正式微信真机仍需 AppID 与扫码验证。",
    verdict: "三者中产品表达最完整，但交付体量和后续验证成本也最高。",
    facts: ["微信小游戏源码", "网页交互原型", "3 张原创视觉素材", "纯逻辑与启动测试"],
    strengths: ["视觉设定与玩法机制绑定", "拥有文档、问题库和回归证据", "路线选择让连续跳跃产生决策"],
    limits: ["网页展示的是设计原型，不等同微信运行包", "正式真机仍需要项目 AppID 与扫码", "现有字体资源使展示包体较大"],
  },
];

const comparisonRows = [
  ["核心玩法", "连续蓄力跳跃", "连续蓄力跳跃", "蓄力 + 左右选路"],
  ["第一次操作", "按住，松手", "按住，看蓄力条，松手", "先选路线，再按住纸灯"],
  ["反馈层次", "得分 / 失败", "蓄力 / 连击 / 音效", "路线 / 灯火 / 救援"],
  ["视觉资产", "几何平台", "深色技术风", "折纸浮岛世界"],
  ["工程交付", "单 HTML", "单 HTML", "小游戏源码 + Vite 原型"],
  ["文档与问题库", "未见独立交付", "未见独立交付", "有文档、问题库与回归记录"],
  ["测试证据", "可运行页面", "可运行页面", "测试 + 检查脚本"],
  ["正式真机", "未提供", "未提供", "仍需 AppID 与扫码验证"],
  ["适合阶段", "玩法验证", "试玩体验打磨", "产品化继续开发"],
];

const evidenceRows = [
  ["01", "需求理解", "能玩到经典跳一跳循环", "能玩到经典跳一跳循环", "重新定义为纸灯与浮岛选路"],
  ["02", "视觉实现", "几何平台与角色", "深色技术风界面", "折纸夜景、浮岛与纸灯素材"],
  ["03", "交互实现", "连续蓄力跳跃", "蓄力、连击、音效反馈", "稳行/冒险路线 + 蓄力跳跃"],
  ["04", "验证方式", "页面可运行", "页面可运行", "测试、检查脚本、问题库、回归证据"],
  ["05", "交付边界", "网页版本", "网页版本", "网页原型 + 微信源码，真机待用户操作"],
];

const qualitativeRows = [
  ["核心玩法完成度", "高", "高", "高"],
  ["即时反馈密度", "低", "高", "中"],
  ["视觉系统完整度", "低", "中", "高"],
  ["工程证据密度", "低", "低", "高"],
  ["后续产品空间", "中", "中", "高"],
];

const scoreRows = [
  ["核心玩法完成度", 58, 72, 94],
  ["首次操作清晰度", 64, 78, 91],
  ["反馈层次", 46, 76, 95],
  ["视觉系统", 36, 58, 97],
  ["工程交付证据", 32, 42, 89],
];

const scoreTotals = projects.map((project, index) => ({
  ...project,
  score: Math.round(scoreRows.reduce((total, row) => total + Number(row[index + 1]), 0) / scoreRows.length),
}));

function Brand({ compact = false }: { compact?: boolean }) {
  return <Link className="brand" href="/"><span className="brand-mark">J</span>{!compact && <span>JUMP LAB / 03</span>}</Link>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function ComparisonHome() {
  return (
    <main className="report-site">
      <header className="topbar"><div className="topbar-inner"><Brand /><nav><a href="#play">成果</a><a href="#matrix">逐项对比</a><span className="online-status">3 个版本在线</span></nav></div></header>

      <section className="report-hero">
        <div className="hero-copy">
          <SectionLabel>PROJECT REVIEW / 2026.07.29</SectionLabel>
          <h1>同一工作流，<br />同一个跳一跳小游戏，<br /><em>为什么做成了三种产品？</em></h1>
          <p>同一句需求，分别交给 Work Buddy、TRAE 和 Codex。这里不比较宣传语，只比较打开后能玩到的东西、实际交付的文件，以及还没有被证明的部分。</p>
        </div>
        <div className="hero-index"><strong>03</strong><span>COMPARED<br />BUILDS</span></div>
      </section>

      <section className="report-section" id="play">
        <SectionLabel>01 / DELIVERED BUILDS</SectionLabel>
        <div className="section-heading"><h2>同一个起点，不同的优先级</h2><p>先各试玩一次，再看它们把时间花在了哪里。</p></div>
        <div className="build-grid">
          {projects.map((project) => <article className={`build-card tone-${project.key}`} key={project.key}>
            <div className="build-card-top"><span>{project.number}</span><small>网页可玩</small></div>
            <h3>{project.title}</h3><p className="build-maker">{project.maker}</p>
            <div className="build-preview"><iframe title={`${project.maker} 游戏预览`} src={publicUrl(project.game)} loading="lazy" tabIndex={-1} /></div>
            <p className="build-summary">{project.summary}</p>
            <div className="build-stats"><div><b>重点</b><span>{project.focus}</span></div><div><b>交付</b><span>{project.delivery}</span></div></div>
            <p className="build-verdict">{project.verdict}</p>
            <a className="build-action" href={publicUrl(project.game)} target="_blank" rel="noreferrer">打开并试玩 ↗</a>
          </article>)}
        </div>
      </section>

      <section className="dark-section" id="signal">
        <SectionLabel>02 / QUALITATIVE SIGNAL</SectionLabel>
        <div className="section-heading"><h2>没有分数，只有取舍</h2><p>这是基于实际页面、代码和文档的定性判断，不是虚构的性能评分。</p></div>
        <div className="signal-list">{qualitativeRows.map((row) => <div className="signal-row" key={row[0]}><b>{row[0]}</b>{row.slice(1).map((value, index) => <span className={`signal-value signal-${value}`} key={`${row[0]}-${index}`}>{value}</span>)}</div>)}</div>
        <div className="signal-legend"><span>WORK BUDDY</span><span>TRAE</span><span>CODEX</span></div>
      </section>

      <section className="report-section" id="matrix">
        <SectionLabel>03 / LINE-BY-LINE</SectionLabel>
        <div className="score-panel" aria-label="三种交付评分">
          <div className="score-panel-heading"><div><span className="score-kicker">QUANTIFIED READ</span><h3>把差别换成分数</h3></div><p>评分只反映这次已交付成果的完成度，不代表最终产品质量，也不替代真机验收。</p></div>
          <div className="score-grid">
            {scoreTotals.map((project, index) => <article className={`score-card tone-${project.key}`} key={project.key}>
              <div className="score-card-top"><span>{project.maker}</span><b>{String(project.score).padStart(2, "0")}</b></div>
              <div className="score-ring" style={{ "--score": `${project.score * 3.6}deg` } as React.CSSProperties}><strong>{project.score}</strong><small>/100</small></div>
              <div className="score-bars">{scoreRows.map((row) => <div className="score-bar" key={row[0]}><span>{row[0]}</span><i><em style={{ width: `${row[index + 1]}%` }} /></i><b>{row[index + 1]}</b></div>)}</div>
            </article>)}
          </div>
          <div className="score-note"><span>评分口径</span><p>玩法可玩性 25% · 操作与反馈 25% · 视觉完成度 20% · 工程交付 20% · 验证证据 10%</p></div>
        </div>
        <div className="section-heading"><h2>逐项看，差别才真正出现</h2><p>同一个“跳一跳”标签下面，第一次操作、反馈、工程证据和正式真机边界都不一样。</p></div>
        <div className="editorial-table" role="table"><div className="table-row table-head"><b>比较维度</b>{projects.map((p) => <b key={p.key}>{p.maker}</b>)}</div>{comparisonRows.map((row) => <div className="table-row" role="row" key={row[0]}>{row.map((cell, index) => <span className={index === 0 ? "table-dimension" : ""} key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}</div>
      </section>

      <section className="report-section workflow-section">
        <SectionLabel>04 / EVIDENCE TRAIL</SectionLabel>
        <div className="section-heading"><h2>“有文件”不等于“走完流程”</h2><p>把结果拆回需求、视觉、交互、验证和交付边界，才能知道哪些已经完成，哪些仍要用户本人参与。</p></div>
        <div className="editorial-table evidence-table" role="table"><div className="table-row table-head"><b>步骤</b><b>检查点</b>{projects.map((p) => <b key={p.key}>{p.maker}</b>)}</div>{evidenceRows.map((row) => <div className="table-row" role="row" key={row[0]}>{row.map((cell, index) => <span className={index < 2 ? "table-dimension" : ""} key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}</div>
      </section>

      <section className="dark-section recommendation-section">
        <SectionLabel>05 / RECOMMENDATION</SectionLabel>
        <div className="recommendation-grid"><div><strong>V2</strong><h2>最好的第四版，不该从零开始</h2><p>保留 Work Buddy 的核心循环，吸收 TRAE 的反馈层，再用 Codex 的视觉系统和问题库把它推进到可继续开发的版本。</p></div><ol>{projects.map((p) => <li key={p.key}><b>{p.maker}</b><span>{p.verdict}</span></li>)}</ol></div>
      </section>

      <section className="report-section final-section"><SectionLabel>06 / HOW TO READ THIS</SectionLabel><div className="final-grid"><article><b>看玩法</b><p>三个入口都能直接试玩，先感受“按住—松手—落点”的差别。</p></article><article><b>看证据</b><p>成果页会标出实际文件、测试、问题库和仍需真机验证的边界。</p></article><article><b>看取舍</b><p>这里没有单一冠军，只有对当前阶段更合适的交付方式。</p></article></div></section>

      <footer><Brand compact /><p>JUMP LAB / WORKFLOW COMPARISON</p><a href="#play">回到顶部 ↑</a></footer>
    </main>
  );
}

export function ProjectShowcase({ projectKey }: { projectKey: ProjectKey }) {
  const project = projects.find((item) => item.key === projectKey)!;
  const otherProjects = projects.filter((item) => item.key !== projectKey);
  return <main className={`detail-page tone-${project.key}`}>
    <header className="topbar"><div className="topbar-inner"><Brand /><nav><Link href="/">返回总览</Link><a href="#game">立即试玩</a></nav></div></header>
    <section className="detail-hero"><SectionLabel>{project.number} / {project.maker}</SectionLabel><h1>{project.title}</h1><p>{project.subtitle}</p><div className="detail-intro"><strong>{project.verdict}</strong><p>{project.explanation}</p></div></section>
    <section className="game-room" id="game"><div className="game-frame"><iframe title={`${project.title} 在线试玩`} src={publicUrl(project.game)} /></div><div className="game-tools"><SectionLabel>ONLINE PLAYABLE BUILD</SectionLabel><h2>怎么玩</h2><p>{project.playLoop}</p><dl><div><dt>交付形式</dt><dd>{project.delivery}</dd></div><div><dt>更适合</dt><dd>{project.bestFor}</dd></div></dl><a className="button primary" href={publicUrl(project.game)} target="_blank" rel="noreferrer">打开独立游戏网页</a></div></section>
    <section className="detail-grid"><article><SectionLabel>FACTS</SectionLabel><h2>实际交付</h2><ul>{project.facts.map((item) => <li key={item}>{item}</li>)}</ul></article><article><SectionLabel>STRENGTHS</SectionLabel><h2>做得好的地方</h2><ul>{project.strengths.map((item) => <li key={item}>{item}</li>)}</ul></article><article><SectionLabel>LIMITS</SectionLabel><h2>仍然存在的限制</h2><ul>{project.limits.map((item) => <li key={item}>{item}</li>)}</ul></article></section>
    <section className="next-projects"><SectionLabel>NEXT / 继续比较</SectionLabel><div>{otherProjects.map((item) => <Link href={`/${item.key}`} key={item.key}><small>{item.number}</small>{item.maker}</Link>)}</div></section>
    <footer><Brand compact /><p>{project.maker} / RESULT DETAIL</p><Link href="/">对比全部版本</Link></footer>
  </main>;
}
