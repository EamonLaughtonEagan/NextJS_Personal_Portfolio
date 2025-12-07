import { Users, MessageCircle, Lightbulb, Target, Brain, TrendingUp } from "lucide-react";

export const otherSkills = [
    {
        title: "Communication",
        icon: <MessageCircle size={24} className="text-blue-400" />,
        color: "blue",
        skills: ["Technical Writing", "Documentation", "Presentations", "Client Communication", "Team Collaboration", "Active Listening"],
    },
    {
        title: "Leadership & Management",
        icon: <Users size={24} className="text-green-400" />,
        color: "green",
        skills: ["Team Leadership", "Mentoring", "Project Management", "Stakeholder Management", "Conflict Resolution", "Decision Making"],
    },
    {
        title: "Problem Solving",
        icon: <Lightbulb size={24} className="text-purple-400" />,
        color: "purple",
        skills: ["Critical Thinking", "Analytical Skills", "Debugging", "Troubleshooting", "Root Cause Analysis", "Creative Solutions"],
    },
    {
        title: "Adaptability",
        icon: <TrendingUp size={24} className="text-yellow-400" />,
        color: "yellow",
        skills: ["Quick Learning", "Flexibility", "Change Management", "Continuous Improvement", "New Technologies", "Growth Mindset"],
    },
    {
        title: "Time Management",
        icon: <Target size={24} className="text-red-400" />,
        color: "red",
        skills: ["Prioritization", "Deadline Management", "Task Planning", "Multitasking", "Efficiency", "Organization"],
    },
    {
        title: "Collaboration",
        icon: <Brain size={24} className="text-indigo-400" />,
        color: "indigo",
        skills: ["Cross-functional Teams", "Pair Programming", "Code Reviews", "Knowledge Sharing", "Teamwork", "Remote Collaboration"],
    }
];