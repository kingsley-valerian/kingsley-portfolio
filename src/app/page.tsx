"use client";

import { useState } from "react";

const services = [
  {
    title: "Inbox & Email Management",
    description:
      "Organize inboxes, prioritize important messages, manage follow-ups, and help maintain clear communication.",
  },
  {
    title: "Calendar & Scheduling",
    description:
      "Coordinate meetings, manage appointments, schedule reminders, and keep daily priorities organized.",
  },
  {
    title: "Customer Support Assistance",
    description:
      "Handle customer inquiries, manage support tickets, respond professionally, and maintain customer records.",
  },
  {
    title: "CRM & Digital Workflows",
    description:
      "Organize client information, update records, and support efficient workflows using modern digital tools.",
  },
];


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="border-bottom">
  <div className="container nav-inner">
    <a href="/" className="brand">
      Kingsley Valerian
    </a>

    <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
  <a href="#services" onClick={() => setMenuOpen(false)}>
    Services
  </a>

  <a href="#skills" onClick={() => setMenuOpen(false)}>
    Skills & Tools
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    Projects
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>

  <a href="#contact" onClick={() => setMenuOpen(false)}>
    Contact
  </a>
</div>

    <button
      type="button"
      className="mobile-menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
    >
      {menuOpen ? "Close" : "Menu"}
    </button>

    <a href="#contact" className="button button-primary">
      Work With Me
    </a>
  </div>
</nav>
      <section className="hero">
  <div className="container hero-grid">

    <div className="hero-content fade-up">

      <p className="eyebrow">
        VIRTUAL ASSISTANT • REMOTE SUPPORT
      </p>

      <h1 className="hero-title">
        Helping businesses stay organized, productive, and focused.
      </h1>

      <p className="hero-description">
        I support founders and growing teams with administrative tasks,
        customer support, CRM organization, and digital workflows.
      </p>

      <div className="hero-actions">

  <a href="#contact" className="button button-primary">
    Work With Me
  </a>

  <a href="#projects" className="button button-secondary">
    View Projects
  </a>

  <a
    href="/Kingsley-Valerian-CV.pdf"
    target="_blank"
    className="button button-secondary"
  >
    View CV
  </a>

</div>

      <div className="hero-meta">
        <span>Remote</span>
        <span>Detail-oriented</span>
        <span>Workflow-focused</span>
      </div>

    </div>


    <div className="hero-image-card fade-up">

      <img
        src="/kingsley-profile.jpg"
        alt="Kingsley Valerian Virtual Assistant"
      />

      <div className="image-overlay">
        <strong>Kingsley Valerian</strong>
        <span>Virtual Assistant</span>
      </div>

    </div>


  </div>
</section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">SERVICES</p>
            <h2>
  Helping businesses stay organized and focused.
</h2>
            <p>
  I provide reliable virtual assistant support that helps founders and teams
  save time, improve organization, and keep daily operations running smoothly.
</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <article className="card service-card" key={service.title}>
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>      <section id="skills" className="section">
        <div className="container">
          <div className="section-heading">
           
           <p className="eyebrow">SKILLS & TOOLS</p>

<h2>
  Digital skills that keep workflows organized and efficient.
</h2>

<p>
  I use customer support platforms, CRM systems, productivity tools,
  and digital workflows to help businesses stay organized and operate smoothly.
