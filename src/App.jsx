import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Phone,
  Terminal,
  Server,
  Network,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROFILE = {
  name: "Yapi N'Cho",
  firstName: "Jules Elisée",
  title: "Étudiant en génie informatique",
  initials: "YJ",
  location: "Abidjan, Côte d'Ivoire",
  email: "yapi.juleselisee@gmail.com",
  phone: "05 03 22 26 98",
  linkedin: "",
  github: "",
};

const EXPERIENCES = [
  {
    period: "2025",
    number: "01",
    title: "Certifications ICDL",
    place: "ICDL Africa",
    copy: "Quatre certifications internationales validant une maîtrise avancée des outils numériques : bureautique, données, présentations et environnement connecté.",
  },
  {
    period: "2024 — 2027",
    number: "02",
    title: "Licence systèmes & réseaux",
    place: "Université Jésuite d’Abidjan",
    copy: "Administration Linux et Windows, réseau Cisco, Docker, sécurité VPN/IPsec, développement C/C++/Python et supervision réseau.",
  },
  {
    period: "2023 — 2024",
    number: "03",
    title: "Baccalauréat scientifique",
    place: "Côte d’Ivoire",
    copy: "Formation scientifique Série D, construisant une base solide en mathématiques, logique, physique et résolution de problèmes.",
  },
];

const SKILLS = [
  { name: "C / C++", level: 80, icon: Code2, code: "01" },
  { name: "Python", level: 75, icon: Terminal, code: "02" },
  { name: "Linux", level: 85, icon: Server, code: "03" },
  { name: "Réseaux Cisco", level: 82, icon: Network, code: "04" },
  { name: "Windows Server", level: 70, icon: Server, code: "05" },
];

const PROJECTS = [
  {
    number: "01",
    slug: "tpdeco-architecture-sans-fil",
    type: "Projet de stage",
    title: "Étude et mise en place d’une architecture sans fil à la TPDECO",
    description:
      "Étude et mise en place d’une architecture sans fil complémentaire au réseau filaire, afin de maintenir la connectivité lorsque le réseau filaire devient indisponible.",
    technologies: ["Wi-Fi", "Réseaux", "Redondance"],
    visual: "wireless",
    images: [],
    documents: [],
    presentations: [],
  },
  {
    number: "02",
    slug: "wazuh",
    type: "Projet technique",
    title: "Projet autour de Wazuh",
    description:
      "Travail réalisé autour de Wazuh, une plateforme de supervision et de sécurité des systèmes informatiques.",
    technologies: ["Wazuh", "Supervision", "Sécurité"],
    visual: "wazuh",
    images: [],
    documents: [],
    presentations: [],
  },
  {
    number: "03",
    slug: "hotspot-mikrotik",
    type: "Projet technique",
    title: "Hotspot MikroTik",
    description:
      "Mise en place d’un hotspot MikroTik pour proposer un accès Wi-Fi au réseau.",
    technologies: ["MikroTik", "Hotspot", "Réseaux"],
    visual: "hotspot",
    images: [],
    documents: [],
    presentations: [],
  },
];

