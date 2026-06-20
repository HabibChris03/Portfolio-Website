import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  NavLink
} from 'react-router-dom';
import { 
  Mail, 
  Terminal, 
  ExternalLink, 
  Cpu, 
  Code, 
  Shield, 
  Gamepad, 
  Layers, 
  Send, 
  Copy, 
  Check, 
  Menu, 
  X, 
  ChevronRight,
  BookOpen,
  Monitor,
  Globe,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Custom brand icons since lucide-react removed them in recent versions
const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// SVG Orbital Sphere Component matching "Technical Arsenal" sphere
const OrbitalSphere = () => {
  return (
    <div className="wireframe-container" style={{ position: 'relative', width: '280px', height: '280px' }}>
      {/* Background radial lines */}
      <svg className="wireframe-svg" viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        
        {/* Horizontal & Vertical grid lines */}
        <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

        {/* Orbit Ellipses */}
        <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(30, 100, 100)" />
        <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(-45, 100, 100)" />
        <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" transform="rotate(90, 100, 100)" />

        {/* Floating animated points */}
        <motion.circle 
          cx="100" cy="100" r="3" 
          fill="#a855f7" 
          animate={{
            cx: [100 + 90 * Math.cos(0), 100 + 90 * Math.cos(2*Math.PI)],
            cy: [100 + 35 * Math.sin(0), 100 + 35 * Math.sin(2*Math.PI)]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 100px', transform: 'rotate(30deg)' }}
        />
        
        <motion.circle 
          cx="100" cy="100" r="3.5" 
          fill="#0ea5e9" 
          animate={{
            cx: [100 + 90 * Math.cos(Math.PI), 100 + 90 * Math.cos(Math.PI + 2*Math.PI)],
            cy: [100 + 35 * Math.sin(Math.PI), 100 + 35 * Math.sin(Math.PI + 2*Math.PI)]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 100px', transform: 'rotate(-45deg)' }}
        />

        <motion.circle 
          cx="100" cy="100" r="2.5" 
          fill="#ffffff" 
          animate={{
            cx: [100 + 90 * Math.cos(Math.PI/2), 100 + 90 * Math.cos(Math.PI/2 + 2*Math.PI)],
            cy: [100 + 35 * Math.sin(Math.PI/2), 100 + 35 * Math.sin(Math.PI/2 + 2*Math.PI)]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '100px 100px', transform: 'rotate(90deg)' }}
        />
      </svg>
      {/* Central icon sphere */}
      <div style={{
        position: 'absolute',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%)',
        border: '1px solid rgba(255,255,255,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
      }}>
        <Cpu className="text-glow" style={{ width: '24px', height: '24px', color: '#a855f7' }} />
      </div>
    </div>
  );
};

// Helper for standard page wrapper transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/* ========================================================
   PAGE COMPONENTS
   ======================================================== */

// 1. HOME PAGE VIEW
const HomeView = () => {
  return (
    <PageWrapper>
      <section style={{
        paddingTop: '60px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}>
        {/* Floating badge */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '30px',
          padding: '6px 16px',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '1.5px',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          marginBottom: '28px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          Engineering the future
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 68px)',
          fontWeight: '800',
          lineHeight: '1.1',
          maxWidth: '900px',
          letterSpacing: '-1.5px',
          marginBottom: '24px',
          background: 'linear-gradient(to bottom, #ffffff 40%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Crafting Digital<br />
          <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Fluid</span> & <span style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Precise</span><br />
          Full Stack & Security Solutions
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(15px, 2.5vw, 18px)',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          lineHeight: '1.6',
          marginBottom: '40px',
          padding: '0 16px'
        }}>
          I'm a passionate FULL STACK DEVELOPER AND CYBER SECURITY ENTHUSIAST with experience in JAVASCRIPT, PYTHON, HTML, CSS AND GOLANG. I love tackling complex problems, learning new skills, and collaborating with diverse teams to create innovative solutions.
        </p>

        {/* Glowing Interactive Card */}
        <div style={{
          position: 'relative',
          width: '320px',
          height: '320px',
          margin: '20px auto 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Background spinning gradient */}
          <div style={{
            position: 'absolute',
            width: '280px',
            height: '280px',
            borderRadius: '40%',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.45) 0%, rgba(236, 72, 153, 0.3) 100%)',
            filter: 'blur(30px)',
            animation: 'spin 15s infinite linear',
          }}></div>
          
          {/* Central Glass Card */}
          <div className="glass-panel" style={{
            position: 'relative',
            width: '180px',
            height: '180px',
            borderRadius: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
            zIndex: 2,
          }}>
            <Terminal size={48} style={{ color: 'white', filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))' }} />
            <div style={{ 
              marginTop: '12px', 
              fontFamily: 'var(--font-mono)', 
              fontWeight: '700', 
              fontSize: '14px', 
              color: 'white',
              letterSpacing: '2px'
            }}>
              &lt;HC /&gt;
            </div>
          </div>

          {/* Orbiting particles */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '50%',
            animation: 'spin 20s infinite linear'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#a855f7',
              boxShadow: '0 0 10px #a855f7'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '0',
              right: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#0ea5e9',
              boxShadow: '0 0 10px #0ea5e9'
            }}></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/work" className="btn-glow-border" style={{ padding: '14px 32px' }}>
            <span>Explore My Work</span>
            <ChevronRight size={16} />
          </Link>
          <Link to="/contact" style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '30px',
            color: 'white',
            padding: '14px 32px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.08)'}
          onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.03)'}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

// 2. WORK PAGE VIEW
const WorkView = () => {
  return (
    <PageWrapper>
      <section style={{ padding: '60px 0 100px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <div style={{ color: 'var(--accent-purple)', fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Work
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '800', letterSpacing: '-1px' }}>
            Selected Works
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginTop: '8px', fontSize: '15px', lineHeight: '1.6' }}>
            A compilation of key engineering efforts spanning smart agriculture interfaces, cybersecurity suites, and concurrent socket scans.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="portfolio-grid" style={{ marginBottom: '60px' }}>
          {/* Card 1: Agricultural Application */}
          <div className="glass-panel glass-card-interactive" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            height: '100%',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <Globe size={24} style={{ color: '#10b981' }} />
            </div>
            
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '1px',
              color: 'var(--accent-green)',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block'
            }}>
              In Development
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              AgroGrow App
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
              A high-performance full-stack agricultural platform designed for smart crop tracking, real-time sensor analytics, and automated soil metrics telemetry.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Go</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Python</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>React Native</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>MongoDB</span>
            </div>

            <Link to="/contact" className="btn-glow-border" style={{ padding: '10px 20px', fontSize: '13px', width: '100%' }}>
              <span>Case Study / Details</span>
              <ExternalLink size={14} />
            </Link>
          </div>

          {/* Card 2: Cyber Shield OS */}
          <div className="glass-panel glass-card-interactive" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            height: '100%',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <Shield size={24} style={{ color: '#ec4899' }} />
            </div>
            
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '1px',
              color: 'var(--accent-pink)',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block'
            }}>
              Cyber Security
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              ShieldOS Scan
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
              An automated shell suite deployed on Tails & Kali Linux systems utilizing custom Python scripts to verify network integrity, audit firewall rules, and run local scans.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Kali Linux</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Tails</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Python</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Bash</span>
            </div>

            <Link to="/contact" className="btn-glow-border" style={{ padding: '10px 20px', fontSize: '13px', width: '100%' }}>
              <span>Security Suite</span>
              <ExternalLink size={14} />
            </Link>
          </div>

          {/* Card 3: GoNet Scan */}
          <div className="glass-panel glass-card-interactive" style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            height: '100%',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <Terminal size={24} style={{ color: '#0ea5e9' }} />
            </div>
            
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '1px',
              color: 'var(--accent-teal)',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block'
            }}>
              Network Utility
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
              GoNet Scan
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
              A lightning-fast, concurrent TCP socket scan engine developed in Go, leveraging routine channels to sweep subnets, analyze banner headers, and log open nodes.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Go</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Socket API</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>CLI</span>
              <span className="stat-badge" style={{ padding: '4px 10px', fontSize: '10px' }}>Concurrency</span>
            </div>

            <Link to="/contact" className="btn-glow-border" style={{ padding: '10px 20px', fontSize: '13px', width: '100%' }}>
              <span>Go Repo</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* CTA section in Work */}
        <div className="glass-panel" style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'radial-gradient(circle at top left, rgba(14, 165, 233, 0.1) 0%, rgba(10, 11, 22, 0.45) 80%)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>Have a complex problem to solve?</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '500px', lineHeight: '1.6', marginBottom: '24px' }}>
            I specialize in structuring backend systems, secure operations pipelines, and intuitive layouts. Let's collaborate.
          </p>
          <Link to="/contact" className="btn-glow-border">
            Start a Project
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