</p>
          </div>

          <div className="skills-grid">
            <article className="card skill-card">
              <span className="skill-number">01</span>

              
              <h3>Customer Support & Communication</h3>

              <p>
                Customer communication, ticket handling, email support,
                issue tracking, follow-ups, and maintaining clear support
                records.
              </p>

              <div className="skill-tags">
                <span>Freshdesk</span>
                <span>Intercom</span>
                <span>Email Support</span>
                <span>Ticket Management</span>
              </div>
            </article>

            <article className="card skill-card">
              <span className="skill-number">02</span>

              <h3>CRM & Client Management</h3>

              <p>
                Organizing customer information, managing records, tracking
                interactions, and supporting structured client workflows.
              </p>

              <div className="skill-tags">
                <span>HubSpot</span>
                <span>Airtable</span>
                <span>CRM Workflows</span>
                <span>Data Management</span>
              </div>
            </article>

            <article className="card skill-card">
              <span className="skill-number">03</span>

              
              <h3>Project & Workflow Management</h3>

              <p>
                Task management, team communication, scheduling, workflow
                coordination, and keeping digital work organized.
              </p>

              <div className="skill-tags">
                <span>Trello</span>
                <span>Asana</span>
                <span>ClickUp</span>
                <span>Monday.com</span>
                <span>Slack</span>
              </div>
            </article>

            <article className="card skill-card">
              <span className="skill-number">04</span>

              
              <h3>Automation & Scheduling Systems</h3>

              <p>
                Connecting repetitive tasks, coordinating appointments, and
                creating smoother processes with digital automation tools.
              </p>

              <div className="skill-tags">
                <span>Zapier</span>
                <span>Calendly</span>
                <span>Picktime</span>
                <span>Google Workspace</span>
              </div>
            </article>

            <article className="card skill-card">
              <span className="skill-number">05</span>

              
              <h3>Web & Digital Solutions</h3>

              <p>
                Building and managing digital projects while developing
                practical knowledge of modern web technologies and workflows.
              </p>

              <div className="skill-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </article>

            <article className="card skill-card">
              <span className="skill-number">06</span>

              
              <h3>Content & Design Support</h3>

              <p>
                Supporting digital content workflows and creating practical
                visual assets for professional communication and online work.
              </p>

              <div className="skill-tags">
                <span>Canva</span>
                <span>Adobe Photoshop</span>
                <span>CapCut</span>
                <span>Content Support</span>
              </div>
            </article>
          </div>
        </div>
      </section>      
<section id="projects" className="section section-secondary">
  <div className="container">
    <div className="section-heading">
     <p className="eyebrow">PROJECTS</p>

<h2>
  Real projects demonstrating my digital support skills.
</h2>

<p>
  Hands-on projects showcasing customer support setup, workflow
  organization, CRM systems, and digital tools used to improve
  business operations.
</p>
    </div>

    <div className="projects-grid">

      <article className="card project-card">
        <div className="project-top">
          <span className="project-number">01</span>
          <span className="project-type">CUSTOMER SUPPORT</span>
        </div>

        <h3>Freshdesk Support System</h3>

        <p>
          Designed and configured a customer support system for Stylex Systems
Limited using Freshdesk. The project included a knowledge base,
support widget integration, ticket management workflow, and customer
email communication setup.
        </p>

        <div className="project-details">
          <div>
            <span>ROLE</span>
            <strong>Support System Setup</strong>
          </div>

          <div>
            <span>TOOLS</span>
            <strong>Freshdesk • Blogspot • Email</strong>
          </div>

          <div>
            <span>WORK COMPLETED</span>
            <strong>Knowledge Base • Ticketing • Web Widget</strong>
          </div>
        </div>

        <div className="skill-tags">
  <span>Freshdesk</span>
  <span>Knowledge Base</span>
  <span>Ticketing</span>
  <span>Web Widget</span>
</div>

<div className="project-actions">
  <a
    href="https://zohomail6649.freshdesk.com/a/solutions/articles/158000460296"
    target="_blank"
    rel="noopener noreferrer"
    className="button button-secondary"
  >
    View Project
  </a>

 <a
  href="/freshdesk-case-study.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="button button-primary"
>
  View Case Study
</a>
</div>


      </article>


      <article className="card project-card">
        <div className="project-top">
          <span className="project-number">02</span>
          <span className="project-type">CRM & DATA</span>
        </div>

        <h3>Airtable Job Application System</h3>

        <p>
          Built an Airtable-based application management system to collect
candidate information, organize CV submissions, and create a
structured workflow for reviewing applications efficiently.
        </p>

        <div className="project-details">
          <div>
            <span>ROLE</span>
            <strong>Workflow & Data Setup</strong>
          </div>

          <div>
            <span>TOOLS</span>
            <strong>Airtable • Forms • Records</strong>
          </div>

          <div>
            <span>WORK COMPLETED</span>
            <strong>
              Application Form • Data Collection • Evaluation Workflow
            </strong>
          </div>
        </div>

        <div className="skill-tags">
  <span>Airtable</span>
  <span>Forms</span>
  <span>Data Management</span>
  <span>Workflow</span>
