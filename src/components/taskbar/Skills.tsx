import React, { useState } from 'react';
import './Skills.css';
import CppSvg from '../../images/Skills/Cpp.svg';
import TypescriptSvg from '../../images/Skills/Typescript.svg';
import ReactSvg from '../../images/Skills/Reactjs.svg';
import CSharpSvg from '../../images/Skills/Csharp.svg';
import PythonSvg from '../../images/Skills/Python.svg';
import RestfulSvg from '../../images/Skills/RestfulAPI.svg';
import GolangSvg from '../../images/Skills/Golang.svg';

type Category = 'all' | 'language' | 'framework' | 'tool';

interface Company {
  name: string;
  badge: string;
}

interface Skill {
  name: string;
  category: Exclude<Category, 'all'>;
  image?: string;
  letter?: string;
  letterBg?: string;
  letterColor?: string;
  companies: Company[];
}

const COMPANIES = {
  machina: { name: 'Machina Cognita', badge: 'badge-machina' },
  lockheed: { name: 'Lockheed Martin', badge: 'badge-lockheed' },
  navwar: { name: 'NAVWAR', badge: 'badge-navwar' },
  viasat: { name: 'Viasat', badge: 'badge-viasat' },
  personal: { name: 'Personal', badge: 'badge-personal' },
} as const;

const skills: Skill[] = [
  // ── Languages ──────────────────────────────────────
  {
    name: 'C++',
    category: 'language',
    image: CppSvg,
    companies: [COMPANIES.lockheed, COMPANIES.navwar],
  },
  {
    name: 'Python',
    category: 'language',
    image: PythonSvg,
    companies: [COMPANIES.lockheed, COMPANIES.machina],
  },
  {
    name: 'TypeScript',
    category: 'language',
    image: TypescriptSvg,
    companies: [COMPANIES.lockheed, COMPANIES.viasat],
  },
  {
    name: 'Go',
    category: 'language',
    image: GolangSvg,
    companies: [COMPANIES.viasat, COMPANIES.machina],
  },
  {
    name: 'C#',
    category: 'language',
    image: CSharpSvg,
    companies: [COMPANIES.personal],
  },
  {
    name: 'JavaScript',
    category: 'language',
    letter: 'JS',
    letterBg: '#1a1a00',
    letterColor: '#f7df1e',
    companies: [COMPANIES.navwar, COMPANIES.viasat],
  },
  {
    name: 'Groovy',
    category: 'language',
    letter: 'GR',
    letterBg: '#0d1f1f',
    letterColor: '#4db6ac',
    companies: [COMPANIES.lockheed],
  },
  // ── Frameworks ─────────────────────────────────────
  {
    name: 'React.js',
    category: 'framework',
    image: ReactSvg,
    companies: [COMPANIES.lockheed, COMPANIES.viasat],
  },
  {
    name: 'Gin (Go)',
    category: 'framework',
    letter: 'GIN',
    letterBg: '#0d1a0d',
    letterColor: '#8bc34a',
    companies: [COMPANIES.machina],
  },
  {
    name: 'FastAPI',
    category: 'framework',
    letter: 'API',
    letterBg: '#0d1a1a',
    letterColor: '#00b894',
    companies: [COMPANIES.machina],
  },
  {
    name: 'Redux',
    category: 'framework',
    letter: 'RDX',
    letterBg: '#1a0d1f',
    letterColor: '#a855f7',
    companies: [COMPANIES.viasat],
  },
  {
    name: 'ElectronJS',
    category: 'framework',
    letter: 'e⁻',
    letterBg: '#0d1a1f',
    letterColor: '#47848f',
    companies: [COMPANIES.navwar],
  },
  // ── Tools ──────────────────────────────────────────
  {
    name: 'REST APIs',
    category: 'tool',
    image: RestfulSvg,
    companies: [COMPANIES.machina, COMPANIES.lockheed, COMPANIES.viasat],
  },
  {
    name: 'CI/CD',
    category: 'tool',
    letter: 'CI',
    letterBg: '#1a0d0d',
    letterColor: '#ef5350',
    companies: [COMPANIES.lockheed],
  },
  {
    name: 'Git',
    category: 'tool',
    letter: 'GIT',
    letterBg: '#1f0d0d',
    letterColor: '#f4511e',
    companies: [COMPANIES.machina, COMPANIES.lockheed, COMPANIES.navwar, COMPANIES.viasat],
  },
  {
    name: 'Embedded Systems',
    category: 'tool',
    letter: 'EMB',
    letterBg: '#0d0d1f',
    letterColor: '#5c8dc9',
    companies: [COMPANIES.lockheed],
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Languages', value: 'language' },
  { label: 'Frameworks', value: 'framework' },
  { label: 'Tools', value: 'tool' },
];

function Skills() {
  const [active, setActive] = useState<Category>('all');

  const visible =
    active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      className="App-section"
      style={{ maxWidth: '960px', width: 'calc(100% - 40px)' }}
    >
      <h2>Skills</h2>

      <div className="skills-filter">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`filter-btn${active === f.value ? ' active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visible.map((skill) => (
          <div className="skill-card" key={skill.name}>
            {skill.image ? (
              <div className="skill-icon-wrap">
                <img src={skill.image} alt={skill.name} />
              </div>
            ) : (
              <div
                className="skill-icon-letter"
                style={{
                  background: skill.letterBg ?? '#1e1e1e',
                  color: skill.letterColor ?? 'var(--color-accent)',
                  border: `1px solid ${skill.letterColor ?? 'var(--color-accent)'}33`,
                }}
              >
                {skill.letter}
              </div>
            )}

            <div className="skill-name">{skill.name}</div>

            <div className="skill-companies">
              {skill.companies.map((c) => (
                <span key={c.name} className={`company-badge ${c.badge}`}>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
