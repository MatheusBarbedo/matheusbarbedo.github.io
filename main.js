const gh = "https://github.com/MatheusBarbedo/";

const projects = [
  {
    name: "Copylândia",
    cat: "web",
    featured: true,
    stack: ".NET 8 · Angular · EF Core · SQLite · pdf.js",
    pt: "Autoatendimento de impressão (TCC). O cliente envia o PDF, escolhe as páginas, vê o preço calculado na hora e paga via Pix. Um webhook confirma o pagamento e o trabalho entra na fila da impressora com histórico de estados.",
    en: "Self-service printing kiosk (capstone project). Customers upload a PDF, pick pages, see the price instantly and pay via Pix. A webhook confirms payment and the job goes to the printer queue with status history.",
    links: [["Front-end", gh + "copylandia-frontend"], ["Back-end", gh + "copylandia-backend"]]
  },
  {
    name: "Nosso Dinheiro",
    cat: "desktop",
    stack: "Tauri 2 · React · TypeScript · Supabase",
    pt: "App desktop de finanças para casais. Controla gastos compartilhados, faz o acerto de contas entre os dois, orçamentos por categoria, lançamentos recorrentes e exportação CSV, com login e dados sincronizados na nuvem.",
    en: "Desktop finance app for couples. Tracks shared expenses, settles balances between partners, category budgets, recurring entries and CSV export, with login and cloud-synced data."
  },
  {
    name: "YouTube Downloader",
    cat: "desktop",
    stack: "Electron · Node.js · yt-dlp · ffmpeg",
    pt: "App Windows para baixar vídeos em MP4 ou MP3. Mostra prévia com capa, título e duração, deixa escolher a resolução e exibe progresso e velocidade em tempo real. Distribuído com instalador.",
    en: "Windows app to download videos as MP4 or MP3. Shows a preview with thumbnail, title and duration, lets you pick the resolution and displays live progress and speed. Shipped with an installer."
  },
  {
    name: "context-saver",
    cat: "ia",
    stack: "Node.js · Claude Code · GitHub Copilot · Codex",
    pt: "Economizador de tokens para agentes de IA de programação. Comprime automaticamente a saída de comandos verbosos (git, testes, build) antes de chegar ao agente, reduzindo custo e contexto. Zero dependências, zero instalação.",
    en: "Token saver for AI coding agents. Automatically compresses verbose command output (git, tests, builds) before it reaches the agent, cutting cost and context usage. Zero dependencies, zero install."
  },
  {
    name: "ytb-shorts",
    cat: "ia",
    stack: "Node.js · ffmpeg · yt-dlp · Claude Code",
    pt: "Gera cortes verticais (Shorts e Reels) a partir de um link do YouTube. A IA lê a transcrição e analisa os frames para escolher os melhores momentos; o script corta e enquadra cada clipe no formato vertical.",
    en: "Turns a YouTube link into vertical clips (Shorts and Reels). The AI reads the transcript and analyzes frames to pick the best moments; the script cuts and reframes each clip to vertical."
  },
  {
    name: "Limbus Companion",
    cat: "jogos",
    stack: "Tauri 2 · Vue 3 · Python · OCR · OpenCV",
    pt: "Companion desktop para Limbus Company com overlay in-game. Reconhece a tela por OCR e visão computacional para recomendar escolhas, planeja rotas e monta times. Roda 100% offline.",
    en: "Desktop companion for Limbus Company with an in-game overlay. Reads the screen with OCR and computer vision to recommend choices, plans routes and builds teams. Runs 100% offline."
  },
  {
    name: "Limbus Company PT-BR",
    cat: "jogos",
    stack: "Python · Pipelines de tradução · Glossário",
    pt: "Tradução para português dos diálogos, identidades, habilidades e termos do jogo. Quatro pipelines independentes que preservam a estrutura dos arquivos originais e seguem um glossário único.",
    en: "Brazilian Portuguese translation of the game's dialogue, identities, skills and keywords. Four independent pipelines that preserve the original file structure and follow a single glossary."
  },
  {
    name: "E7 Shop Refresher",
    cat: "jogos",
    stack: "Python · ADB · Tesseract OCR · Inno Setup",
    pt: "Automação para Epic Seven que atualiza a loja e compra itens raros sozinha, com interface gráfica, controle de velocidade e status ao vivo. Compatível com emuladores modernos de múltiplos displays.",
    en: "Epic Seven automation that refreshes the shop and buys rare items on its own, with a GUI, speed control and live status. Works with modern multi-display emulators.",
    links: [["GitHub", gh + "e7-shop-refresher"]]
  }
];

const catLabel = {
  pt: { web: "web", desktop: "desktop", ia: "ia", jogos: "jogos" },
  en: { web: "web", desktop: "desktop", ia: "ai", jogos: "games" }
};

