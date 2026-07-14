import { useEffect, useState } from "react";

interface NavbarProps { isMusicPlaying: boolean; onToggleMusic: () => void; }

export default function Navbar({ isMusicPlaying, onToggleMusic }: NavbarProps) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  const close = () => setOpen(false);
  return (
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Thi Han Hein, home"><span>TH</span><strong>Thi Han Hein</strong></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <button className={`nav-music ${isMusicPlaying ? "playing" : ""}`} onClick={onToggleMusic} aria-label={isMusicPlaying ? "Mute background music" : "Play background music"} aria-pressed={isMusicPlaying}>
          <span className="equalizer" aria-hidden="true"><i /><i /><i /><i /></span>
          {isMusicPlaying ? "Mute" : "Sound"}
        </button>
        <div className="availability"><i /> Available</div>
        <div className="social-links">
          <a href="https://github.com/thihanhein20" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://linkedin.com/in/thihanhein/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        </div>
      </div>
      <button className={`menu-button ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span /><span /></button>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav><a onClick={close} href="#work">Work</a><a onClick={close} href="#about">About</a><a onClick={close} href="#contact">Contact</a></nav>
        <div className="mobile-socials">
          <a href="https://github.com/thihanhein20" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://linkedin.com/in/thihanhein/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
        </div>
        <button className={`mobile-music ${isMusicPlaying ? "playing" : ""}`} onClick={onToggleMusic}>
          <span>{isMusicPlaying ? "Sound is playing" : "Play soundtrack"}</span><span>{isMusicPlaying ? "Pause ◼" : "Play ♪"}</span>
        </button>
        <p>Sydney, Australia · Available for work</p>
      </div>
    </header>
  );
}
