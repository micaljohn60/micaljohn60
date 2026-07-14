const skills = ["TypeScript", "React", "Node.js", "Next.js", "PostgreSQL", "Docker", "GraphQL", "Flutter", "CI/CD"];
export default function SkillsCloud() {
  return <div className="skills-cloud"><p>Everyday toolkit</p><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>;
}