const en = {
  "skip": "Skip to content",
  "nav.services": "Services",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "cta.contact": "Get in touch",
  "hero.eyebrow": "Senior Full Stack Developer",
  "hero.title": "Custom software, from back-end to screen.",
  "hero.lead": "APIs, web systems and desktop apps with .NET, Angular and React, plus AI automations for repetitive work.",
  "hero.cta2": "See projects",
  "now.who": "Who",
  "now.today": "Today",
  "now.todayv": "Senior Dev at Autoglass",
  "now.xp": "Experience",
  "now.xpv": "5 years in production",
  "now.base": "Base",
  "now.basev": "Brazil, working remotely",
  "services.title": "What I do",
  "s1.t": "APIs and integrations",
  "s1.d": "Solid, fast C#/.NET back-ends. Integration with third-party systems, payments, webhooks, queues, SMS, WhatsApp, OAuth2 and AWS.",
  "s2.t": "Web systems",
  "s2.d": "Dashboards, portals and internal systems in Angular or React, responsive and wired to your back-end, from prototype to production.",
  "s3.t": "Desktop apps",
  "s3.d": "Lightweight Windows apps with Tauri or Electron, with installer, updates and offline support when the business needs it.",
  "s4.t": "Automation and AI",
  "s4.d": "AI agents, scripts and bots for repetitive tasks: video processing, screen reading with OCR, workflows with Claude and Copilot.",
  "projects.title": "Projects",
  "f.all": "All",
  "f.ia": "AI and automation",
  "f.games": "Games",
  "exp.title": "Experience",
  "exp.period": "Mar 2021 to present",
  "tl.1": "Intern",
  "tl.2": "Junior Dev",
  "tl.3": "Mid-level Dev",
  "tl.4": "Senior Dev",
  "c1.t": "Vehicle inspection platform, new product",
  "c1.d": "From discovery and data modeling to delivery. Plug-and-play platform: new clients and integrators are onboarded through configuration, no new code. OAuth2 authentication for partner insurers, mobile self-inspection web app and Oracle migrations with safe rollback.",
  "c2.t": "Legacy vehicle inspection system",
  "c2.d": "Evolution and support of a critical system integrated with several insurers. Asynchronous processing with queues, SMS and WhatsApp delivery tracking and log-driven incident response.",
  "c3.t": "AI agent orchestrator",
  "c3.d": "Personal initiative: a main agent takes a task and drives planning, delegation to specialist agents, validation and testing. Evaluation with a golden dataset, memory across tasks and per-token cost control.",
  "b.1": "Angular 18 to 21 migration in production.",
  "b.2": "Messaging with SQS and Kafka; Infobip and Zenvia integrations.",
  "b.3": "Observability with Grafana, Loki and Kibana; deployments with Ansible.",
  "stack.title": "Stack",
  "stack.data": "Cloud and data",
  "stack.ai": "AI and automation",
  "stack.ops": "Quality and operations",
  "contact.title": "Get in touch",
  "contact.copy": "Copy",
  "contact.copied": "Copied"
};

const i18nEls = document.querySelectorAll("[data-i18n]");
const pt = { "contact.copied": "Copiado" };
i18nEls.forEach(el => { pt[el.dataset.i18n] = el.textContent; });

let lang = "pt";
let filter = "all";
const t = key => (lang === "pt" ? pt : en)[key] ?? pt[key];

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    observer.unobserve(e.target);
  });
}, { rootMargin: "0px 0px -60px 0px" });

function reveal(els) {
  els.forEach((el, i) => {
    el.style.setProperty("--d", `${(i % 4) * 50}ms`);
    observer.observe(el);
  });
}

function renderProjects() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.cat === filter)
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "project reveal" + (p.featured ? " featured" : "");
      const links = p.links
        ? p.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener" class="link-arrow">${label}</a>`).join("")
        : `<span class="private">${lang === "pt" ? "repositório privado" : "private repository"}</span>`;
      card.innerHTML = `
        <div class="top"><h3>${p.name}</h3><span class="cat">${catLabel[lang][p.cat]}</span></div>
        <p class="tags">${p.stack}</p>
        <p>${p[lang]}</p>
        <div class="links">${links}</div>`;
      list.appendChild(card);
    });
  reveal(list.querySelectorAll(".reveal"));
}

function setLang(next) {
  lang = next;
  i18nEls.forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  const btn = document.getElementById("lang");
  btn.textContent = lang === "pt" ? "EN" : "PT";
  btn.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
  try { localStorage.setItem("lang", lang); } catch {}
  renderProjects();
}

document.getElementById("lang").addEventListener("click", () => setLang(lang === "pt" ? "en" : "pt"));

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c === chip));
    filter = chip.dataset.filter;
    renderProjects();
  });
});

const copyBtn = document.getElementById("copy");
let copyTimer;
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("matheus.barbedo.2001@gmail.com");
    copyBtn.textContent = t("contact.copied");
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyBtn.textContent = t("contact.copy"); }, 1800);
  } catch {
    location.href = "mailto:matheus.barbedo.2001@gmail.com";
  }
});

const navLinks = document.querySelectorAll(".nav nav a");
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();

reveal(document.querySelectorAll("main .reveal"));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
