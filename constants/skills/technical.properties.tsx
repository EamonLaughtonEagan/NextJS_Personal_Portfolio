import { Code2, Database, Wrench, Shield, Award } from "lucide-react";

export const technicalSkills = [
    {
        title: "Frontend Development",
        icon: <Code2 size={24} className="text-blue-400" />,
        color: "blue",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Chakra UI", "React Router", "HTML5", "CSS3"],
    },
    {
        title: "Backend Development",
        icon: <Database size={24} className="text-green-400" />,
        color: "green",
        skills: ["Node.js", "Python", "Java", "FastAPI", "Litestar", "Spring Framework", "RESTful APIs", "Express", "Tomcat Server"],
    },
    {
        title: "Database & Storage",
        icon: <Database size={24} className="text-purple-400" />,
        color: "purple",
        skills: ["PostgreSQL", "Oracle SQL", "MongoDB", "SQL", "Database Design"],
    },
    {
        title: "DevOps & Tools",
        icon: <Wrench size={24} className="text-yellow-400" />,
        color: "yellow",
        skills: ["Docker", "GitHub Actions", "CI/CD", "Jenkins", "Nginx", "Git", "Agile/Scrum", "VS Code"],
    },
    {
        title: "Testing & Quality",
        icon: <Shield size={24} className="text-red-400" />,
        color: "red",
        skills: ["Automated Testing", "QA Testing", "Unit Testing", "Code Reviews", "Bug Tracking", "Quality Assurance"],
    },
    {
        title: "Accessibility & Standards",
        icon: <Award size={24} className="text-indigo-400" />,
        color: "indigo",
        skills: ["WCAG 2.2", "Web Accessibility", "Accessibility Audits", "Web Fundamentals", "Best Practices", "User Experience"],
    }
];