const gh = "https://github.com/MatheusBarbedo/";

const projects = [
  {
    name: "Copylândia",
    cat: "web",
    featured: true,
    home: true,
    stack: ".NET 8, Angular, EF Core, SQLite, pdf.js",
    pt: "Autoatendimento de impressão (TCC). O cliente envia o PDF, escolhe as páginas, vê o preço calculado na hora e paga via Pix. Um webhook confirma o pagamento e o trabalho entra na fila da impressora com histórico de estados.",
    en: "Self-service printing kiosk (capstone project). Customers upload a PDF, pick pages, see the price instantly and pay via Pix. A webhook confirms payment and the job goes to the printer queue with status history.",
    links: [["Front-end", gh + "copylandia-frontend"], ["Back-end", gh + "copylandia-backend"]]
  },
  {
    name: "RPG VTT",
    cat: "web",
    home: true,
    stack: "Node.js, Express, Socket.IO, SQLite, JavaScript",
    pt: "Mesa virtual para RPG de mesa com campanhas compartilhadas, chat e rolagem de dados em tempo real, mapa com grade e encaixe, tokens com dono, desenhos, névoa de guerra e snapshots da cena. Login com papéis de mestre e jogador.",
    en: "Virtual tabletop for pen-and-paper RPGs with shared campaigns, real-time chat and dice rolls, a grid map with snapping, owned tokens, drawings, fog of war and scene snapshots. Login with game master and player roles.",
    links: [["GitHub", gh + "RPG-VVT"]]
  },
  {
    name: "Sabatina Sênior",
    cat: "web",
    stack: "HTML, CSS, JavaScript",
    pt: "Site de estudo com questões de C# e .NET, Angular, banco de dados e fundamentos no nível de entrevista para dev sênior. Você responde antes de ver a explicação, as questões erradas voltam primeiro e as alternativas são embaralhadas. Sem build, com progresso salvo no navegador.",
    en: "Study site with C# and .NET, Angular, database and fundamentals questions at senior developer interview level. You answer before seeing the explanation, missed questions come back first and options are shuffled. No build step, progress saved in the browser."
  },
  {
    name: "Hub CZN (open source)",
    cat: "desktop",
    home: true,
    stack: "Tauri 2, React, TypeScript, Tailwind CSS",
    pt: "Contribuição para um otimizador desktop open source de Chaos Zero Nightmare. Criei a seção de deck builder: montagem de decks com limite de custo, cartas filtradas por classe, variantes de epiphany, aba de persona engraving, decks salvos localmente e traduções. Cinco pull requests aceitos.",
    en: "Contribution to an open source desktop optimizer for Chaos Zero Nightmare. I built the deck builder section: deck building with a cost limit, cards filtered by class, epiphany variants, a persona engraving tab, locally saved decks and translations. Five pull requests merged.",
    links: [["Pull requests", "https://github.com/sostenesfreitas/hub-czn/pulls?q=is%3Apr+author%3AMatheusBarbedo"]]
  },
  {
    name: "Nosso Dinheiro",
    cat: "desktop",
    stack: "Tauri 2, React, TypeScript, Supabase",
    pt: "App desktop de finanças para casais. Controla gastos compartilhados e realiza o rateio de despesas entre o casal, com orçamentos por categoria, lançamentos recorrentes, exportação CSV, login e dados sincronizados na nuvem.",
    en: "Desktop finance app for couples. Tracks shared expenses and splits them between partners, with category budgets, recurring entries, CSV export, login and cloud-synced data."
  },
  {
    name: "YouTube Downloader",
    cat: "desktop",
    stack: "Electron, Node.js, yt-dlp, ffmpeg",
    pt: "App Windows para baixar vídeos em MP4 ou MP3. Mostra prévia com capa, título e duração, permite escolher a resolução e exibe progresso e velocidade em tempo real. Distribuído com instalador.",
    en: "Windows app to download videos as MP4 or MP3. Shows a preview with thumbnail, title and duration, lets you pick the resolution and displays live progress and speed. Shipped with an installer."
  },
  {
    name: "context-saver",
    cat: "ia",
    stack: "Node.js, Claude Code, GitHub Copilot, Codex",
    pt: "Economizador de tokens para agentes de IA de programação. Comprime automaticamente a saída de comandos verbosos (git, testes, build) antes de chegar ao agente, reduzindo custo e contexto. Zero dependências, zero instalação.",
    en: "Token saver for AI coding agents. Automatically compresses verbose command output (git, tests, builds) before it reaches the agent, cutting cost and context usage. Zero dependencies, zero install.",
    links: [["GitHub", gh + "context-saver"]]
  },
  {
    name: "memory-saver",
    cat: "ia",
    stack: "Node.js, Claude Code, Hooks, Markdown",
    pt: "Memória local para o Claude Code, em markdown, dentro do próprio workspace. Aprendizados, decisões e pendências ficam em arquivos separados por tipo, com índice gerado sozinho, e hooks entregam a memória na hora certa: um resumo no começo da sessão e ponteiros quando o assunto aparece no pedido. Zero dependências, roda em Windows, Linux e macOS.",
    en: "Local memory for Claude Code, in markdown, inside the workspace itself. Learnings, decisions and open items live in files split by type with an auto-generated index, and hooks deliver the memory at the right moment: a summary when the session starts and pointers when a topic comes up in the request. Zero dependencies, runs on Windows, Linux and macOS.",
    links: [["GitHub", gh + "memory-saver"]]
  },
  {
    name: "claude-kit",
    cat: "ia",
    stack: "Node.js, Claude Code, Skills, Agents",
    pt: "Segunda versão do claude-arsenal. Um catálogo de skills, agents e comandos organizados por contexto, com um agente orquestrador que escolhe o item certo para cada tarefa e ativa só o necessário, sem gastar contexto com centenas de skills ligadas. Instalador sem dependências e com testes que prepara uma máquina ou um workspace, atualiza, valida e remove o que instalou, sem sobrescrever arquivo editado no destino.",
    en: "Second version of claude-arsenal. A catalog of skills, agents and commands organized by context, with an orchestrator agent that picks the right item for each task and activates only what is needed, instead of spending context on hundreds of enabled skills. A tested, dependency-free installer sets up a machine or workspace, updates, validates and removes what it installed, without overwriting files edited at the destination."
  },
  {
    name: "claude-arsenal",
    cat: "ia",
    stack: "PowerShell, Claude Code, Skills, Agents, Hooks",
    pt: "Primeira versão do meu ambiente do Claude Code, portátil entre máquinas, hoje substituída pelo claude-kit. Skills e agents em pacotes: método de dev sênior full stack (preparar o projeto, refinar e orquestrar a tarefa), design de interface com gate de renderização, git flow pela linha de comando, README baseado em evidência do código e vídeo por código. Sincronização por hook no fim de cada sessão e retomada automática depois do limite de uso.",
    en: "First version of my portable Claude Code environment, now replaced by claude-kit. Skills and agents in packages: a senior full stack dev workflow (project setup, task refinement and orchestration), UI design with a rendering gate, git flow from the command line, evidence-based READMEs and video from code. Syncs through a hook at the end of every session and resumes automatically after the usage limit resets."
  },
  {
    name: "ytb-shorts",
    cat: "ia",
    stack: "Node.js, ffmpeg, yt-dlp, Claude Code",
    pt: "Gera cortes verticais (Shorts e Reels) a partir de um link do YouTube. A IA lê a transcrição e analisa os frames para escolher os melhores momentos; o script corta e enquadra cada clipe no formato vertical.",
    en: "Turns a YouTube link into vertical clips (Shorts and Reels). The AI reads the transcript and analyzes frames to pick the best moments; the script cuts and reframes each clip to vertical."
  },
  {
    name: "Classificador e detector web",
    cat: "ia",
    stack: "JavaScript, TensorFlow.js, Teachable Machine, COCO-SSD",
    pt: "Aplicação web que classifica roupas por imagem com um modelo treinado no Teachable Machine e detecta objetos com o COCO-SSD. Tudo roda no navegador, sem backend nem instalação.",
    en: "Web app that classifies clothing from an image with a Teachable Machine model and detects objects with COCO-SSD. Everything runs in the browser, no back-end or install.",
    links: [["GitHub", gh + "classificador-e-detector-web"]]
  },
  {
    name: "Boteco do Baralho",
    cat: "jogos",
    stack: "Unity 6, C#, Steamworks, xUnit, Blender",
    pt: "Jogo 3D de cartas brasileiro para a Steam, ambientado num boteco, em desenvolvimento e começando pela Bisca. Partidas com amigos pela Steam com host autoritativo, bots em quatro níveis completando a mesa, regras regionais que se ligam e desligam e sinais entre parceiros vistos pela câmera. Regras em C# puro cobertas por mais de 200 testes; bonecos e cenário de massinha gerados por script no Blender.",
    en: "A 3D Brazilian card game for Steam set in a corner bar, in development and starting with Bisca. Matches with friends over Steam with an authoritative host, bots at four skill levels filling the table, toggleable regional rules and partner signals seen through the camera. Rules in plain C# covered by over 200 tests; clay-style characters and set generated by script in Blender."
  },
  {
    name: "Limbus Companion",
    cat: "jogos",
    stack: "Tauri 2, Vue 3, TypeScript, C++, Python",
    pt: "Companion desktop para Limbus Company. Lê o estado do jogo ao vivo para sincronizar a coleção, acompanhar e automatizar a Mirror Dungeon; monta times, importa e exporta códigos de deck e planeja rotas. Roda 100% offline.",
    en: "Desktop companion for Limbus Company. Reads the live game state to sync your collection and to track and automate Mirror Dungeon runs; builds teams, imports and exports deck codes and plans routes. Runs 100% offline."
  },
  {
    name: "Limbus Company PT-BR",
    cat: "jogos",
    stack: "Python, Pipelines de tradução, Glossário",
    pt: "Tradução para português dos diálogos, identidades, habilidades e termos do jogo. Pipelines independentes por tipo de texto e uma camada geral que cobre o jogo inteiro fora dos capítulos, preservando a estrutura dos arquivos originais e seguindo um glossário único.",
    en: "Brazilian Portuguese translation of the game's dialogue, identities, skills and keywords. Independent pipelines per text type plus a general layer that covers the whole game outside the story chapters, preserving the original file structure and following a single glossary."
  },
  {
    name: "E7 Shop Refresher",
    cat: "jogos",
    stack: "Python, ADB, Tesseract OCR, Inno Setup",
    pt: "Automação para Epic Seven que atualiza a loja e compra itens raros sozinha, com interface gráfica, controle de velocidade e status ao vivo. Compatível com emuladores modernos de múltiplos displays.",
    en: "Epic Seven automation that refreshes the shop and buys rare items on its own, with a GUI, speed control and live status. Works with modern multi-display emulators.",
    links: [["GitHub", gh + "e7-shop-refresher"]]
  },
  {
    name: "Pacote de mods Project Zomboid",
    cat: "jogos",
    stack: "Python, Lua, Build 42",
    pt: "Mais de 50 mods de Project Zomboid fundidos em um só para jogar com amigos, com correções de compatibilidade, traduções PT-BR e scripts que montam o pacote, conferem os arquivos e ajustam a memória do jogo.",
    en: "Over 50 Project Zomboid mods merged into one pack to play with friends, with compatibility fixes, Brazilian Portuguese translations and scripts that build the pack, verify the files and tune the game's memory."
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
  "now.today": "Today",
  "now.todayv": "Senior Dev at Autoglass",
  "now.xp": "Experience",
  "now.base": "Base",
  "now.basev": "Vitória/ES, Brazil, working remotely",
  "home.projects": "Featured projects",
  "home.all": "All projects",
  "services.title": "What I do",
  "s1.t": "APIs and integrations",
  "s1.d": "Solid, fast C#/.NET back-ends. Integration with third-party systems, payments, webhooks, queues, SMS, WhatsApp, OAuth2 and AWS.",
  "s2.t": "Web systems",
  "s2.d": "Dashboards, portals and internal systems in Angular or React, responsive and wired to your back-end, from prototype to production.",
  "s3.t": "Desktop apps",
  "s3.d": "Lightweight Windows apps with Tauri or Electron, with installer, updates and offline support when the project requires it.",
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
  "c3.d": "Built on my own initiative to speed up my daily work: a main agent takes a task and drives planning, delegation to specialist agents, validation and testing. Evaluation with a golden dataset, memory across tasks and per-token cost control. Includes .NET, Angular and Oracle advisor agents backed by official sources and an agent that opens and closes git flow releases and hotfixes.",
  "b.1": "Angular 18 to 21 migration in production.",
  "b.2": "Messaging with SQS and Kafka; Infobip and Zenvia integrations.",
  "b.3": "CI/CD migration from Jenkins and Docker Swarm to Azure DevOps and Kubernetes, through production stabilization.",
  "b.4": "Production incidents and performance: pod OOM, queue redelivery and slow reports measured with Grafana, Loki and Thanos; fixes for Sonar findings.",
  "stack.title": "Stack",
  "stack.data": "Cloud and data",
  "stack.ai": "AI and automation",
  "stack.ops": "Operations",
  "contact.title": "Get in touch",
  "contact.copy": "Copy",
  "contact.copied": "Copied"
};

const i18nEls = document.querySelectorAll("[data-i18n]");
const pt = { "contact.copied": "Copiado" };
i18nEls.forEach(el => { pt[el.dataset.i18n] = el.textContent; });
const years = Math.floor((Date.now() - new Date(2021, 2, 1)) / 31557600000);
pt["now.xpv"] = `${years} anos em produção`;
en["now.xpv"] = `${years} years in production`;

let lang = "pt";
let filter = "all";
let rendered = false;
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

function projectCard(p, featured) {
  const card = document.createElement("article");
  card.className = "project reveal" + (featured ? " featured" : "") + (rendered ? " in" : "");
  const links = p.links
    ? p.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener" class="link-arrow">${label}</a>`).join("")
    : `<span class="private">${lang === "pt" ? "repositório privado" : "private repository"}</span>`;
  card.innerHTML = `
    <div class="top"><h3>${p.name}</h3><span class="cat">${catLabel[lang][p.cat]}</span></div>
    <p class="tags">${p.stack}</p>
    <p>${p[lang]}</p>
    <div class="links">${links}</div>`;
  return card;
}

function fillProjects(list, items, withFeatured) {
  list.innerHTML = "";
  items.forEach(p => list.appendChild(projectCard(p, withFeatured && p.featured)));
  if (!rendered) reveal(list.querySelectorAll(".reveal"));
}

function renderProjects() {
  const list = document.getElementById("project-list");
  if (list) fillProjects(list, projects.filter(p => filter === "all" || p.cat === filter), true);
  const home = document.getElementById("home-projects");
  if (home) fillProjects(home, projects.filter(p => p.home), false);
  rendered = true;
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
const copyStatus = document.getElementById("copy-status");
let copyTimer;
copyBtn?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("matheus.barbedo.2001@gmail.com");
    copyBtn.textContent = t("contact.copied");
    copyStatus.textContent = t("contact.copied");
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      copyBtn.textContent = t("contact.copy");
      copyStatus.textContent = "";
    }, 1800);
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
document.querySelectorAll("main section[id]").forEach(s => {
  if (document.querySelector(`.nav nav a[href="#${s.id}"]`)) spy.observe(s);
});

document.getElementById("year").textContent = new Date().getFullYear();

reveal(document.querySelectorAll("main .reveal"));

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));
