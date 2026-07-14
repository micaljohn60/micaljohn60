import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkGallery from "./components/WorkGallery";
import ExperienceCard from "./components/Experience";
import SkillsCloud from "./components/SkillsCloud";
import backgroundMusic from "./assets/bg-music/bgmusic.mp3";

const experiences = [
  {
    title: "Full Stack Engineer (Contract)",
    company: "Onlynx Tech · B2B SaaS Platform",
    period: "Jun 2024 — Present",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "GitHub Actions"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Neptune Technology · SaaS Company",
    period: "Apr 2021 — May 2023",
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "JUnit", "AWS", "JWT"],
  },
  {
    title: "Software Engineer Intern",
    company: "BizLeap Technology · Enterprise Software",
    period: "Jul 2020 — Oct 2020",
    skills: ["Java", "Spring Boot", "Agile", "Code Review", "Pair Programming"],
  },
];

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.32;
    audioRef.current.play().catch(() => setIsMusicPlaying(false));
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try { await audio.play(); } catch { setIsMusicPlaying(false); }
    } else {
      audio.pause();
    }
  };

  return (
    <div className="site-shell">
      <audio ref={audioRef} src={backgroundMusic} loop autoPlay preload="auto" onPlay={() => setIsMusicPlaying(true)} onPause={() => setIsMusicPlaying(false)} />
      <Navbar isMusicPlaying={isMusicPlaying} onToggleMusic={toggleMusic} />
      <main>
        <Hero isMusicPlaying={isMusicPlaying} />

        <section className="marquee" aria-label="Core services">
          <div className="marquee-track">
            <span>FULL STACK DEVELOPMENT</span><i>✦</i><span>PRODUCT ENGINEERING</span><i>✦</i>
            <span>MOBILE EXPERIENCES</span><i>✦</i><span>CREATIVE DEVELOPMENT</span><i>✦</i>
            <span>FULL STACK DEVELOPMENT</span><i>✦</i><span>PRODUCT ENGINEERING</span><i>✦</i>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2>Things I’ve<br /><em>brought to life.</em></h2>
            </div>
            <p className="section-intro">A selection of interfaces and products shaped around real people, real problems, and delightful details.</p>
          </div>
          <WorkGallery />
        </section>

        <section className="section about-section" id="about">
          <div className="about-copy reveal">
            <p className="eyebrow">02 / About me</p>
            <h2>I make complex ideas feel <em>simple.</em></h2>
            <p className="about-lede">I’m Thi Han Hein, a Sydney-based software engineer who enjoys working across the whole product — from robust backend systems to interfaces people love using.</p>
            <a className="text-link" href="https://linkedin.com/in/thihanhein/" target="_blank" rel="noreferrer">Let’s work together <span>↗</span></a>
          </div>
          <div className="experience-panel reveal">
            <p className="panel-label">Experience</p>
            {experiences.map((experience) => <ExperienceCard key={experience.company} {...experience} />)}
            <SkillsCloud />
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="meteor-field" aria-hidden="true">
            <span /><span /><span /><span /><span /><span /><span /><span />
            <i>✦</i><i>✧</i><i>·</i>
          </div>
          <div className="capabilities-heading reveal">
            <p className="eyebrow">03 / Systems I build</p>
            <div className="capabilities-title">
              <h2 id="capabilities-title">Beyond the<br /><em>interface.</em></h2>
              <div className="systems-current" aria-hidden="true"><i /><i /><i /><span>✦</span></div>
            </div>
            <p>I design the infrastructure behind the experience—from deployable services to cloud-backed product systems.</p>
          </div>
          <div className="capability-grid">
            <article className="capability-card reveal"><span>01</span><strong>AWS & Cloud</strong><p>Production environments across EC2, S3, Lambda, CloudFront, containers, and automated delivery pipelines.</p><small>Infrastructure · Deployment · Storage</small></article>
            <article className="capability-card reveal"><span>02</span><strong>Microservices</strong><p>Scalable Spring Boot and Node.js services with secure REST APIs, clear boundaries, and independent deployment.</p><small>Architecture · APIs · Reliability</small></article>
            <article className="capability-card reveal"><span>03</span><strong>SaaS Platforms</strong><p>End-to-end B2B product workflows built around real operational needs, maintainability, and production performance.</p><small>Product systems · Workflows · Scale</small></article>
            <article className="capability-card reveal"><span>04</span><strong>BaaS</strong><p>Managed backend foundations for authentication, data, storage, and serverless workflows when speed matters.</p><small>Auth · Data · Serverless</small></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb" aria-hidden="true" />
          <p className="eyebrow reveal">04 / Get in touch</p>
          <h2 className="reveal">Have an idea?<br /><em>Let’s make it real.</em></h2>
          <a className="contact-button reveal" href="https://linkedin.com/in/thihanhein/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>
          <div className="footer-line">
            <span>© {new Date().getFullYear()} Thi Han Hein</span>
            <div><a href="https://linkedin.com/in/thihanhein/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/thihanhein20" target="_blank" rel="noreferrer">GitHub</a></div>
            <span>Sydney, Australia</span>
          </div>
        </section>
      </main>
    </div>
  );
}