// 3. ABOUT PAGE VIEW
const AboutView = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('BANYUYHABIBOSTI@GMAIL.COM');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageWrapper>
      <section style={{ padding: '60px 0 100px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'left', marginBottom: '50px' }}>
          <div style={{ color: 'var(--accent-purple)', fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            About
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '800', letterSpacing: '-1px' }}>
            Banyuy Habib
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '15px' }}>
            Full Stack Developer and Cyber Security Enthusiast
          </p>
        </div>

        {/* Narrative & stats info grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="about-grid">
          
          {/* Narrative text block */}
          <div style={{ textAlign: 'left' }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: 'var(--text-primary)',
              fontWeight: '500',
              marginBottom: '20px'
            }}>
              I'm a passionate <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>FULL STACK DEVELOPER</span> and <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>CYBER SECURITY ENTHUSIAST</span>.
            </p>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              My background integrates structural web app logic and defensive cyber audits. I enjoy writing clean, modular JS and Python codes, and I have recently set my primary sights on scaling in **Go** and building smart monitoring nodes.
            </p>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'var(--text-secondary)',
              marginBottom: '32px'
            }}>
              I believe in solid architectures, complete document integrity, and secure baseline systems. When I'm not configuring routing pipelines or auditing system configurations, I spend my cycles gaming or researching new application telemetry.
            </p>

            {/* CTA action buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-glow-border">
                <span>Reach Out Directly</span>
                <Mail size={16} />
              </Link>
              <button 
                onClick={handleCopyEmail}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '30px',
                  color: 'white',
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.08)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.03)'}
              >
                {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          {/* Details Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            {/* Box 1: Learning */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ color: 'var(--accent-teal)', marginBottom: '12px' }}><BookOpen size={24} /></div>
              <h4 style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '4px' }}>🌱 Currently Learning</h4>
              <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>GO Language</p>
            </div>

            {/* Box 2: Working On */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ color: 'var(--accent-green)', marginBottom: '12px' }}><Cpu size={24} /></div>
              <h4 style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '4px' }}>🔭 Active Project</h4>
              <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Agricultural Application</p>
            </div>

            {/* Box 3: Languages */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ color: 'var(--accent-purple)', marginBottom: '12px' }}><Globe size={24} /></div>
              <h4 style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '4px' }}>🌍 Languages Spoken</h4>
              <p style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>English & French</p>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Coding: HTML, CSS, JS, GO, Python</span>
            </div>

            {/* Box 4: Fun Fact */}
            <div className="glass-panel" style={{ padding: '24px', textAlign: 'left' }}>
              <div style={{ color: 'var(--accent-pink)', marginBottom: '12px' }}><Gamepad size={24} /></div>
              <h4 style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '4px' }}>⚡ Fun Fact</h4>
              <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Am also a Gamer 🎮🕹</p>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .about-grid {
              grid-template-columns: 1.2fr 1fr !important;
            }
          }
        `}</style>
      </section>
    </PageWrapper>
  );
};

// 4. STACK PAGE VIEW
const StackView = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillsData = [
    { name: 'HTML', category: 'core', level: 'Expert', progress: 95, icon: Code, color: '#f06529' },
    { name: 'CSS', category: 'core', level: 'Expert', progress: 95, icon: Layers, color: '#2965f1' },
    { name: 'JavaScript', category: 'core', level: 'Expert', progress: 95, icon: Code, color: '#f0db4f' },
    { name: 'React Native', category: 'core', level: 'Advanced', progress: 85, icon: Cpu, color: '#61dbfb' },
    { name: 'GO.', category: 'core', level: 'Learning', progress: 65, icon: BookOpen, color: '#00add8' },
    { name: 'Python', category: 'core', level: 'Advanced', progress: 90, icon: Code, color: '#306998' },
    { name: 'C++', category: 'core', level: 'Intermediate', progress: 70, icon: Code, color: '#00599c' },
    { name: 'Expo', category: 'core', level: 'Advanced', progress: 85, icon: Settings, color: '#ffffff' },
    
    { name: 'Node.js', category: 'backend', level: 'Advanced', progress: 85, icon: Cpu, color: '#3c873a' },
    { name: 'ExpressJS', category: 'backend', level: 'Advanced', progress: 85, icon: Cpu, color: '#828282' },
    { name: 'MongoDB', category: 'backend', level: 'Advanced', progress: 80, icon: Layers, color: '#4db33d' },
    { name: 'Git', category: 'backend', level: 'Advanced', progress: 90, icon: Settings, color: '#f1502f' },
    
    { name: 'Kali Linux', category: 'security', level: 'Advanced', progress: 85, icon: Shield, color: '#557cda' },
    { name: 'Tails', category: 'security', level: 'Advanced', progress: 80, icon: Shield, color: '#a71d5d' },
    { name: 'VMWARE', category: 'security', level: 'Advanced', progress: 80, icon: Monitor, color: '#60727b' },
    { name: 'VSCODE', category: 'security', level: 'Expert', progress: 95, icon: Monitor, color: '#007acc' },
    { name: 'Gaming Stream', category: 'security', level: 'Advanced', progress: 85, icon: Gamepad, color: '#9146ff' },

    { name: 'Adobe Photoshop', category: 'design', level: 'Advanced', progress: 80, icon: Layers, color: '#00c8ff' },
    { name: 'Adobe Illustrator', category: 'design', level: 'Intermediate', progress: 75, icon: Layers, color: '#ff9a00' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <PageWrapper>
      <section style={{ padding: '60px 0 100px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
          <div style={{ color: 'var(--accent-purple)', fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Stack
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px' }}>
            Technical Arsenal
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6', fontSize: '15px' }}>
            An overview of the tools, frameworks, and virtualized operating systems powering the HABIBCHRIS portfolio.
          </p>
        </div>

        {/* Orbit Grid Representation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '60px'
        }} className="stack-middle-grid">
          
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <OrbitalSphere />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div className="stat-badge" style={{ padding: '8px 16px', borderRadius: '12px', width: '100%', maxWidth: '280px', justifyContent: 'space-between' }}>
              <span>Languages Supported:</span> <span className="stat-badge-value" style={{ color: 'var(--accent-purple)' }}>05+</span>
            </div>
            <div className="stat-badge" style={{ padding: '8px 16px', borderRadius: '12px', width: '100%', maxWidth: '280px', justifyContent: 'space-between' }}>
              <span>Frameworks & Libs:</span> <span className="stat-badge-value" style={{ color: 'var(--accent-teal)' }}>08+</span>
            </div>
            <div className="stat-badge" style={{ padding: '8px 16px', borderRadius: '12px', width: '100%', maxWidth: '280px', justifyContent: 'space-between' }}>
              <span>Tools & Environments:</span> <span className="stat-badge-value" style={{ color: 'var(--accent-pink)' }}>10+</span>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .stack-middle-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>

        {/* Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '40px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '30px',
          padding: '6px',
          width: 'max-content',
          margin: '0 auto 40px'
        }}>
          {['all', 'core', 'backend', 'security', 'design'].map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)} 
              className={`nav-pill ${selectedCategory === cat ? 'active' : ''}`}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', textTransform: 'capitalize' }}
            >
              {cat === 'all' ? 'All' : cat === 'core' ? 'Core Dev' : cat === 'backend' ? 'Backend' : cat === 'security' ? 'Security & Tools' : 'Design'}
            </button>
          ))}
        </div>

        {/* Skill cards list */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index}
                className="glass-panel"
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: '14px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <IconComponent size={18} style={{ color: skill.color }} />
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    background: skill.level === 'Expert' ? 'rgba(16,185,129,0.1)' : skill.level === 'Advanced' ? 'rgba(14,165,233,0.1)' : 'rgba(168,85,247,0.1)',
                    color: skill.level === 'Expert' ? '#10b981' : skill.level === 'Advanced' ? '#0ea5e9' : '#a855f7',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: '600'
                  }}>
                    {skill.level}
                  </span>
                </div>
                
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>
                  {skill.name}
                </h4>

                <div className="skill-progress-container">
                  <div 
                    className="skill-progress-bar"
                    style={{
                      width: `${skill.progress}%`,
                      background: `linear-gradient(to right, ${skill.color}, #ffffff)`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};

// 5. CONTACT PAGE VIEW
const ContactView = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('BANYUYHABIBOSTI@GMAIL.COM');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        // Automatically clear success screen after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Server error. Failed to dispatch message.' 
        });
      }
    } catch (err) {
      console.error('Network contact error:', err);
      setStatus({ 
        type: 'error', 
        message: 'Network error. Please make sure the Node.js backend is active on http://localhost:5000' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section style={{ padding: '60px 0 100px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '60px' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '6px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-purple)',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Contact
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', marginBottom: '16px', textAlign: 'center' }}>
            Let's build the future<br />of the web together.
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6', fontSize: '15px', textAlign: 'center' }}>
            Reach out via form or copy my direct contact details. I look forward to collaborating with you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px',
          alignItems: 'stretch'
        }} className="contact-grid">
          
          {/* Form Card */}
          <div className="glass-panel" style={{ padding: '40px', position: 'relative' }}>
            {formSubmitted ? (
              <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 0'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Check size={32} style={{ color: '#10b981' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '12px' }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '340px', fontSize: '14px', lineHeight: '1.6' }}>
                  Thank you for reaching out, your message has been sent to Banyuy Habib's inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                
                {status.message && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    color: '#ef4444',
                    fontSize: '13px',
                    lineHeight: '1.5'
                  }}>
                    {status.message}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-mobile">
                  <div>
                    <label className="form-label" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe" 
                      className="form-input"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com" 
                      className="form-input"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Project Proposal" 
                    className="form-input"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Tell me about your vision..." 
                    className="form-input"
                    style={{ resize: 'none' }}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    disabled={loading}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-glow-border" 
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', marginTop: '8px', opacity: loading ? 0.7 : 1 }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Cpu size={16} style={{ animation: 'spin 1.5s infinite linear' }} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social direct links sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '32px', textAlign: 'left', flexGrow: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '24px' }}>
                Direct Links
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Linkedin size={18} style={{ color: '#0077b5' }} />
                    <span>Get to me on LinkedIn</span>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text-secondary)' }} />
                </a>

                <a 
                  href="https://x.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Twitter size={18} style={{ color: '#1da1f2' }} />
                    <span>Get to me on X</span>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text-secondary)' }} />
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Github size={18} style={{ color: '#ffffff' }} />
                    <span>Explore GitHub Repos</span>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--text-secondary)' }} />
                </a>
              </div>
            </div>

            {/* Email quick banner */}
            <div className="glass-panel" style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              background: 'radial-gradient(circle at top left, rgba(168, 85, 247, 0.1) 0%, rgba(10, 11, 22, 0.45) 80%)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', textAlign: 'left' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-purple)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '500' }}>Email me at</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'white', wordBreak: 'break-all' }}>BANYUYHABIBOSTI@GMAIL.COM</div>
                </div>
              </div>
              <button 
                onClick={handleCopyEmail}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  color: 'white',
                  padding: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              >
                {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 992px) {
            .contact-grid {
              grid-template-columns: 1.4fr 1fr !important;
            }
          }
          @media (max-width: 576px) {
            .form-row-mobile {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </PageWrapper>
  );
};

