import React from 'react';
import './About.css';

const stats = [
  {
    number: '80K',
    label: 'Requests / sec',
    sub: 're-architected from 11K — 7× scale',
  },
  {
    number: '6×',
    label: 'Latency reduction',
    sub: 'classified backend overhaul',
  },
  {
    number: '50%',
    label: 'Workload cut',
    sub: 'F-35 test & certification automation',
  },
  {
    number: '10×',
    label: 'Faster bug fixes',
    sub: 'ReactJS internal tooling, F-35 program',
  },
];

interface Role {
  title: string;
  period: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

interface Company {
  name: string;
  meta: string;
  roles: Role[];
}

const experience: Company[] = [
  {
    name: 'Machina Cognita Technologies',
    meta: 'Full-time · Carlsbad, California',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Oct 2025 – Present',
        duration: '1 yr 2 mos',
        bullets: [
          'Re-architected a classified backend from <strong>11K → 80K requests/sec</strong>, achieving a <strong>6× reduction in latency</strong> and substantially improving system scalability and performance.',
          'Co-architected and spearheaded development of a <strong>platform-agnostic software architecture</strong>, enabling Google Docs–style adaptability across diverse platforms and software environments.',
          'Influenced <strong>six-figure hardware investments</strong> by defining software-driven architectural requirements and translating them into hardware specifications and recommendations.',
        ],
        skills: [],
      },
    ],
  },
  {
    name: 'Lockheed Martin',
    meta: 'Full-time · 3 yrs 5 mos · Fort Worth, Texas · On-site',
    roles: [
      {
        title: 'Platform Operations Software Engineer',
        period: 'May 2024 – Oct 2025',
        duration: '1 yr 6 mos',
        bullets: [
          'Enhanced <strong>CI/CD pipelines</strong> with Python and Groovy, improving automation efficiency and increasing user adaptability for daily and nightly builds.',
          'Developed an internal proprietary <strong>web tool using TypeScript, Python, and REST APIs</strong> to replace an outdated system, enabling broader functionality and a more responsive experience for customers and internal teams.',
          'Optimized internal build tooling with Python and C++, <strong>reducing storage requirements from gigabytes to kilobytes</strong> while improving build speeds.',
        ],
        skills: ['Python', 'TypeScript', 'Groovy', 'REST APIs', 'C++'],
      },
      {
        title: 'Embedded Software Engineer',
        period: 'May 2024 – Jan 2025',
        duration: '9 mos',
        bullets: [
          'Developed advanced <strong>onboard and helmet-mounted display features for the F-35</strong> using C++, enhancing warfighter versatility and operational performance.',
          'Implemented optimized design patterns to improve F-35 display performance, <strong>reducing runtime and increasing system efficiency</strong>.',
          'Automated testing and certification procedures, <strong>cutting workload by up to 50%</strong> and streamlining development cycles.',
          'Mentored new hires, facilitating onboarding by providing essential tools, account access, and guidance on company culture.',
          'Resolved critical front-end bugs <strong>10× faster than estimated</strong> using ReactJS, improving workplace productivity through an internal web tool.',
          'Ensured system sustainment and feature updates for the F-35 by leveraging proprietary testing languages and C++.',
        ],
        skills: ['C++', 'ReactJS', 'Software Design', 'Testing Automation'],
      },
      {
        title: 'Associate Software Engineer',
        period: 'Jun 2022 – May 2024',
        duration: '2 yrs',
        bullets: [
          'Contributed to software design and development efforts across the F-35 program.',
          'Developed core engineering skills in C++ and software design within a large-scale aerospace program.',
        ],
        skills: ['C++', 'Code Design'],
      },
    ],
  },
  {
    name: 'NAVWAR',
    meta: 'Internship · San Diego, California · Remote',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2022 – May 2022',
        duration: '5 mos',
        bullets: [
          'Performed <strong>full-stack development</strong> using HTML, CSS, and ElectronJS to create Naval testing software.',
          'Constructed logic based on existing C++ code to deliver an <strong>enhanced JavaScript application</strong>.',
          'Collaborated with civilian and naval employees to ensure product requirements and military standards were met.',
        ],
        skills: ['HTML', 'CSS', 'ElectronJS', 'JavaScript', 'C++'],
      },
    ],
  },
  {
    name: 'Viasat Inc.',
    meta: 'Internship · Carlsbad, California · Remote',
    roles: [
      {
        title: 'Full-Stack Software Engineer',
        period: 'May 2021 – Aug 2021',
        duration: '4 mos',
        bullets: [
          'Developed and enhanced <strong>full-stack web features</strong> using ReactJS and Golang, optimizing product performance and usability for clients.',
          'Integrated <strong>real-time data visualization</strong> by scaling web features to interact with REST APIs and React Redux, transforming functionality from static to dynamic real-time usage.',
        ],
        skills: ['ReactJS', 'Golang', 'REST APIs', 'Redux'],
      },
    ],
  },
];

function About() {
  return (
    <>
      {/* ── Bio & CTA ──────────────────────────────────── */}
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p className="about-bio">
          I'm Matthew Filo — a software engineer with a track record of building
          high-performance systems, shipping embedded software for the F-35, and
          architecting platforms that scale. I thrive at the intersection of
          low-level performance and modern full-stack development.
        </p>
        <div className="about-cta">
          <button
            onClick={() =>
              window.open('https://www.linkedin.com/in/matthew-filo-a2b971187/', '_blank')
            }
            className="about-button"
          >
            LinkedIn
          </button>
          <button
            onClick={() => window.open('https://github.com/MatthewFilo', '_blank')}
            className="about-button"
          >
            GitHub
          </button>
        </div>
      </section>

      {/* ── Metrics ────────────────────────────────────── */}
      <section className="App-section" style={{ maxWidth: '100%', width: 'calc(100% - 40px)' }}>
        <h2>By the Numbers</h2>
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────── */}
      <section className="App-section" style={{ maxWidth: '860px' }}>
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((company) => (
            <div className="timeline-company" key={company.name}>
              <div className="timeline-dot" />
              <div className="company-header">
                <div className="company-name">{company.name}</div>
                <div className="company-meta">
                  {company.meta.split(' · ').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span>{part}</span>
                      {i < arr.length - 1 && (
                        <span className="company-meta-sep">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="roles-stack">
                {company.roles.map((role) => (
                  <div className="role-block" key={role.title + role.period}>
                    <div className="role-header">
                      <h3 className="role-title">{role.title}</h3>
                      <div className="role-period">
                        {role.period}
                        <span className="role-duration">{role.duration}</span>
                      </div>
                    </div>
                    {role.bullets.length > 0 && (
                      <ul className="role-bullets">
                        {role.bullets.map((b, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                        ))}
                      </ul>
                    )}
                    {role.skills.length > 0 && (
                      <div className="tech-tags">
                        {role.skills.map((s) => (
                          <span className="tech-tag" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
