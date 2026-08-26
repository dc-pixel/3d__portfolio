import React from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'Sorting Visualizer',
    description: 'Interactive algorithm visualization with animated sorting flows and a clean learning-first UI.',
    stack: 'JavaScript · Algorithms · DOM',
    live: 'https://sortingvisualizer-amber.vercel.app/',
    repo: 'https://github.com/dc-pixel/sortingvisualizer',
  },
  {
    title: 'Library Management System',
    description: 'Java-based library workflow covering records, users, books and core management operations.',
    stack: 'Java · OOP · Data Structures',
    live: '#',
    repo: 'https://github.com/dc-pixel/Library-Management-System',
  },
  {
    title: 'Sudoku Solver',
    description: 'Algorithmic Sudoku solving experience built around backtracking and an approachable interface.',
    stack: 'JavaScript · Algorithms · UI',
    live: '#',
    repo: 'https://github.com/dc-pixel/Sudoku-Solver-',
  },
  {
    title: 'File Zipper',
    description: 'Compression-focused utility project presented as a practical engineering tool with a simple UX.',
    stack: 'Java · Compression · File I/O',
    live: 'https://file-zipper-eight.vercel.app/',
    repo: 'https://github.com/dc-pixel/File-Zipper-',
  },
  {
    title: 'Student Result Analysis',
    description: 'Result-processing project focused on organizing student data and turning records into useful insights.',
    stack: 'Java · Analysis · Data Handling',
    live: '#',
    repo: 'https://github.com/dc-pixel/Student-Result-Analysis-System',
  },
];

const skills = ['Java', 'JavaScript', 'C++', 'REST APIs', 'Git & GitHub', 'HTML', 'CSS', 'Data Structures', 'OOP', 'Problem Solving'];

function Scene() {
  const ref = React.useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.16;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.13;
    }
  });

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <Float speed={1.3} rotationIntensity={0.8} floatIntensity={1.1}>
        <mesh ref={ref} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.65, 1]} />
          <meshStandardMaterial color="#d8d8d8" metalness={0.88} roughness={0.18} wireframe />
        </mesh>
      </Float>
      <Text position={[0, 0, 0]} fontSize={0.38} color="#ffffff" anchorX="center" anchorY="middle">
        DEV
      </Text>
      <Stars radius={80} depth={25} count={1400} factor={1.8} saturation={0} fade speed={0.35} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  );
}

function App() {
  return (
    <div className="app">
      <header className="nav">
        <a className="brand" href="#top">DC<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="https://github.com/dc-pixel" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="eyebrow">
              <Sparkles size={15} /> FULL-STACK DEVELOPER
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}>
              I build <em>digital</em><br />experiences that work.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .25 }}>
              I’m Dev Chauhan, a developer focused on building practical software, polished interfaces, and products that solve real problems.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }} className="hero-actions">
              <a className="btn primary" href="#projects">View projects <ArrowDown size={16}/></a>
              <a className="btn ghost" href="https://github.com/dc-pixel" target="_blank" rel="noreferrer">Explore GitHub <Github size={16}/></a>
            </motion.div>
          </div>
          <div className="hero-3d" aria-label="Interactive 3D developer mark">
            <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }}>
              <Scene />
            </Canvas>
          </div>
          <div className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={14}/></div>
        </section>

        <section id="about" className="section-shell split-section">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-content">
            <h2>Engineering mindset.<br/><span>Human-first output.</span></h2>
            <p>I enjoy turning ideas into dependable applications. My work spans Java, JavaScript, APIs, Git/GitHub, algorithms, and frontend development, with an emphasis on clean structure and usable results.</p>
            <p>This portfolio is designed to show the part recruiters care about most: what I build, how I think, and how quickly I can turn a requirement into working software.</p>
            <div className="stat-row"><div><strong>05+</strong><span>Featured builds</span></div><div><strong>10+</strong><span>Core technologies</span></div><div><strong>∞</strong><span>Things to learn</span></div></div>
          </div>
        </section>

        <section id="skills" className="section-shell skills-section">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-content">
            <h2>Tools I use to<br/><span>make things happen.</span></h2>
            <div className="skill-grid">{skills.map((skill, i) => <motion.div className="skill" key={skill} initial={{ opacity:0, y:15 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true}} transition={{delay:i*.04}}>{skill}</motion.div>)}</div>
          </div>
        </section>

        <section id="projects" className="section-shell projects-section">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-content">
            <div className="projects-head"><h2>Projects that<br/><span>show the work.</span></h2><p>Real repositories. Real demos. No filler.</p></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <motion.article className="project" key={project.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{once:true, amount:.2}} transition={{duration:.5}}>
                  <div className="project-number">0{index+1}</div>
                  <div className="project-main"><h3>{project.title}</h3><p>{project.description}</p><small>{project.stack}</small></div>
                  <div className="project-links"><a href={project.live} target={project.live !== '#' ? '_blank' : undefined} rel="noreferrer" aria-label={`Open ${project.title} live demo`}><ExternalLink size={17}/></a><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><Github size={18}/></a></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <div className="contact-card">
            <div className="eyebrow"><Sparkles size={15}/> LET’S BUILD SOMETHING</div>
            <h2>Have a role,<br/><em>project,</em> or idea?</h2>
            <p>I’m open to opportunities where I can contribute, learn fast, and ship meaningful software.</p>
            <div className="contact-actions">
              <a className="btn primary" href="mailto:devchauhan@example.com">Start a conversation <Mail size={16}/></a>
              <a className="btn ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><span>© {new Date().getFullYear()} Dev Chauhan</span><span>Built with React · Three.js</span><a href="#top">Back to top <ArrowUpRight size={14}/></a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
