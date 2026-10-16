import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Moon,
  Sparkles,
  X,
  Award,
  Terminal,
  UserRound,
  Workflow,
  Zap,
} from "lucide-react";

// lucide-react focuses on open-source icons and does not export brand logos.
// Use a small inline SVG for the GitHub brand mark.
function Github({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.98 2.04 3.63 1.53.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.52.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}


// Inline LinkedIn brand mark: avoids importing a brand icon that this
// lucide-react package version does not export.
function Linkedin({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.42h2.95v9.48ZM6.46 8.12a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.46 10.78h-2.95v-4.61c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.69H9.73V9.42h2.83v1.29h.04c.39-.74 1.36-1.52 2.8-1.52 3 0 3.56 1.97 3.56 4.53v5.18Z" />
    </svg>
  );
}

const profile = {
  name: "Shravan",
  greeting: "HELLO, WORLD!",
  roles: ["Web Developer", "Data Analytics Enthusiast", "Creative Problem Solver"],
  tagline:
    "I turn ideas into meaningful digital experiences through code, creativity, and continuous learning.",
  location: "India",
  email: "shravanjuiya0@gmail.com",
  github: "https://github.com/shavv123",
  linkedin: "https://www.linkedin.com/in/shravan-1b46612ba/",
};

const skills = [
  { name: "HTML & CSS", level: "Web foundations", icon: Code2 },
  { name: "JavaScript", level: "Interactive experiences", icon: Terminal },
  { name: "React", level: "Frontend development", icon: Layers3 },
  { name: "Python", level: "Programming & analysis", icon: Workflow },
  { name: "Data Analytics", level: "Insights & exploration", icon: Database },
  { name: "Git & GitHub", level: "Version control", icon: Github },
];

const projects = [
  {
    number: "01",
    title: "Spice Haven — Business Website",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive, multi-page restaurant website with Home, About, Menu & Services, and Contact pages. The repository documents semantic HTML, CSS Grid/Flexbox, SCSS organization, mobile navigation, smooth scrolling, and contact-form validation.",
    tags: ["HTML5", "CSS / SCSS", "JavaScript", "Responsive UI"],
    icon: BriefcaseBusiness,
    color: "violet",
    github: "https://github.com/shavv123/business-website",
    demo: "",
  },
  {
    number: "02",
    title: "SK Finance",
    category: "FINANCE",
    description:
      "A finance application project scaffolded for Google AI Studio. Its README explains how to run the app locally and configure a Gemini API key; check the repository for the current implementation and features.",
    tags: ["Finance", "AI Studio", "Gemini API"],
    icon: Database,
    color: "cyan",
    github: "https://github.com/shavv123/sk--finance",
    demo: "",
  },
  {
    number: "03",
    title: "Social Media Dashboard",
    category: "DASHBOARD",
    description:
      "A dashboard project from your GitHub portfolio. The repository is linked here; its README does not currently provide enough detail to reliably list specific features or technologies.",
    tags: ["Dashboard", "Project", "GitHub"],
    icon: Workflow,
    color: "pink",
    github: "https://github.com/shavv123/social-media-dashboard",
    demo: "",
  },
  {
    number: "04",
    title: "Advanced Specialized Application",
    category: "WEB DEVELOPMENT",
    description:
      "A TypeScript-based application project whose README identifies Progressive Web App (PWA), GraphQL, and serverless technologies.",
    tags: ["TypeScript", "PWA", "GraphQL", "Serverless"],
    icon: Layers3,
    color: "violet",
    github: "https://github.com/shavv123/Advanced_Specialized_App",
    demo: "",
  },
  {
    number: "05",
    title: "E-commerce Backend API",
    category: "WEB DEVELOPMENT",
    description:
      "A backend API project. Its README lists JWT authentication, product APIs, cart and order functionality, plus setup instructions for running the project locally.",
    tags: ["Backend API", "JWT", "Products", "Cart & Orders"],
    icon: Database,
    color: "cyan",
    github: "https://github.com/shavv123/ecommerce-backend",
    demo: "",
  },
  {
    number: "06",
    title: "RAKSHA AI",
    category: "AI & SAFETY",
    description:
      "This repository appeared in your GitHub screenshot, but I could not verify public repository contents. The link is included for now; confirm that it is public and accessible before publishing.",
    tags: ["AI", "Project", "Repository details pending"],
    icon: Sparkles,
    color: "pink",
    github: "https://github.com/shavv123/RAKSHA-AI",
    demo: "",
  },
  {
    number: "07",
    title: "SafeHer",
    category: "AI & SAFETY",
    description:
      "A project listed in your GitHub profile. Its public repository currently does not provide a README with enough detail to describe the implementation confidently.",
    tags: ["Project", "GitHub", "Details pending"],
    icon: Award,
    color: "violet",
    github: "https://github.com/shavv123/SafeHer",
    demo: "",
  },
  {
    number: "08",
    title: "SaaS Application",
    category: "SAAS",
    description:
      "A software-as-a-service project listed on your GitHub profile. Review the repository files to confirm its current features and technology stack.",
    tags: ["SaaS", "Application", "GitHub"],
    icon: Layers3,
    color: "cyan",
    github: "https://github.com/shavv123/saas-application",
    demo: "",
  },
  {
    number: "09",
    title: "Enterprise Full Stack Project",
    category: "WEB DEVELOPMENT",
    description:
      "An enterprise-style full-stack project listed in your GitHub portfolio. The repository link is provided; a more specific summary should be added once its README documents the features and stack.",
    tags: ["Full Stack", "Enterprise", "GitHub"],
    icon: Code2,
    color: "pink",
    github: "https://github.com/shavv123/Enterprise_FullStack_Project",
    demo: "",
  },
];

const education = [
  {
    title: "GSSS Gomat, Pokhran",
    subtitle: "Class 10",
    date: "2021",
    detail: "School / Board: GSSS Gomat, Pokhran",
    marks: "78.50%",
    status: "COMPLETED",
  },
  {
    title: "GSSS RAMDEVRA Pokhran",
    subtitle: "Class 12",
    date: "2023",
    detail: "School / Board / Stream: GSSS RAMDEVRA Pokhran",
    marks: "65.00",
    status: "COMPLETED",
  },
  {
    title: "BCA",
    subtitle: "Currently Completing 2026 ",
    date: "2026",
    detail: "Current study status / year: 2026",
    marks: "7.3 CGPA",
    status: "RECENTLY COMPLETED",
  },
];

const certificates = [
  {
    title: "WordPress ",
    issuer: "WordPress Academy",
    date: "2025",
    description:
      "This certificate verifies the completion of a WordPress course, demonstrating proficiency in website development using the WordPress platform.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <Sparkles size={14} />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.roles.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Certificates", "#certificates"],
  ];

  const filters = ["ALL", "WEB DEVELOPMENT", "FINANCE", "DASHBOARD", "AI & SAFETY", "SAAS"];
  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Shravan home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">{profile.name}<span>.</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Toggle color theme"
            title="Toggle theme"
          >
            <Moon size={18} />
          </button>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="status-dot" />
              OPEN TO LEARNING & OPPORTUNITIES
            </motion.div>

            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {profile.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              I'm <span className="gradient-text">{profile.name}</span>
              <br />
              building the <span className="outline-text">next</span>
              <br />
              digital thing.
            </motion.h1>

            <div className="role-line" aria-live="polite">
              <span className="role-prefix">Currently exploring</span>
              <motion.span
                key={roleIndex}
                className="role-highlight"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-description">{profile.tagline}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <Mail size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <span>FIND ME ON</span>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <span className="social-divider" />
              <span className="location-label">📍 {profile.location}</span>
            </div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-glow" />

            <div className="profile-card">
              <div className="card-topline">
                <span className="window-dots"><i /><i /><i /></span>
                <span className="card-label">CREATIVE MODE <Zap size={12} /></span>
              </div>

              <div className="avatar-stage">
                <div className="avatar-ring">
                  <img
                    className="avatar-placeholder"
                    src="/profile.jpg"
                    alt={`${profile.name} profile portrait`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit", display: "block" }}
                  />
                </div>
                <span className="floating-icon floating-code"><Code2 size={22} /></span>
                <span className="floating-icon floating-database"><Database size={21} /></span>
                <span className="floating-icon floating-sparkle"><Sparkles size={20} /></span>
              </div>

              <div className="profile-card-bottom">
                <div>
                  <h3>{profile.name}</h3>
                  <p>Developer in progress <span>✦</span></p>
                </div>
                <div className="mini-status"><span /> ONLINE</div>
              </div>
            </div>

            <motion.div
              className="floating-note note-top"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="note-icon purple"><Terminal size={18} /></span>
              <span><strong>Code</strong><small>Build. Learn. Repeat.</small></span>
            </motion.div>

            <motion.div
              className="floating-note note-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="note-icon green"><Database size={18} /></span>
              <span><strong>Data</strong><small>Find the insight.</small></span>
            </motion.div>
          </motion.div>

          <a className="scroll-indicator" href="#about">
            <span className="scroll-icon"><ArrowDown size={15} /></span>
            SCROLL TO EXPLORE
          </a>
          <div className="hero-index">PORTFOLIO / 2026</div>
        </section>

        <section className="about-section section-wrap" id="about">
          <Reveal>
            <SectionHeading
              eyebrow="A LITTLE ABOUT ME"
              title={<>Curiosity meets <span className="gradient-text">creation.</span></>}
              description="A little context about the person behind the projects."
            />
          </Reveal>

          <div className="about-grid">
            <Reveal className="about-main-card">
              <div className="about-icon"><UserRound size={25} /></div>
              <h3>Learning today.<br />Building for tomorrow.</h3>
              <p>
                I'm {profile.name}, an aspiring technology professional interested
                in web development, data analytics, and building practical digital
                solutions. I enjoy learning by doing, exploring new tools, and
                turning concepts into projects.
              </p>
              <p>
                This portfolio is my evolving professional space for sharing
                real projects, academic milestones, certifications, and the skills
                I'm developing along the way.
              </p>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
            </Reveal>

            <Reveal className="about-side-grid" delay={0.12}>
              <div className="stat-card">
                <span className="stat-icon"><Code2 size={21} /></span>
                <strong>Build</strong>
                <p>Projects that turn ideas into useful experiences.</p>
              </div>
              <div className="stat-card">
                <span className="stat-icon cyan"><Database size={21} /></span>
                <strong>Analyze</strong>
                <p>Explore data and discover meaningful patterns.</p>
              </div>
              <div className="stat-card stat-wide">
                <span className="stat-icon pink"><GraduationCap size={21} /></span>
                <strong>Keep growing</strong>
                <p>Continuous learning, practical skills, and real-world challenges.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <Reveal>
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title={<>Skills I'm <span className="gradient-text">developing.</span></>}
              description="The tools and technologies I use or am exploring. Proficiency labels can be updated as I progress."
            />
          </Reveal>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.name} delay={index * 0.06}>
                  <div className="skill-card">
                    <div className="skill-icon"><Icon size={23} /></div>
                    <div className="skill-info">
                      <h3>{skill.name}</h3>
                      <p>{skill.level}</p>
                    </div>
                    <ArrowUpRight className="skill-arrow" size={17} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <Reveal>
            <SectionHeading
              eyebrow="SELECTED WORK"
              title={<>Ideas turned into <span className="gradient-text">projects.</span></>}
              description="A growing collection of experiments, practical work, and things I'm proud to build."
            />
          </Reveal>

          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-button active" : "filter-button"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.number} delay={index * 0.1}>
                  <article className={`project-card ${project.color}`}>
                    <div className="project-card-top">
                      <span className="project-number">{project.number} / {String(projects.length).padStart(2, "0")}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <div className="project-art">
                      <div className="art-grid" />
                      <div className="art-circle" />
                      <div className="art-window">
                        <div className="art-window-top"><i /><i /><i /></div>
                        <div className="art-code-line long" />
                        <div className="art-code-line medium" />
                        <div className="art-code-line short" />
                        <div className="art-code-line long faded" />
                        <Icon size={43} className="art-icon" />
                      </div>
                      <span className="art-spark"><Sparkles size={18} /></span>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      <div className="project-links">
                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github size={16} /> Source code <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <span className="link-placeholder"><Github size={16} /> Add GitHub URL</span>
                        )}
                        {project.demo ? (
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            Live demo <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <span className="link-placeholder">Add demo URL</span>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <p className="demo-notice">
            <Sparkles size={15} /> Project summaries are based on available repository documentation. Add live demo URLs after verifying each deployment.
          </p>
        </section>

        <section className="education-section section-wrap" id="education">
          <Reveal>
            <SectionHeading
              eyebrow="THE LEARNING JOURNEY"
              title={<>Education & <span className="gradient-text">growth.</span></>}
              description="Academic milestones, learning experiences, and achievements."
            />
          </Reveal>

          <div className="timeline">
            {education.map((item, index) => (
              <Reveal key={`${item.title}-${index}`} delay={index * 0.1}>
                <article className="timeline-card">
                  <div className="timeline-marker"><GraduationCap size={20} /></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.detail}</p>
                    <div
                      className="education-marks"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "12px",
                        padding: "10px 14px",
                        border: "1px solid rgba(145, 120, 255, 0.28)",
                        borderRadius: "12px",
                        background: "rgba(145, 120, 255, 0.07)",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem", opacity: 0.75 }}>MARKS / SCORE</span>
                      <strong>{item.marks}</strong>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <span className="draft-label">{item.status}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="demo-notice" style={{ marginTop: "22px" }}>
            <GraduationCap size={15} /> Education details are based on the information provided. BCA marks were not provided.
          </p>
        </section>

        <section className="certificates-section section-wrap" id="certificates">
          <Reveal>
            <SectionHeading
              eyebrow="CREDENTIALS & ACHIEVEMENTS"
              title={<>Proof of <span className="gradient-text">progress.</span></>}
              description="Certifications, course completions, awards, and other professional milestones."
            />
          </Reveal>

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <Reveal key={certificate.title} delay={index * 0.1}>
                <article className="certificate-card">
                  <div className="certificate-top">
                    <div className="certificate-icon"><Award size={26} /></div>
                    <span className="certificate-draft">ADD DETAILS</span>
                  </div>
                  <h3>{certificate.title}</h3>
                  <p className="certificate-issuer">{certificate.issuer} · {certificate.date}</p>
                  <p>{certificate.description}</p>
                  <div className="certificate-footer">
                    <span><Award size={15} /> Certification</span>
                    <ArrowUpRight size={18} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="privacy-note">
            <span><Moon size={15} /></span>
            Marksheets and private documents will be stored securely in the future admin system,
            not in the public website files.
          </p>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <Reveal className="contact-card">
            <div className="contact-decoration decoration-one" />
            <div className="contact-decoration decoration-two" />
            <span className="eyebrow"><Sparkles size={14} /> HAVE A PROJECT IN MIND?</span>
            <h2>Let's make something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>
              Interested in collaborating, sharing an opportunity, or talking tech?
              I'd love to hear from you.
            </p>
            <a className="button button-primary contact-button" href={`mailto:${profile.email}`}>
              Say hello <Mail size={17} />
            </a>
            <span className="contact-email">{profile.email}</span>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">{profile.name}<span>.</span></span>
        </a>
        <p>Designed with curiosity. Built with code.</p>
        <a className="back-top" href="#home">Back to top <ArrowDownRight size={16} /></a>
        <span className="copyright">© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;