const FORMATIONS = [
  ["2026 — 2027", "Licence 3", "Systèmes informatiques & télécommunications"],
  ["2025 — 2026", "Licence 2", "Systèmes informatiques & télécommunications"],
  ["2024 — 2025", "Licence 1", "Systèmes informatiques & télécommunications"],
  ["2023 — 2024", "Baccalauréat", "Série D"],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -24, opacity: 0, duration: 0.8, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  const links = [
    ["À propos", "#about"],
    ["Expérience", "#experience"],
    ["Compétences", "#skills"],
    ["Formation", "#education"],
  ];

  return (
    <nav ref={navRef} className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="nav-monogram" href="/" aria-label="Accueil">YJ</a>
      <div className="nav-links">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </div>
      <a className="nav-cv" href="/cv-yapi-ncho.pdf" download>
        <Download size={14} /> <span>CV</span>
      </a>
      <button
        className={`nav-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <i /><i />
      </button>
      {open && (
        <div className="nav-mobile">
          {[...links, ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-index", { y: 12, opacity: 0, duration: 0.5 })
        .from(".hero-monogram", { scale: 0.8, opacity: 0, duration: 0.7 }, "-=0.2")
        .from(".hero-name .line-inner", { yPercent: 115, stagger: 0.13, duration: 0.95 }, "-=0.45")
        .from(".hero-role", { y: 18, opacity: 0, duration: 0.65 }, "-=0.5")
        .from(".hero-meta > *", { y: 12, opacity: 0, stagger: 0.09, duration: 0.5 }, "-=0.35")
        .from(".hero-actions a", { y: 12, opacity: 0, stagger: 0.1, duration: 0.55 }, "-=0.25");
      gsap.to(".hero-media", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.1 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={ref} className="hero" id="top">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-index font-mono">Portfolio / 2026</div>
      <div className="hero-monogram">
        <img src="/yapi-profile.jpg" alt={`Portrait de ${PROFILE.name} ${PROFILE.firstName}`} />
      </div>

      <div className="hero-content">
        <h1 className="hero-name" aria-label={`${PROFILE.name} ${PROFILE.firstName}`}>
          <span className="name-line"><span className="line-inner">{PROFILE.name}</span></span>
          <span className="name-line name-italic"><span className="line-inner">{PROFILE.firstName}</span></span>
        </h1>
        <p className="hero-role">{PROFILE.title}</p>

        <div className="hero-meta font-mono">
          <span><strong>Licence 3</strong> systèmes &amp; réseaux</span>
          <i />
          <span><strong>3</strong> projets</span>
          <i />
          <span><MapPin size={14} />{PROFILE.location}</span>
        </div>

        <div className="hero-actions">
          <a className="magnetic action-primary" href="/cv-yapi-ncho.pdf" download>
            <Download size={17} /> Télécharger CV
          </a>
          <a className="magnetic action-secondary" href="#contact">
            Me contacter <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span>Explorer</span><ArrowDown size={16} />
      </a>
    </header>
  );
}

function Progress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="scroll-progress"><span style={{ height: `${progress}%` }} /></div>;
}

function About() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 40, opacity: 0, duration: 0.85, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="about section-shell" id="about">
      <div className="section-label about-reveal"><span>01</span><p>À propos</p></div>
      <div className="about-grid">
        <h2 className="about-reveal">Construire des systèmes.<br /><em>Créer de la valeur.</em></h2>
        <div className="about-copy about-reveal">
          <p>Étudiant passionné en génie informatique, spécialisé en systèmes, réseaux et télécommunications à l’Université Jésuite d’Abidjan.</p>
          <p>Je transforme les environnements techniques en infrastructures fiables : administration Linux/Windows, sécurité Cisco, virtualisation et développement.</p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-head", {
        y: 24, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".experience-row", {
        x: 28, duration: 0.75, stagger: 0.13, ease: "power3.out",
        scrollTrigger: { trigger: ".experience-list", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="experience section-shell" id="experience">
      <div className="section-label experience-head"><span>02</span><p>Expérience</p></div>
      <div className="experience-layout">
        <h2 className="experience-head">Mon parcours.</h2>
        <div className="experience-list">
          {EXPERIENCES.map((item) => (
            <article className="experience-row" key={item.number}>
              <span className="row-number font-mono">{item.number}</span>
              <div className="row-period font-mono">{item.period}</div>
              <div className="row-main">
                <h3>{item.title}</h3>
                <p className="row-place">{item.place}</p>
                <p className="row-copy">{item.copy}</p>
              </div>
              <ArrowUpRight className="row-arrow" size={22} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-row", {
        x: -40, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".skills-list", start: "top 78%" },
      });
      document.querySelectorAll(".skill-fill").forEach((bar) => {
        gsap.fromTo(bar, { width: "0%" }, {
          width: bar.dataset.level + "%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: bar, start: "top 82%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="skills section-shell" id="skills">
      <div className="section-label"><span>03</span><p>Compétences</p></div>
      <div className="skills-layout">
        <h2>Expertise<br /><em>technique.</em></h2>
        <div className="skills-list">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skill-row" key={skill.name}>
                <span className="skill-code font-mono">{skill.code}</span>
                <Icon className="skill-icon" size={21} />
                <h3>{skill.name}</h3>
                <div className="skill-track"><span className="skill-fill" data-level={skill.level} /></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-entry", {
        y: 38,
        opacity: 0,
        duration: 0.75,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: { trigger: ".project-list", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="projects section-shell">
      <div className="projects-heading">
        <div className="section-label"><span>04</span><p>Projets</p></div>
        <h2>Des idées<br /><em>devenues concrètes.</em></h2>
      </div>
      <div className="project-list">
        {PROJECTS.map((project) => (
          <a
            className="project-entry"
            key={project.number}
            href={`/portfolio/projets/${project.slug}`}
            aria-label={`Voir le projet : ${project.title}`}
          >
            <div className={`project-art project-art-${project.visual}`} aria-hidden="true">
              <span className="project-art-grid" />
              <span className="project-art-symbol">
                {project.visual === "wireless" ? "↗" : project.visual === "wazuh" ? "◉" : "⌁"}
              </span>
              <span className="project-art-number font-mono">{project.number}</span>
            </div>
            <div className="project-entry-content">
              <div className="project-entry-meta font-mono">
                <span>{project.type}</span><span>{project.number} / 03</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-row", {
        y: 28, opacity: 0, duration: 0.65, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".education-list", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="education section-shell" id="education">
      <div className="section-label"><span>05</span><p>Formation</p></div>
      <div className="education-layout">
        <h2>Les fondations.</h2>
        <div className="education-list">
          {FORMATIONS.map(([year, degree, school]) => (
            <article className="education-row" key={year}>
              <span className="font-mono">{year}</span>
              <h3>{degree}</h3>
              <p>{school}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 45, opacity: 0, duration: 0.85, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="contact section-shell" id="contact">
      <div className="contact-orb" aria-hidden="true" />
      <p className="contact-kicker font-mono contact-reveal">Disponible pour une opportunité</p>
      <h2 className="contact-reveal">Construisons<br /><em>quelque chose.</em></h2>
      <a className="contact-main contact-reveal" href={`mailto:${PROFILE.email}`}>
        Envoyer un message <ArrowUpRight size={24} />
      </a>
      <div className="contact-details contact-reveal">
        <a href={`mailto:${PROFILE.email}`}><Mail size={17} /><span>{PROFILE.email}</span></a>
        <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><Phone size={17} /><span>{PROFILE.phone}</span></a>
        <span><MapPin size={17} /><span>{PROFILE.location}</span></span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a href="#top">{PROFILE.name} {PROFILE.firstName}</a>
      <p className="font-mono">© {new Date().getFullYear()} · Portfolio</p>
      <a href="#top" aria-label="Retour en haut">Retour en haut <ArrowUpRight size={14} /></a>
    </footer>
  );
}

function ProjectDetails({ project }) {
  useEffect(() => {
    document.title = `${project.title} — Portfolio de Yapi N'Cho`;
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".project-detail-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, [project]);

  return (
    <main className="project-detail-page">
      <header className="project-detail-nav">
        <a className="project-detail-logo" href="/">YJ<span>.</span></a>
        <a className="project-back" href="/portfolio">
          <span aria-hidden="true">←</span> Retour aux projets
        </a>
      </header>

      <section className="project-detail-hero">
        <p className="font-mono project-detail-reveal">{project.type} <span>·</span> Projet {project.number}</p>
        <h1 className="project-detail-reveal">{project.title}</h1>
        <p className="project-detail-summary project-detail-reveal">{project.description}</p>
        <div className="project-detail-tags project-detail-reveal">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </section>

      <section className="project-detail-content">
        <div className="project-detail-section-heading project-detail-reveal">
          <span className="font-mono">01 / VISUELS</span>
          <h2>Images du projet</h2>
        </div>
        {project.images.length ? (
          <div className="project-gallery">
            {project.images.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <p className="project-detail-empty">Les images et captures de ce projet pourront être ajoutées ici.</p>
        )}

        <div className="project-files">
          <section className="project-file-group project-detail-reveal">
            <span className="font-mono">02 / RAPPORT</span>
            <h2>Document Word</h2>
            {project.documents.length ? (
              project.documents.map((file) => (
                <a className="project-file-link" key={file.href} href={file.href} download>
                  {file.label}<span aria-hidden="true">↓</span>
                </a>
              ))
            ) : (
              <p className="project-detail-empty">Le rapport du projet sera disponible ici.</p>
            )}
          </section>
          <section className="project-file-group project-detail-reveal">
            <span className="font-mono">03 / PRÉSENTATION</span>
            <h2>Diaporama</h2>
            {project.presentations.length ? (
              project.presentations.map((file) => (
                <a className="project-file-link" key={file.href} href={file.href} download>
                  {file.label}<span aria-hidden="true">↓</span>
                </a>
              ))
            ) : (
              <p className="project-detail-empty">La présentation PowerPoint sera disponible ici.</p>
            )}
          </section>
        </div>
        <p className="project-detail-hint">
          Pour ajouter tes fichiers, place-les dans <code>public/projects/{project.slug}/</code>, puis ajoute leurs chemins dans les données de ce projet.
        </p>
      </section>

      <footer className="project-detail-footer">
        <a href="/portfolio">← Tous les projets</a>
        <span className="font-mono">{project.number} / {String(PROJECTS.length).padStart(2, "0")}</span>
      </footer>
    </main>
  );
}

function PortfolioPage() {
  useEffect(() => {
    document.title = "Portfolio — Yapi N'Cho Jules Elisée";
    const moveCursor = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Progress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function HomePage() {
  const ref = useRef(null);

  useEffect(() => {
    document.title = "Accueil — Yapi N'Cho Jules Elisée";
    const ctx = gsap.context(() => {
      gsap.to(".home-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className="home-page" id="home">
      <div className="home-image" aria-hidden="true" />
      <div className="home-shade" aria-hidden="true" />
      <header className="home-nav">
        <a className="home-logo" href="/" aria-label="Accueil">YJ<span>.</span></a>
        <span className="home-nav-caption font-mono">Portfolio personnel · 2026</span>
        <a className="home-nav-link" href="/portfolio">Explorer le portfolio <ArrowUpRight size={15} /></a>
      </header>

      <div className="home-layout">
        <section className="home-copy">
          <p className="home-kicker font-mono"><span /> Yapi N’Cho Jules Elisée <span className="home-kicker-role">· Abidjan, CI</span></p>
          <h1 className="home-title">
            <span className="home-title-line"><span>Étudiant en</span></span>
            <span className="home-title-line home-title-accent"><span>informatique.</span></span>
          </h1>
          <p className="home-description">
            Étudiant en génie informatique à l’Université Jésuite d’Abidjan, je me forme aux systèmes, aux réseaux et à la cybersécurité, avec l’envie de transformer mes connaissances en solutions utiles.
          </p>
          <div className="home-actions">
            <a className="home-primary" href="/portfolio">Découvrir mon univers <ArrowUpRight size={18} /></a>
            <a className="home-secondary" href="/cv-yapi-ncho.pdf" download><Download size={16} /> Télécharger mon CV</a>
          </div>
        </section>

        <aside className="home-side-note">
          <img
            className="home-portrait"
            src="/yapi-profile.jpg"
            alt={`Portrait de ${PROFILE.name} ${PROFILE.firstName}`}
          />
          <span className="home-side-index font-mono">01 — 03</span>
          <p>Imaginer.<br />Structurer.<br /><em>Connecter.</em></p>
          <span className="home-side-line" />
          <span className="font-mono">ÉTUDIANT EN GÉNIE INFORMATIQUE</span>
        </aside>
      </div>

      <div className="home-bottom">
        <a className="home-scroll font-mono" href="#home-focus"><ArrowDown size={15} /> Défiler pour découvrir</a>
        <span className="home-bottom-note font-mono">SYSTÈMES · RÉSEAUX · SÉCURITÉ</span>
      </div>

      <section id="home-focus" className="home-focus">
        <div className="home-focus-heading">
          <span className="font-mono">CE QUI M’ANIME</span>
          <h2>La technique<br /><em>au service du réel.</em></h2>
        </div>
        <div className="home-focus-grid">
          <article><span>01</span><h3>Infrastructures</h3><p>Concevoir et administrer des environnements robustes, du système au réseau.</p></article>
          <article><span>02</span><h3>Sécurité</h3><p>Penser la protection des données et la résilience dès la conception.</p></article>
          <article><span>03</span><h3>Développement</h3><p>Transformer les besoins en outils utiles, clairs et bien construits.</p></article>
        </div>
        <a className="home-focus-link" href="/portfolio">Voir mon parcours complet <ArrowUpRight size={18} /></a>
      </section>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  const projectPrefix = "/portfolio/projets/";
  if (path.startsWith(projectPrefix)) {
    const slug = decodeURIComponent(path.slice(projectPrefix.length));
    const project = PROJECTS.find((item) => item.slug === slug);
    if (project) return <ProjectDetails project={project} />;
  }
  return path === "/portfolio" ? <PortfolioPage /> : <HomePage />;
}
