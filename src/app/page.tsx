
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive web applications with frontend interfaces, backend functionality, authentication, databases, and API integrations.",
  },
  {
    number: "02",
    title: "IT Support & Troubleshooting",
    description:
      "Investigating technical issues, troubleshooting application problems, and helping users work more effectively with digital systems.",
  },
  {
    number: "03",
    title: "Virtual Assistance & Administration",
    description:
      "Supporting daily operations through email management, scheduling, organized records, documentation, and administrative coordination.",
  },
  {
    number: "04",
    title: "Customer Support & Digital Workflows",
    description:
      "Organizing customer inquiries, configuring support tools, maintaining CRM records, and improving everyday business workflows.",
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive interfaces and practical user experiences for web applications.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Implementing application logic, authentication, data handling, and integrations.",
    tags: ["API Routes", "Server-side Logic", "Authentication"],
  },
  {
    number: "03",
    title: "Databases & Integrations",
    description:
      "Connecting applications to databases, managing application data, and integrating external services.",
    tags: ["Supabase", "PostgreSQL", "REST APIs", "Third-party Integrations"],
  },
  {
    number: "04",
    title: "IT & Customer Support",
    description:
      "Troubleshooting issues, documenting solutions, and supporting customers through digital systems.",
    tags: ["Freshdesk", "Ticket Management", "Knowledge Bases", "Troubleshooting"],
  },
  {
    number: "05",
    title: "Productivity & CRM",
    description:
      "Organizing information, coordinating tasks, and supporting structured business workflows.",
    tags: ["Airtable", "HubSpot", "Trello", "Asana", "ClickUp", "Google Workspace"],
  },
  {
    number: "06",
    title: "Automation & Digital Tools",
    description:
      "Using digital tools to coordinate schedules, support communication, and simplify recurring tasks.",
    tags: ["Zapier", "Calendly", "Slack", "Canva", "Email Management"],
  },
];