/* ========================================================
   COMMON PREMIUM FOOTER COMPONENT
   ======================================================== */
const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('BANYUYHABIBOSTI@GMAIL.COM');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="premium-footer">
      <div className="footer-grid">
        
        {/* Col 1: Brand Pitch */}
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '12px',
              color: 'white'
            }}>
              H
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '16px', letterSpacing: '1px', color: 'white' }}>
              HABIBCHRIS
            </span>
          </div>
          <p className="footer-logo-sub">
            Crafting fluid, high-performance web applications and secure technical operations.
          </p>
          <div className="footer-status-badge">
            <span className="footer-status-dot"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-header">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/work" className="footer-link">Work</Link></li>
            <li><Link to="/stack" className="footer-link">Stack</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3: Direct Connects */}
        <div className="footer-col">
          <h4 className="footer-header">Connect</h4>
          <ul className="footer-links-list">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Twitter size={13} />
                <span>Twitter / X</span>
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                <Github size={13} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <button 
                onClick={handleCopyEmail} 
                className="footer-link" 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
              >
                <Mail size={13} />
                <span>{copied ? 'Copied Email!' : 'Copy Email Address'}</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Gamer Corner Stats */}
        <div className="footer-col">
          <h4 className="footer-header">Gamer Stats 🕹️</h4>
          <ul className="footer-links-list">
            <li className="footer-link" style={{ cursor: 'default' }}>
              <span>Main Setup: Desktop Gamer</span>
            </li>
            <li className="footer-link" style={{ cursor: 'default' }}>
              <span>Streaming: Active Hobbyist</span>
            </li>
            <li className="footer-link" style={{ cursor: 'default' }}>
              <span>Favorite: Action & Simulators</span>
            </li>
            <li className="footer-link" style={{ cursor: 'default' }}>
              <span>Fun Status: Online & Gaming</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom details */}
      <div className="footer-bottom">
        <p>© 2026 HABIBCHRIS Studio. All rights reserved.</p>
        <p style={{ display: 'flex', gap: '16px' }}>
          <span>React.js</span>
          <span>•</span>
          <span>Framer Motion</span>
          <span>•</span>
          <span>Security Certified</span>
        </p>
      </div>
    </footer>
  );
};

