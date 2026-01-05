import React from "react";
import dashboardImg from "../assets/talent_and_jobs.jpg";
import dashboardImg2 from "../assets/admin-dashboard.jpg";
import mobileAppImg from "../assets/talent_and_jobs_figma.png";
import landingPageImg from "../assets/landing_page.png";

interface WorkItem {
  title: string;
  image: string;
}

const works: WorkItem[] = [
  {
    title: "Dashboard Design",
    image: dashboardImg2,
  },
  {
    title: "Mobile App UI #1",
    image: dashboardImg,
  },
  {
    title: "Mobile App UI #2",
    image: mobileAppImg,
  },
  {
    title: "Landing Page",
    image: landingPageImg,
  },
];

const WorkGallery: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6">Selected Work</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-gray-100"
          >
            <img
              src={work.image}
              alt={work.title}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

            <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
              {work.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkGallery;