const projects = [
  {
    number: "01",
    type: "FULL-STACK DEVELOPMENT",
    title: "More Dollar",
    description:
      "A career platform designed to help job seekers discover opportunities, manage career profiles, tailor application documents with AI, and access subscription-based features.",
    role: "Full-Stack Development",
    tools: "Next.js · React · TypeScript · Supabase",
    work: "Authentication · Job Discovery · AI Features · Subscriptions",
    tags: ["Next.js", "Supabase", "AI Integration", "Payments"],
    href: "https://more-dollar.vercel.app/",
    linkLabel: "Explore Project",
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "FleetTrack",
    description:
      "A fleet management application focused on vehicle tracking, owner and driver experiences, and subscription-based access to fleet management features.",
    role: "Full-Stack Product Development",
    tools: "Next.js · React · Backend Integrations",
    work: "User Roles · Fleet Management · Subscription Features",
    tags: ["Web Applications", "Authentication", "Subscriptions"],
    href: "https://fleet-track-ehve.vercel.app/",
    linkLabel: "Explore Project",
  },
  {
    number: "03",
    type: "BUSINESS WEBSITE",
    title: "KINGSIZE Beverages",
    description:
      "A digital presence for a beverage brand, bringing its identity and business information together in an accessible online experience.",
    role: "Website Development",
    tools: "Web Technologies",
    work: "Business Presentation · Website Experience",
    tags: ["Business Website", "Web Development", "Responsive Design"],
    href: "https://kingsize-beverages.vercel.app/",
    linkLabel: "Visit Live Website",
  },
  {
    number: "04",
    type: "CUSTOMER SUPPORT SYSTEM",
    title: "Freshdesk Support System",
    description:
      "Configured a customer support system for Stylex Systems Limited, including a knowledge base, support widget, ticket management workflow, and customer email communication setup.",
    role: "Support System Setup",
    tools: "Freshdesk · Blogspot · Email",
    work: "Knowledge Base · Ticketing · Web Widget",
    tags: ["Freshdesk", "Knowledge Base", "Ticketing"],
    href: "https://zohomail6649.freshdesk.com/a/solutions/articles/158000460296",
    linkLabel: "View Support Project",
    caseStudy: "/freshdesk-case-study.pdf",
  },
  {
    number: "05",
    type: "CRM & WORKFLOW",
    title: "Airtable Job Application System",
    description:
      "Built an application management workflow to collect candidate information, organize CV submissions, and structure application review.",
    role: "Workflow & Data Setup",
    tools: "Airtable · Forms · Records",
    work: "Application Form · Data Collection · Evaluation Workflow",
    tags: ["Airtable", "Forms", "Data Management"],
    href: "https://airtable.com/appDrQHlMv1L7W1Wy/shrpFz6glawzBZxao",
    linkLabel: "View Airtable Project",
    caseStudy: "/airtable-case-study.pdf",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="cinematic-page">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">K</span>
            <span>Kingsley Valerian</span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <a href="#contact" className="button button-primary nav-cta">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section id="home" className="hero cinematic-hero">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb-one" />
          <span className="hero-orb hero-orb-two" />
          <span className="hero-grid-lines" />
        </div>

        <div className="container hero-grid">
          <div className="hero-content reveal reveal-left">
            <p className="eyebrow hero-eyebrow">
              FULL-STACK DEVELOPER <span>·</span> IT SUPPORT <span>·</span>{" "}
              DIGITAL OPERATIONS
            </p>

            <h1 className="hero-title">
              I build digital experiences that{" "}
              <span>move things forward.</span>
            </h1>

            <p className="hero-description">
              From full-stack web applications to backend integrations and
              practical technical solutions, I turn ideas and everyday problems
              into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore My Work <span aria-hidden="true">↗</span>
              </a>

              <a
                href="/Kingsley_Valerian_Master_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                View My CV <span aria-hidden="true">↗</span>
              </a>

              <Link href="/blog" className="button button-secondary">
                Read My Blog <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="hero-meta">
              <span>Frontend & Backend</span>
              <span>Practical Problem-Solving</span>
              <span>Open to Opportunities</span>
            </div>
          </div>

          <div className="hero-image-wrap reveal reveal-right">
            <div className="hero-image-frame">
              <div className="hero-image-card">
                <img
                  src="/kingsley-profile.jpg"
                  alt="Portrait of Kingsley Valerian"
                  fetchPriority="high"
                />
                <div className="image-overlay">
                  <span className="image-label">
                    DEVELOPER & DIGITAL PROFESSIONAL
                  </span>
                  <strong>Kingsley Valerian</strong>
                  <span>Building. Solving. Improving.</span>
                </div>
              </div>
              <span className="hero-frame-corner hero-frame-corner-one" />
              <span className="hero-frame-corner hero-frame-corner-two" />
            </div>

            <div className="hero-image-note">
              <span className="note-dot" />
              Open to remote and entry-level opportunities
            </div>
          </div>
        </div>

        <a href="#services" className="scroll-cue" aria-label="Scroll to explore">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-cue-line" />
        </a>

        <span className="hero-index" aria-hidden="true">
          01 / 06
        </span>
      </section>

      <section id="services" className="section cinematic-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">01 — WHAT I DO</p>
            <h2>Technology and support for real-world needs.</h2>
            <p>
              Good digital work is more than making something look right. It
              should solve a problem, support people, and make everyday tasks
              easier.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="card service-card reveal"
                key={service.number}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="text-link">
                  Discuss a project <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-secondary cinematic-section" id="skills">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">02 — SKILLS & TECHNOLOGIES</p>
            <h2>A practical mix of development and digital operations.</h2>
            <p>
              Tools and technologies I have used in projects or explored
              through hands-on practice, with my strongest technical focus on
              building and improving web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article
                className="card skill-card reveal"
                key={group.number}
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              >
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section cinematic-projects">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">03 — SELECTED WORK</p>
            <h2>Ideas made real. Problems approached with purpose.</h2>
            <p>
              A selection of web applications, business websites, and digital
              systems demonstrating my work across development, integrations,
              customer support, and workflow organization.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`card project-card reveal ${
                  index === 0 ? "project-card-featured" : ""
                }`}
                key={project.number}
                style={{ transitionDelay: `${(index % 2) * 120}ms` }}
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-details">
                  <div>
                    <span>ROLE</span>
                    <strong>{project.role}</strong>
                  </div>
                  <div>
                    <span>TECHNOLOGIES & TOOLS</span>
                    <strong>{project.tools}</strong>
                  </div>
                  <div>
                    <span>KEY FEATURES</span>
                    <strong>{project.work}</strong>
                  </div>
                </div>

                <div className="skill-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    {project.linkLabel} <span aria-hidden="true">↗</span>
                  </a>

                  {"caseStudy" in project && project.caseStudy && (
                    <a
                      href={project.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-secondary"
                    >
                      Case Study <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note reveal">
            Each project reflects practical work across digital products,
            customer support, and business workflows.
          </p>

          <div className="reveal" style={{ marginTop: "28px" }}>
            <Link href="/blog" className="button button-secondary">
              Read the stories behind my projects{" "}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section section-secondary cinematic-section"
      >
        <div className="container about-grid">
          <div className="reveal reveal-left">
            <p className="eyebrow">04 — A LITTLE ABOUT ME</p>
            <h2>Curious by nature. Practical in approach. Always building.</h2>
          </div>

          <div className="about-copy reveal reveal-right">
            <p>
              I&apos;m Kingsley Valerian, a digital professional with hands-on
              experience building web applications and configuring digital
              support systems. My work spans frontend interfaces, backend
              functionality, data integrations, and customer support tools.
            </p>

            <p>
              I approach projects by understanding the problem first, breaking
              it into manageable steps, and choosing tools that fit the task. I
              value clear communication, maintainable solutions, and learning
              through building.
            </p>

            <p>
              I&apos;m open to junior full-stack development roles, IT support
              opportunities, remote internships, and projects where I can
              contribute while continuing to grow.
            </p>

            <a href="#contact" className="text-link">
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section cinematic-contact">
        <div className="container">
          <div className="contact-card card reveal">
            <div className="contact-copy">
              <p className="eyebrow">05 — LET&apos;S CONNECT</p>
              <h2>Have a role, a project, or an idea worth building?</h2>
              <p>
                I&apos;m open to opportunities in full-stack development,
                technical support, and digital operations. Let&apos;s talk
                about how I could contribute.
              </p>

              <div className="contact-details">
                <span>Remote opportunities</span>
                <span>Entry-level & junior roles</span>
                <span>Available for collaboration</span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:kingsleyvalerian6@gmail.com?subject=Portfolio%20Inquiry"
                className="button button-primary"
              >
                Email Me <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/valerian-kingsley-chinonso/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                LinkedIn Profile <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://github.com/kingsley-valerian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Find me on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-brand">
            Kingsley Valerian
          </a>
          <p>Full-Stack Development · IT Support · Digital Operations</p>
          <p>© {new Date().getFullYear()} Kingsley Valerian</p>
          <Link href="/blog">Blog</Link>
        </div>
      </footer>
    </main>
  );
}

