import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { profile, projects, skills } from './data/portfolio';

const Arrow = ({ down = false }) => <span aria-hidden="true">{down ? '↓' : '↗'}</span>;

function Navbar() {
  const links = ['about','experience','skills','projects','education','contact'];
  return <header className="nav">
    <a className="brand" href="#top" aria-label="Back to top">DC<span>.</span></a>
    <nav aria-label="Primary navigation">{links.map(x => <a key={x} href={`#${x}`}>{x}</a>)}</nav>
    <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow/></a>
  </header>;
}

function Scene3D() {
  return <div className="hero-3d" aria-hidden="true">
    <div className="scene">
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="orbital orbital-three" />
      <div className="core"><span>DC</span></div>
    </div>
    <div className="float-tag tag-one">REACT</div>
    <div className="float-tag tag-two">JAVA</div>
    <div className="float-tag tag-three">AI</div>
  </div>;
}

function Hero() {
  return <section className="hero section-shell" id="top">
    <div className="hero-copy reveal">
      <div className="eyebrow">✦ SOFTWARE ENGINEER · FULL-STACK DEVELOPER</div>
      <h1>I build <em>reliable</em><br/>software that scales.</h1>
      <p>I’m <strong>{profile.name}</strong>, a Software Engineer focused on backend systems, RESTful APIs, databases, full-stack applications, algorithms and AI-powered products.</p>
      <div className="hero-actions">
        <a className="btn primary" href="#projects">View projects <Arrow down/></a>
        <a className="btn ghost" href="#contact">Contact me →</a>
      </div>
      <div className="hero-meta"><span>● {profile.location}</span><span>{profile.availability}</span><span>Available for Software Engineering roles</span></div>
    </div>
    <Scene3D />
    <div className="scroll-cue">SCROLL TO EXPLORE <Arrow down/></div>
  </section>;
}

function About() {
  return <section id="about" className="section-shell split-section reveal-section"><div className="section-label">01 / ABOUT</div><div className="section-content"><h2>Backend thinking.<br/><span>Full-stack execution.</span></h2><p>Software Engineer skilled in backend development, RESTful APIs, SQL, MySQL, Java, C++, and data structures and algorithms.</p><p>I build maintainable and efficient solutions around clear APIs, relational data models, indexing, JOIN-based query optimization, OOP and modular design, with a focus on scalable application development.</p><div className="stat-row"><div><strong>2026</strong><span>Computer Science graduate</span></div><div><strong>7.52</strong><span>CGPA / 10</span></div><div><strong>01</strong><span>Industry internship</span></div></div></div></section>;
}

function Experience() {
  return <section id="experience" className="section-shell experience-section reveal-section"><div className="section-label">02 / EXPERIENCE</div><div className="section-content"><h2>Frontend Developer<br/><span>Internship.</span></h2><div className="timeline-card"><div><strong>ThinkNEXT Technologies Pvt. Ltd.</strong><span>Mohali, India · May 2024 – Jun 2024</span></div><ul><li>Integrated responsive UI components with RESTful backend APIs for reliable data exchange and end-to-end feature delivery.</li><li>Troubleshot and resolved API interaction and performance issues to improve interface responsiveness and data reliability.</li><li>Collaborated via Git workflows to connect backend endpoints with frontend features alongside cross-functional team members.</li></ul></div></div></section>;
}

function Skills() {
  return <section id="skills" className="section-shell skills-section reveal-section"><div className="section-label">03 / TOOLKIT</div><div className="section-content"><h2>Technologies I use to<br/><span>build complete systems.</span></h2><div className="skill-groups">{skills.map(([group,items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-grid">{items.map(skill => <div className="skill" key={skill}>{skill}</div>)}</div></div>)}</div></div></section>;
}

function Projects() {
  return <section id="projects" className="section-shell projects-section reveal-section"><div className="section-label">04 / SELECTED WORK</div><div className="section-content"><div className="projects-head"><h2>Projects that<br/><span>show the work.</span></h2><p>Full-stack applications, database systems, algorithms and practical developer tools.</p></div><div className="project-list">{projects.map((project,index) => <article className="project" key={project.title}><div className="project-number">{String(index+1).padStart(2,'0')}</div><div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small></div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">LIVE ↗</a>}<a href={project.repo} target="_blank" rel="noreferrer">CODE ↗</a></div></article>)}</div></div></section>;
}

function Education() {
  return <section id="education" className="section-shell education-section reveal-section"><div className="section-label">05 / EDUCATION</div><div className="section-content"><h2>Computer Science<br/><span>foundation.</span></h2><div className="education-list"><div className="education-item"><div><h3>Chandigarh University, Punjab</h3><p>Bachelor of Engineering, Computer Science</p></div><div><strong>7.52 / 10</strong><span>Aug 2022 – May 2026</span></div></div><div className="education-item"><div><h3>L.R.S. Academy</h3><p>Class XII · P.C.M.</p></div><div><strong>9.13 / 10</strong><span>2021 – 2022</span></div></div><div className="education-item"><div><h3>L.R.S. Academy</h3><p>Class X</p></div><div><strong>8.7 / 10</strong><span>2019 – 2020</span></div></div></div></div></section>;
}

function Contact() {
  return <section id="contact" className="contact section-shell reveal-section"><div className="contact-card"><div className="eyebrow">✦ LET’S BUILD SOMETHING</div><h2>Have a role,<br/><em>project,</em> or idea?</h2><p>I’m open to software engineering opportunities where I can contribute to backend systems, full-stack applications and AI-powered products.</p><div className="contact-details"><span>✉ {profile.email}</span><span>☎ {profile.phone}</span><span>⌖ {profile.location} · {profile.availability}</span></div><div className="contact-actions"><a className="btn primary" href={`mailto:${profile.email}`}>Email me →</a><a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built for performance · React · CSS 3D</span><a href="#top">Back to top ↑</a></footer>;
}

function App() { return <div className="app" id="top"><Navbar/><main><Hero/><About/><Experience/><Skills/><Projects/><Education/><Contact/></main><Footer/></div>; }

function revealOnScroll() {
  const nodes = document.querySelectorAll('.reveal-section');
  if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:0.15});
  nodes.forEach(n => observer.observe(n));
}

createRoot(document.getElementById('root')).render(<App/>);
requestAnimationFrame(revealOnScroll);
