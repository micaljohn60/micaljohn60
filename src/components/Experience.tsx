interface ExperienceProps { title: string; company: string; period: string; skills?: string[]; }

export default function ExperienceCard({ title, company, period, skills = [] }: ExperienceProps) {
  return (
    <article className="experience-card">
      <div className="experience-top"><span>{period}</span><span>↗</span></div>
      <h3>{title}</h3><p>{company}</p>
      <div className="experience-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
    </article>
  );
}
