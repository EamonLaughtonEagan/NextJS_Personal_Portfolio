"use client"

import { usePathname } from "next/navigation";
import InnerNavLink from "../components/InnerNavigation/InnerNavLink";
import { ProjectP } from "@/constants/projects/project.properties";
import Card from "../components/Card";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {

    const navLinks = [
        { href: "/projects", name: "Information" },
        { href: "/projects/ongoing", name: "Ongoing" },
        { href: "/projects/completed", name: "Completed" },
    ]

    const pathName = usePathname()

    return (
        <div>
            <div className="bg-sidebar flex">
                {navLinks.map((link) => {
                    const isActive = pathName === link.href
                    return (
                        <InnerNavLink key={link.href} href={link.href} isActive={isActive}>
                            {link.name}
                        </InnerNavLink>
                    )
                })}
            </div>
            <div className="p-5">
                {children}
            </div>
        </div>
    )
}

export const generateCodeLines = (project: ProjectP) => {
    const lines = [
        { indent: 0, content: <><span className="text-blue-400">const</span> <span className="text-yellow-300">project</span> = {'{'}</> },
        { indent: 1, content: <><span className="text-blue-300">title</span>: <span className="text-green-400">"{project.title}"</span>,</> },
        { indent: 1, content: <><span className="text-blue-300">description</span>: <span className="text-green-400">"{project.description}"</span>,</> },
        { indent: 1, content: <><span className="text-blue-300">languages</span>: [</> },
        ...project.languages.map((lang: string, idx: number) => ({
            indent: 2,
            content: <><span className="text-green-400">"{lang}"</span>{idx < project.languages.length - 1 ? ',' : ''}</>
        })),
        { indent: 1, content: <>],</> },
        { indent: 1, content: <><span className="text-blue-300">frameworks</span>: [</> },
        ...project.frameworks.map((framework: string, idx: number) => ({
            indent: 2,
            content: <><span className="text-green-400">"{framework}"</span>{idx < project.frameworks.length - 1 ? ',' : ''}</>
        })),
        { indent: 1, content: <>]</> },
        { indent: 1, content: <><span className="text-blue-300">completed</span>: <span className="text-purple-400">{project.completed.toString()}</span></> },
        { indent: 1, content: <><span className="text-blue-300">startDate</span>: <span className="text-green-400">{project.startDate ? `new Date("${project.startDate.toISOString().split('T')[0]}")` : 'undefined'}</span></> },
        { indent: 0, content: <>{'}'}</> },
    ];
    return lines
}