import React from "react";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "REST API",
  "GraphQL",
  "Docker",
  "Git",
  "CI/CD",
  "Tailwind CSS",
  "Flutter",
];

const SkillsCloud: React.FC = () => {
  return (
    <div className="mt-12">
      <h4 className="text-lg font-semibold mb-4">Other skills</h4>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={skill}
            style={{ animationDelay: `${index * 80}ms` }}
            className="
              animate-fadeIn
              rounded-full
              bg-white
              border
              px-4
              py-1.5
              text-sm
              font-medium
              text-gray-700
              shadow-sm
              transition
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCloud;
