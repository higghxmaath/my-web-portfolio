import { useEffect, useState } from 'react'
import './App.css'
import collassiaImage from './assets/projects/collassia.png'
import myeventsImage from './assets/projects/myevents.png'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const skills = {
  frontend: ['JavaScript (ES6+)', 'React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js', 'PHP', 'Laravel'],
  databases: ['MongoDB', 'MySQL', 'SQLite', 'Firebase', 'Supabase'],
  tools: ['Git & GitHub', 'REST APIs', 'Postman', 'Vercel / Netlify'],
}

const projects = [
  {
    name: 'Collassia',
    tagline: 'Project management web app for modern teams',
    description:
      'A modern project management interface that helps teams organize work into projects, boards, and tasks with a clean, focused UI.',
    problem:
      'Small teams often outgrow spreadsheets but find large enterprise tools overwhelming and rigid for day‑to‑day collaboration.',
    solution:
      'Collassia provides lightweight project spaces with lists, statuses, and quick overviews so teams can track work without friction.',
    role: 'Designed and built the frontend experience and backend structure, defining the information architecture, reusable UI components, and project/board flows.',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://collassia.vercel.app',
    codeUrl: 'https://github.com/higghxmaath/collassia',
    year: '2025',
    image: collassiaImage,
  },
  {
    name: 'myEvents',
    tagline: 'Event discovery and management platform',
    description:
      'A web application for discovering events around you, as well as creating and managing your own events and community meetups.',
    problem:
      'Creators and communities need an easy way to share events and help attendees discover what is happening around them, without complex tooling.',
    solution:
      'myEvents lets users browse events, view details, and create their own listings with essential information, making it simple to promote and manage events.',
    role: 'Implemented the full‑stack architecture, including the frontend event flows and a backend API powering event listings and details.',
    tech: ['JavaScript', 'Modern frontend stack', 'Backend API', 'Database'],
    liveUrl: null,
    codeUrl: 'https://github.com/higghxmaath/myEvents',
    year: '2025',
    image: myeventsImage,
  },
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div
      className={`min-h-screen bg-tech-grid transition-colors duration-500 ${
        theme === 'dark' ? 'theme-dark' : 'theme-light'
      }`}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main className="flex-1">
          <Hero />
          <Services />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const isDark = theme === 'dark'

  return (
    <header
      className="site-header sticky top-0 z-30 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-neutral-200 to-white text-base font-semibold text-black shadow-lg shadow-black/10">
            MI
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[rgb(var(--text))]">
              Matthew Ibukunoluwa
            </span>
            <span className="text-muted text-[11px] font-medium uppercase tracking-[0.22em]">
              Full‑Stack Engineer
            </span>
          </div>
        </a>
        <nav className="text-body hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-[rgb(var(--text))]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="focus-ring text-body inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/30 bg-transparent text-xs font-medium shadow-sm hover:border-[rgb(var(--text))] hover:text-[rgb(var(--text))] md:h-8 md:w-8"
            aria-label="Toggle light / dark theme"
          >
            {isDark ? '☾' : '☀︎'}
          </button>
          <a
            href="#contact"
            className="btn-primary focus-ring hidden px-4 py-2 md:inline-flex"
          >
            Hire me
          </a>
          <button
            type="button"
            className="focus-ring text-body inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/30 bg-transparent hover:border-[rgb(var(--text))] hover:text-[rgb(var(--text))] md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-current transition-opacity duration-150 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute inset-x-0 top-3 h-0.5 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="sidebar-overlay fixed inset-0 z-40 md:hidden"
            onClick={closeMenu}
            aria-label="Close navigation overlay"
          />
          <div className="sidebar-panel fixed inset-y-0 right-0 z-50 w-[min(86vw,20rem)] md:hidden">
            <div className="flex h-full flex-col px-5 py-5">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-muted text-xs font-semibold uppercase tracking-[0.25em]">
                  Menu
                </span>
                <button
                  type="button"
                  className="focus-ring text-body inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700/30 hover:border-[rgb(var(--text))] hover:text-[rgb(var(--text))]"
                  onClick={closeMenu}
                  aria-label="Close navigation"
                >
                  ×
                </button>
              </div>
              <nav className="sidebar-nav flex flex-1 flex-col gap-2 overflow-y-auto text-sm font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="sidebar-link"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="text-muted mt-6 border-t border-slate-800/40 pt-4 text-xs">
                <p>Based remotely, open to remote roles and freelance work.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="section-padding pb-6 sm:pb-10"
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] lg:items-center">
        <div>
          <p className="section-title">Full‑Stack Software Engineer</p>
          <h1 className="display-font gradient-text mt-4 text-3xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            I design and build web apps that ship
          </h1>
          <p className="text-body mt-5 max-w-xl text-base sm:text-[15px]">
            Hi, I’m Matthew — a full‑stack engineer. I help teams turn ideas into
            fast, polished products with React on the frontend and
            Node/Express or PHP/Laravel on the backend.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-primary focus-ring"
            >
              Hire me for your project
            </a>
            <a href="#projects" className="pill-link">
              <span>View projects</span>
            </a>
          </div>
          <div className="text-muted mt-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
            <span className="rounded-full border border-slate-700/40 px-2.5 py-1">
              React
            </span>
            <span className="rounded-full border border-slate-700/40 px-2.5 py-1">
              Node.js &amp; Express
            </span>
            <span className="rounded-full border border-slate-700/40 px-2.5 py-1">
            PHP &amp; Laravel
            </span>
            <span className="rounded-full border border-slate-700/40 px-2.5 py-1">
              MongoDB / SQL
            </span>
          </div>
        </div>
        <div className="glass-panel relative mx-auto max-w-md p-5 sm:p-7 lg:max-w-none">
          <div className="absolute inset-x-6 -top-10 -z-10 h-32 rounded-[40px] bg-gradient-to-r from-white via-neutral-300 to-white opacity-25 blur-3xl" />
          <p className="text-muted text-xs font-medium uppercase tracking-[0.24em]">
            What I do
          </p>
          <p className="display-font gradient-text mt-3 text-lg font-semibold">
            Product UI + reliable backend
          </p>
          <p className="text-body mt-3 text-sm">
            Clean UX, solid architecture, and production-minded delivery.
          </p>
          <dl className="text-body mt-6 grid grid-cols-2 gap-4 text-xs">
            <div>
              <dt className="text-strong font-semibold">Frontend</dt>
              <dd className="mt-1">
                React, component systems, responsive layouts.
              </dd>
            </div>
            <div>
              <dt className="text-strong font-semibold">Backend</dt>
              <dd className="mt-1">
                Node/Express &amp; Laravel APIs, auth, integrations.
              </dd>
            </div>
            <div>
              <dt className="text-strong font-semibold">Databases</dt>
              <dd className="mt-1">
                MongoDB, MySQL, SQLite, Firebase, Supabase.
              </dd>
            </div>
            <div>
              <dt className="text-strong font-semibold">Collaboration</dt>
              <dd className="mt-1">
                Clear communication, async-friendly, remote-first.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-padding pt-4 sm:pt-10">
      <div className="space-y-8">
        <header>
          <p className="section-title">Services</p>
          <h2 className="section-heading gradient-text">How I can help</h2>
          <p className="text-body mt-4 max-w-2xl text-sm">
            I help teams ship web apps end-to-end—from UX and UI to APIs,
            deployment, and handover.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Full‑Stack Web App Development"
            body="Responsive, production-ready apps built with modern frontend and backend stacks."
            bullets={[
              'From idea to launch',
              'Reusable UI components',
              'Performance-minded architecture',
            ]}
          />
          <ServiceCard
            title="API & Backend Development"
            body="Clean APIs with auth, roles, and integrations—built for scale and maintainability."
            bullets={[
              'Secure auth & session handling',
              'Cleanly separated service layers',
              'Well‑documented endpoints',
            ]}
          />
          <ServiceCard
            title="Dashboards & Internal Tools"
            body="Data-heavy dashboards and internal tools with clear information hierarchy."
            bullets={[
              'Data‑rich interfaces',
              'Clear information hierarchy',
              'Built for non‑technical users',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, body, bullets }) {
  return (
    <article className="glass-panel flex flex-col gap-4 p-5 sm:p-6">
      <h3 className="display-font text-lg font-semibold text-[rgb(var(--text))]">
        {title}
      </h3>
      <p className="text-body text-sm">{body}</p>
      <ul className="text-body mt-2 space-y-1.5 text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[rgb(var(--text))]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <header className="mb-8">
        <p className="section-title">Selected work</p>
        <h2 className="section-heading gradient-text">Selected projects</h2>
        <p className="text-body mt-4 max-w-2xl text-sm">
          A few projects I’ve shipped—focused on clean UI, real workflows, and
          maintainable code.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const primaryUrl = project.liveUrl || project.codeUrl
  const primaryLabel = project.liveUrl ? 'View project' : 'View code'

  return (
    <article className="glass-panel group flex flex-col overflow-hidden">
      <div className="project-thumb relative aspect-[16/10] overflow-hidden border-b border-slate-800/40 bg-[rgba(var(--surface-2),0.35)]">
        <a
          href={primaryUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute inset-2 overflow-hidden rounded-2xl border border-slate-700/30 sm:inset-3"
          aria-label={`${primaryLabel}: ${project.name}`}
        >
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-90" />
        </a>
        <div className="absolute inset-x-4 bottom-4">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                {project.year}
              </p>
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex max-w-full"
              >
                <h3 className="mt-1 truncate text-lg font-semibold text-white">
                  {project.name}
                </h3>
              </a>
              <p className="mt-1 line-clamp-1 text-xs text-white/85">
                {project.tagline}
              </p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-link focus-ring px-3 py-1.5 text-xs"
              >
                {primaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <p className="text-body text-sm">{project.description}</p>
        <p className="text-muted text-xs">
          <span className="text-strong font-semibold">Role:</span>{' '}
          {project.role}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="text-body rounded-full border border-slate-700/30 bg-[rgba(var(--surface-2),0.22)] px-3 py-1 text-[11px] font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-3 sm:hidden">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noreferrer"
            className="pill-link focus-ring px-3 py-1.5 text-xs"
          >
            {primaryLabel}
          </a>
        </div>
      </div>
    </article>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <header className="mb-8">
        <p className="section-title">Skills &amp; stack</p>
        <h2 className="section-heading gradient-text">Skills &amp; stack</h2>
        <p className="text-body mt-4 max-w-2xl text-sm">
          Strong UI engineering, solid backend fundamentals, and pragmatic
          database work—end to end.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SkillColumn title="Frontend" items={skills.frontend} />
        <SkillColumn title="Backend" items={skills.backend} />
        <SkillColumn title="Databases" items={skills.databases} />
        <SkillColumn title="Tools & Workflow" items={skills.tools} />
      </div>
    </section>
  )
}

function SkillColumn({ title, items }) {
  return (
    <div className="glass-panel p-4 sm:p-5">
      <h3 className="text-muted text-sm font-semibold uppercase tracking-[0.18em]">
        {title}
      </h3>
      <ul className="text-body mt-3 space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <p className="section-title">About</p>
          <h2 className="section-heading gradient-text">
            I build with taste and structure
          </h2>
          <div className="text-body mt-4 space-y-3 text-sm">
            <p>
              I like products that feel obvious to use: clear screens, tight
              flows, and details that don’t get in the way.
            </p>
            <p>
              I ship end-to-end—frontend UI, backend APIs, and data—so teams can
              move fast without creating a mess.
            </p>
            <p>
              You’ll get readable code, clean architecture, and communication
              that makes building together easy.
            </p>
          </div>
        </div>
        <div className="glass-panel text-body flex flex-col justify-between gap-6 p-5 sm:p-6 text-sm">
          <div>
            <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
              Availability
            </p>
            <p className="mt-2 text-sm">Remote, worldwide.</p>
          </div>
          <div>
            <p className="text-muted text-xs font-semibold uppercase tracking-[0.24em]">
              What I enjoy building
            </p>
            <ul className="mt-2 space-y-1.5">
              <li>• Project and task management tools</li>
              <li>• Dashboards and admin panels</li>
              <li>• E-commerce platforms</li>
              <li>• Event platforms and community tools</li>
              <li>• Automation and workflow tools</li>
              <li>• Custom web applications</li>
              <li>• API development and integration</li>
              <li>• Mobile app development</li>
            </ul>
          </div>
          <p className="text-muted text-xs">Send a short brief—I'll reply in 1–2 business days.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-padding pt-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.3fr)_minmax(0,2fr)] lg:items-start">
        <div>
          <p className="section-title">Contact</p>
          <h2 className="section-heading gradient-text">Let’s talk</h2>
          <p className="text-body mt-4 max-w-xl text-sm">
            Share what you’re building and what you need. I’ll reply in 1–2
            business days.
          </p>
          <div className="text-body mt-6 space-y-2 text-sm">
            <p>
              Email:{' '}
              <a
                href="mailto:ayanmattex@gmail.com"
                className="accent-link font-medium"
              >
                ayanmattex@gmail.com
              </a>
            </p>
            <p className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://github.com/higghxmaath"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-ibukunoluwa-489a7a39b"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/higghxmaath"
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                X (Twitter)
              </a>
              <a
                href="https://wa.me/2348024948076?text=Hi%20Matthew%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="pill-link"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: 'Web application',
    budget: 'Not sure yet',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Hosted form fallback (recommended): works even when visitors have no email client configured.
    // Create a free endpoint and replace the placeholder below:
    // - https://formspree.io/
    // Example: const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxx'
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdawwray'

    if (FORMSPREE_ENDPOINT) {
      fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'portfolio-site',
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Form submission failed')
          setForm({
            name: '',
            email: '',
            projectType: 'Web application',
            budget: 'Not sure yet',
            message: '',
          })
          alert('Thanks! Your message has been sent.')
        })
        .catch(() => {
          alert(
            'Could not send via form right now. Please use the email link on this page.',
          )
        })
      return
    }

    const subject = encodeURIComponent(
      `Project inquiry from ${form.name || 'portfolio visitor'}`,
    )
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.projectType}`,
      `Budget: ${form.budget}`,
      '',
      form.message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:ayanmattex@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form
      className="glass-panel space-y-4 p-5 sm:p-7"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="display-font text-base font-semibold text-[rgb(var(--text))]">
          Project inquiry
        </h3>
        <span className="badge">Remote / Worldwide</span>
      </div>
      <p className="text-muted text-xs">
        This form opens your email client with a pre‑filled message. If you
        prefer, you can email me directly at{' '}
        <span className="text-strong font-medium">
          ayanmattex@gmail.com
        </span>
        .
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Project type"
          name="projectType"
          as="select"
          value={form.projectType}
          onChange={handleChange}
        >
          <option>Web application</option>
          <option>Dashboard / internal tool</option>
          <option>API / backend</option>
          <option>Other</option>
        </Field>
        <Field
          label="Budget range (optional)"
          name="budget"
          as="select"
          value={form.budget}
          onChange={handleChange}
        >
          <option>Not sure yet</option>
          <option>&lt; $1,000</option>
          <option>$1,000 – $3,000</option>
          <option>$3,000 – $7,000</option>
          <option>&gt; $7,000</option>
        </Field>
      </div>
      <Field
        label="Tell me about your project"
        name="message"
        as="textarea"
        value={form.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn-primary focus-ring mt-2 w-full px-4 py-2.5"
      >
        Send message
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', as = 'input', children, value, onChange }) {
  const InputTag = as === 'textarea' || as === 'select' ? as : 'input'
  const isInput = InputTag === 'input'

  return (
    <label className="field-label block text-xs font-medium">
      {label}
      {isInput ? (
        <InputTag
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="field-control focus-ring mt-1.5"
          required={name !== 'budget'}
        />
      ) : (
        <InputTag
          name={name}
          rows={as === 'textarea' ? 4 : undefined}
          value={value}
          onChange={onChange}
          className="field-control focus-ring mt-1.5"
          required={name !== 'budget'}
        >
          {children}
        </InputTag>
      )}
    </label>
  )
}

function Footer() {
  return (
    <footer className="text-muted border-t border-slate-800/40 px-4 py-5 text-xs sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Matthew Ibukunoluwa.</p>
        <p className="text-[11px]">
          Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default App