</div>

<div className="project-actions">
  <a
    href="https://airtable.com/appDrQHlMv1L7W1Wy/shrpFz6glawzBZxao"
    target="_blank"
    rel="noopener noreferrer"
    className="button button-secondary"
  >
    View Project
  </a>

  <a
    href="/airtable-case-study.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="button button-primary"
  >
    View Case Study
  </a>
</div>
      </article>


      <article className="card project-card">
        <div className="project-top">
          <span className="project-number">03</span>
          <span className="project-type">PRODUCTIVITY</span>
        </div>

        <h3>Digital Workflow Projects</h3>

<p>
  Hands-on workflow practice using productivity and collaboration
  platforms to organize tasks, communication, and team processes.
</p>

<div className="project-details">
  <div>
    <span>ROLE</span>
    <strong>Workflow Organization</strong>
  </div>

  <div>
    <span>TOOLS</span>
    <strong>Trello • Asana • Slack • ClickUp • Zapier</strong>
  </div>

  <div>
    <span>WORK COMPLETED</span>
    <strong>
      Task Management • Collaboration • Workflow Automation
    </strong>
  </div>
</div>

<div className="skill-tags">
  <span>Trello</span>
  <span>Asana</span>
  <span>Slack</span>
  <span>ClickUp</span>
  <span>Zapier</span>
</div>
      </article>


      <article className="card project-card">
        <div className="project-top">
          <span className="project-number">04</span>
          <span className="project-type">WEB DEVELOPMENT</span>
        </div>

        <h3>Portfolio Website</h3>

<p>
  Designed and developed a responsive personal portfolio website
  to showcase virtual assistant services, digital skills, and
  practical technology projects.
</p>

<div className="project-details">
  <div>
    <span>ROLE</span>
    <strong>Frontend Development</strong>
  </div>

  <div>
    <span>TOOLS</span>
    <strong>Next.js • React • TypeScript • CSS</strong>
  </div>

  <div>
    <span>WORK COMPLETED</span>
    <strong>
      Responsive Design • Components • User Experience
    </strong>
  </div>
</div>

<div className="skill-tags">
  <span>Next.js</span>
  <span>React</span>
  <span>TypeScript</span>
  <span>CSS</span>
</div><a
  href="/"
  className="button button-secondary project-button"
>
  View Website
</a>
      </article>

    </div>
  </div>
</section>
      

      <section id="about" className="section section-secondary">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2>
  A virtual assistant focused on organized support and practical digital
  workflows.
</h2>
          </div>

          <div>
            <p>
  I&apos;m Kingsley Valerian, a virtual assistant focused on administrative
  support, customer service, CRM workflows, digital organization, and
  productivity systems.
</p>

            <p>
              My approach is simple: understand what needs to be done, keep
              information organized, communicate clearly, and use the right
              digital tools to make recurring work easier.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-card card">
          <div>
            <div>
  <p className="eyebrow">CONTACT</p>

  <h2>
  Ready to improve your daily workflow?
</h2>

<p>
  Whether you need support with administration, customer communication,
  CRM organization, or digital systems, I can help you create a more
  organized and efficient workflow.
</p>

  <div className="contact-details">
    <span>Remote support</span>
    <span>Available for opportunities</span>
    <span>kingsleyvalerian6@gmail.com</span>
  </div>
</div>
          </div>

          <div className="contact-actions">

  <a
    href="mailto:kingsleyvalerian6@gmail.com"
    className="button button-primary"
  >
    Send Me an Email
  </a>

  <a
    href="https://www.linkedin.com/in/valerian-kingsley-chinonso/"
    target="_blank"
    rel="noopener noreferrer"
    className="button button-secondary"
  >
    LinkedIn Profile
  </a>

</div>
        </div>
      </section>

      <footer>
  <div className="container footer-inner">
    <p>© {new Date().getFullYear()} Kingsley Valerian</p>

    <p>
      Virtual Assistant • Customer Support • Digital Workflows
    </p>
  </div>
</footer>
    </main>
  );
}