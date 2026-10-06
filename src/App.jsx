import { useEffect, useState } from 'react'
import {
  about,
  certifications,
  contact,
  education,
  experience,
  featuredProject,
  profile,
  projects,
  skills,
} from './content.js'

const navLinks = [
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
    >
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function SocialIcon({ name }) {
  const paths = {
    github: (
      <path d="M8 1.4a6.7 6.7 0 0 0-2.1 13c.34.06.46-.15.46-.33v-1.3c-1.88.41-2.28-.8-2.28-.8-.31-.78-.75-.99-.75-.99-.62-.42.05-.41.05-.41.68.05 1.04.7 1.04.7.6 1.04 1.59.74 1.98.57.06-.44.24-.74.43-.91-1.5-.17-3.08-.75-3.08-3.34 0-.74.26-1.34.7-1.81-.07-.17-.3-.86.06-1.79 0 0 .57-.18 1.84.69A6.4 6.4 0 0 1 8 4.45c.57 0 1.13.08 1.66.23 1.28-.87 1.84-.69 1.84-.69.37.93.14 1.62.07 1.79.43.47.69 1.07.69 1.81 0 2.6-1.59 3.17-3.09 3.34.24.21.46.62.46 1.25v1.89c0 .18.12.4.46.33A6.7 6.7 0 0 0 8 1.4Z" />
    ),
    linkedin: (
      <>
        <path d="M3.45 5.2H.75v8.6h2.7V5.2ZM2.1.9a1.56 1.56 0 1 0 0 3.12A1.56 1.56 0 0 0 2.1.9ZM13.9 8.86c0-2.6-1.39-3.81-3.24-3.81-1.5 0-2.17.82-2.54 1.4V5.2h-2.7v8.6h2.7V9.55c0-1.12.22-2.22 1.62-2.22 1.38 0 1.4 1.3 1.4 2.3v4.17h2.7l.06-4.94Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12.4" cy="3.8" r=".8" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="20" height="20">
      {paths[name]}
    </svg>
  )
}

function ExternalLink({ href, children, className = 'text-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalIcon />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function useTilt(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width - 0.5
  const y = (event.clientY - bounds.top) / bounds.height - 0.5

  event.currentTarget.style.setProperty('--rotate-x', `${y * -5}deg`)
  event.currentTarget.style.setProperty('--rotate-y', `${x * 7}deg`)
  event.currentTarget.style.setProperty('--pointer-x', `${(x + 0.5) * 100}%`)
  event.currentTarget.style.setProperty('--pointer-y', `${(y + 0.5) * 100}%`)
}

function resetTilt(event) {
  event.currentTarget.style.removeProperty('--rotate-x')
  event.currentTarget.style.removeProperty('--rotate-y')
}

function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = ['home', ...navLinks.map(({ href }) => href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65%', threshold: [0, 0.15, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#home" onClick={close}>
          Rishabh Mehra
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-nav"
          aria-label="Primary navigation"
          className={open ? 'open' : undefined}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.slice(1) ? 'location' : undefined
              }
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Home() {
  return (
    <section id="home" className="section hero" data-reveal>
      <div className="hero-copy reveal-copy">
        <h1>{profile.name}</h1>
        <p className="role-line">Software engineer · Backend &amp; full-stack</p>
        <p className="looking-for">{profile.lookingFor}</p>
        <div className="hero-actions">
          <a className="button primary-button" href={`mailto:${contact.email}`}>
            Email me
          </a>
          <a className="button secondary-button" href="#projects">
            View projects
          </a>
          <a
            className="button resume-button"
            href={contact.resume}
            target="_blank"
            rel="noreferrer"
          >
            Open my résumé
            <ExternalIcon />
          </a>
        </div>
      </div>
      <div
        className="system-map tilt-surface"
        aria-hidden="true"
        onPointerMove={useTilt}
        onPointerLeave={resetTilt}
      >
        <div className="system-map-grid" />
        <div className="system-node node-client">
          <span>01</span>
          <strong>Interface</strong>
        </div>
        <div className="system-node node-api">
          <span>02</span>
          <strong>API</strong>
        </div>
        <div className="system-node node-data">
          <span>03</span>
          <strong>Data</strong>
        </div>
        <svg className="system-lines" viewBox="0 0 360 300">
          <path d="M94 75 C160 80 140 148 217 148" />
          <path d="M217 148 C290 150 250 228 295 232" />
        </svg>
        <p>From interface to reliable systems</p>
      </div>
      <ul className="hero-proof" aria-label="Background highlights">
        {profile.proof.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section wide-section">
      <div className="section-heading" data-reveal>
        <h2>Education</h2>
        <p>The classrooms and communities that shaped how I learn.</p>
      </div>
      <div className="education-story">
        {education.map((item, index) => (
          <article
            className={`education-card education-card-${index + 1} tilt-surface`}
            key={item.school}
            data-reveal
            onPointerMove={useTilt}
            onPointerLeave={resetTilt}
          >
            <div className="education-year">{item.period}</div>
            <div>
              <h3>{item.school}</h3>
              <p className="education-credential">{item.credential}</p>
              {item.location && <p className="education-location">{item.location}</p>}
            </div>
            {item.highlights.length > 0 && (
              <ul className="education-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
            <p className="education-detail">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <article className="featured-project" data-reveal>
      <header className="featured-header">
        <div>
          <h3>
            {featuredProject.title}
            <span> ({featuredProject.repoName})</span>
          </h3>
          <p className="project-context">{featuredProject.context}</p>
        </div>
        <p className="project-role">{featuredProject.role}</p>
      </header>

      <div className="featured-summary">
        <p>{featuredProject.description}</p>
        <ul className="tech-list" aria-label="Care Companion technologies">
          {featuredProject.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-evidence">
        <figure
          className="evidence-product tilt-surface"
          onPointerMove={useTilt}
          onPointerLeave={resetTilt}
        >
          <a
            href="/projects/notty/product-flow.png"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Care Companion product flow prototype full size"
          >
            <img
              src="/projects/notty/product-flow.png"
              alt="Care Companion mobile product flow showing welcome, onboarding, dashboard, profile, matching, appointments, and safety screens"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>Product flow prototype</figcaption>
        </figure>
        <figure
          className="evidence-architecture tilt-surface"
          onPointerMove={useTilt}
          onPointerLeave={resetTilt}
        >
          <a
            href="/projects/notty/system-architecture.png"
            target="_blank"
            rel="noreferrer"
            aria-label="Open the Care Companion system architecture full size"
          >
            <img
              src="/projects/notty/system-architecture.png"
              alt="Care Companion system architecture connecting the React Native client, Django services, integrations, and PostgreSQL"
              loading="lazy"
              decoding="async"
            />
          </a>
          <figcaption>System architecture</figcaption>
        </figure>
      </div>

      <div className="engineering-decisions">
        <h4>Engineering decisions</h4>
        <ol>
          {featuredProject.decisions.map((decision) => (
            <li key={decision.title}>
              <strong>{decision.title}</strong>
              <span>{decision.detail}</span>
            </li>
          ))}
        </ol>
      </div>

      <ExternalLink href={featuredProject.link} className="button source-button">
        View source
      </ExternalLink>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section wide-section">
      <div className="section-heading" data-reveal>
        <h2>Selected work</h2>
        <p>
          Systems I built to understand reliability, real users, and the tradeoffs
          between them.
        </p>
      </div>
      <FeaturedProject />
      <div className="project-list">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            data-reveal
          >
            <div className="project-title-group">
              <h3>{project.title}</h3>
              <p className="project-context">{project.context}</p>
              <p className="project-detail">{project.detail}</p>
            </div>
            <div className="project-body">
              <p>{project.description}</p>
              <p className="tech">{project.tech.join(' · ')}</p>
            </div>
            <ExternalLink href={project.link}>Source</ExternalLink>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading" data-reveal>
        <h2>Experience</h2>
        <p>Four teams, each with a different kind of real-world problem.</p>
      </div>
      <ol className="experience-list">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} data-reveal>
            <div className="experience-role">
              <h3>{item.role}</h3>
              <p>
                {item.company}
                {item.location ? ` · ${item.location}` : ''}
              </p>
            </div>
            <p className="experience-period">{item.period}</p>
            <p className="experience-detail">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section wide-section">
      <div className="section-heading" data-reveal>
        <h2>Certifications</h2>
        <p>Recent coursework that strengthened my machine learning foundation.</p>
      </div>
      <div className="certificate-list">
        {certifications.map((certificate) => (
          <a
            className={`certificate-card certificate-${certificate.theme}`}
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            key={certificate.title}
            data-reveal
          >
            <div className="certificate-mark" aria-hidden="true">
              <span>ML</span>
            </div>
            <div>
              <p className="certificate-date">{certificate.date}</p>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
            </div>
            <span className="certificate-link">
              Verify certificate
              <ExternalIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div data-reveal>
        <h2>About</h2>
        {about.split('\n\n').map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <div className="skills-block" data-reveal>
        <h3>Skills</h3>
        <ul className="skill-groups">
          {skills.map((group) => (
            <li key={group.label}>
              <span className="skill-label">{group.label}</span>
              <span>{group.items.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section" data-reveal>
      <div>
        <h2>Have a role in mind?</h2>
        <p>
          I’m looking for a team where I can keep learning, own useful work, and
          make systems more reliable.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary-button" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <a
          className="button secondary-button"
          href={contact.resume}
          target="_blank"
          rel="noreferrer"
        >
          Open my résumé
          <ExternalIcon />
        </a>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    document.documentElement.classList.add('motion-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8%', threshold: 0.12 },
    )

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`)
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Home />
        <Education />
        <Projects />
        <Experience />
        <Certifications />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Rishabh Mehra</p>
        <div className="social-links" aria-label="Social profiles">
          <a href={contact.github} target="_blank" rel="noreferrer">
            <SocialIcon name="github" />
            <span>GitHub</span>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <SocialIcon name="linkedin" />
            <span>LinkedIn</span>
          </a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <SocialIcon name="instagram" />
            <span>Instagram</span>
          </a>
        </div>
      </footer>
    </>
  )
}
