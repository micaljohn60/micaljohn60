import { useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";

const roles = ["full-stack products", "smooth mobile apps", "playful experiences"];

export default function Hero({ isMusicPlaying }: { isMusicPlaying: boolean }) {
  const [role, setRole] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setRole((value) => (value + 1) % roles.length), 2600); return () => clearInterval(timer); }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="ambient-motes" aria-hidden="true">
        <i>✦</i><i>·</i><i>✧</i><i>·</i><i>✦</i><i>·</i><i>✧</i>
      </div>
      <div className="hero-content">
        <p className="hero-kicker"><span>✦</span> Software engineer / creative developer</p>
        <h1><span>I BUILD</span><span className="outline">DIGITAL</span><span>EXPERIENCES.</span></h1>
        <div className="hero-bottom">
          <p>Hi, I’m <strong>Thi Han Hein.</strong><br />I turn ambitious ideas into <span className="role" key={role}>{roles[role]}</span>.</p>
          <a href="#work" className="scroll-cue"><span>↓</span> Scroll to explore</a>
        </div>
      </div>
      <div className="model-stage">
        <div className="model-label">
          <span>{isMusicPlaying ? "Room soundtrack on" : "Interactive space"}</span>
          <small>Drag to explore</small>
        </div>
        <ModelViewer modelPath="/models/my_room_2.glb" isMusicPlaying={isMusicPlaying} />
      </div>
      <div className="hero-number" aria-hidden="true">01</div>
    </section>
  );
}
