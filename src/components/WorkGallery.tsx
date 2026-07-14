import dashboard from "../assets/optimized/admin-dashboard.webp";
import jobs from "../assets/optimized/talent-and-jobs.webp";
import mobile from "../assets/optimized/talent-and-jobs-figma.webp";
import landing from "../assets/optimized/landing-page.webp";
import breakupLanding from "../assets/optimized/breakup-buddy.webp";
import breakupDashboard from "../assets/optimized/breakup-buddy-dashboard.webp";
import breakupMood from "../assets/optimized/breakup-buddy-mood.webp";
import sammyDashboard from "../assets/optimized/sammy-dashboard.webp";
import sammyUpload from "../assets/optimized/sammy-upload.webp";

const projects = [
  { number: "03", title: "Operations, made visible.", type: "Admin dashboard", image: dashboard, tags: ["Product design", "Frontend"] },
  { number: "04", title: "Better work, one tap away.", type: "Talent & Jobs", image: jobs, tags: ["React Native", "Mobile"] },
  { number: "05", title: "A job search that flows.", type: "Mobile experience", image: mobile, tags: ["Figma", "UX / UI"] },
  { number: "06", title: "HR without the headache.", type: "Web platform", image: landing, tags: ["Web design", "Development"] },
];

export default function WorkGallery() {
  return (
    <div className="project-grid">
      <article className="featured-project sammy-project reveal" tabIndex={0}>
        <div className="featured-copy">
          <div className="project-meta"><span>01</span><p>AI healthcare platform</p><span>↗</span></div>
          <div>
            <p className="featured-label">From PDF to patient record · In seconds</p>
            <h3>Sammy<em>.AI</em></h3>
            <p className="featured-description">A clinic-focused document platform that uses Gemini 2.5 Flash to scan PDFs, extract structured patient data, and securely organise records—reducing manual entry and processing time.</p>
            <div className="featured-tags"><span>Next.js</span><span>TypeScript</span><span>Gemini</span><span>AWS S3</span><span>Redis</span><span>PostgreSQL</span></div>
            <div className="project-actions">
              <a href="https://sammy-ai-dev.vercel.app/" target="_blank" rel="noreferrer">Live product <span>↗</span></a>
              <a href="https://github.com/thihanhein20/samantha-ai" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="featured-visual sammy-visual" aria-label="Sammy.AI product screens">
          <img className="sammy-screen sammy-screen-main" src={sammyDashboard} alt="Sammy.AI clinic overview dashboard" />
          <img className="sammy-screen sammy-screen-detail" src={sammyUpload} alt="Sammy.AI PDF upload and extraction interface" />
          <div className="visual-caption"><span>01 / 02</span><span>Intelligent clinical records</span></div>
        </div>
      </article>

      <article className="featured-project reveal" tabIndex={0}>
        <div className="featured-copy">
          <div className="project-meta"><span>02</span><p>Hackathon project</p><span>↗</span></div>
          <div>
            <p className="featured-label">Anonymous by design · Built for teens</p>
            <h3>BreakUp<br /><em>Buddy.</em></h3>
            <p className="featured-description">A private recovery companion for teens navigating heartbreak—with mood tracking, guided journaling, a judgment-free AI companion, and a seven-day healing program. No account required.</p>
            <div className="featured-tags"><span>Mental wellness</span><span>AI companion</span><span>Product design</span></div>
            <div className="project-actions">
              <a href="https://breakupbuddy.vercel.app/" target="_blank" rel="noreferrer">Live product <span>↗</span></a>
              <a href="https://github.com/thihanhein20/breakup-buddy" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
          </div>
        </div>
        <div className="featured-visual" aria-label="BreakUp Buddy product screens">
          <img className="screen screen-main" src={breakupDashboard} alt="BreakUp Buddy recovery dashboard" />
          <img className="screen screen-back" src={breakupLanding} alt="BreakUp Buddy anonymous landing page" />
          <img className="screen screen-front" src={breakupMood} alt="BreakUp Buddy mood tracker" />
          <div className="visual-caption"><span>01 / 03</span><span>Recovery, without judgment</span></div>
        </div>
      </article>

      {projects.map((project) => (
        <article className="project-card reveal" key={project.title} tabIndex={0}>
          <div className="project-meta"><span>{project.number}</span><p>{project.type}</p><span>↗</span></div>
          <div className="project-image"><img src={project.image} alt={`${project.type} interface`} loading="lazy" /><div className="project-shine" /></div>
          <div className="project-info"><h3>{project.title}</h3><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>
      ))}
    </div>
  );
}