/* ========================================================
   SHARED ROUTER LAYOUT
   ======================================================== */
const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Floating Header Navbar */}
      <header style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '1126px',
        height: '70px',
        borderRadius: '24px',
        background: 'rgba(10, 11, 22, 0.45)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'white' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '15px'
          }}>
            H
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '18px', letterSpacing: '1px' }}>
            HABIBCHRIS
          </span>
        </Link>

        {/* Navigation links wrapping Route transitions */}
        <nav style={{ display: 'none', gap: '8px', alignItems: 'center' }} className="desktop-nav-only">
          <NavLink to="/" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/work" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>Work</NavLink>
          <NavLink to="/stack" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>Stack</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>

        {/* CTA Let's Talk Button links directly to contact */}
        <div className="desktop-nav-only" style={{ display: 'none' }}>
          <Link to="/contact" className="btn-glow-border">
            Let's Talk
          </Link>
        </div>

        {/* Mobile trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-nav-trigger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '100px',
              left: '24px',
              right: '24px',
              background: 'rgba(10, 11, 22, 0.95)',
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '24px',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="nav-pill" style={{ fontSize: '18px', padding: '12px' }}>Home</NavLink>
            <NavLink to="/work" onClick={() => setMobileMenuOpen(false)} className="nav-pill" style={{ fontSize: '18px', padding: '12px' }}>Work</NavLink>
            <NavLink to="/stack" onClick={() => setMobileMenuOpen(false)} className="nav-pill" style={{ fontSize: '18px', padding: '12px' }}>Stack</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="nav-pill" style={{ fontSize: '18px', padding: '12px' }}>About</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="nav-pill" style={{ fontSize: '18px', padding: '12px' }}>Contact</NavLink>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-glow-border" style={{ width: '100%', marginTop: '8px' }}>Let's Talk</Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content Body - spacer for header */}
      <main style={{ flexGrow: 1, paddingTop: '130px', width: '100%', display: 'flex' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={currentPath}>
            <Route path="/" element={<HomeView />} />
            <Route path="/work" element={<WorkView />} />
            <Route path="/stack" element={<StackView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactView />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Beautiful Common Footer */}
      <Footer />
    </div>
  );
};

/* ========================================================
   MAIN APPLICATION ROUTER ENTRY
   ======================================================== */
function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Background orbs */}
      <div className="bg-glow-container">
        <div className="bg-orb orb-purple"></div>
        <div className="bg-orb orb-teal"></div>
        <div className="bg-orb orb-pink"></div>
      </div>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Router>
  );
}

export default App;
