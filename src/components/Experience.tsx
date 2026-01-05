import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  skills?: string[];
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  skills = [],
}) => {
  return (
    <div className="border-b py-6">
      <p className="font-medium">
        {title} at <span className="font-semibold">{company}</span>
      </p>

      <p className="text-sm text-gray-500 mb-3">{period}</p>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
