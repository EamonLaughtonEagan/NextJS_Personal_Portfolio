"use client"

import { useEffect, useState } from "react"
import { useTypingAnimation } from "../hooks/useTypingAnimation"
import Card from "../components/Card"
import Link from "next/link"
import { Code2, Briefcase, FolderOpen, Mail, ArrowRight, Github, Linkedin } from "lucide-react"
import calculateYearsOfExperience from "../utils/calculatYearsOfExperience"
import { experiences } from "@/constants/experience/experience.properties"

export default function Home() {
    const [showAdditionalText, setShowAdditionalText] = useState(false)
    const [showQuickLinks, setShowQuickLinks] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const fullText = 'Welcome to my VS Code Themed Portfolio!'

    const { displayedText, isComplete } = useTypingAnimation({
        text: fullText,
        typingSpeed: 25,
        onComplete: () => {
            setTimeout(() => {
                setShowAdditionalText(true)
                setTimeout(() => setShowQuickLinks(true), 200)
                setTimeout(() => setShowAbout(true), 400)
            }, 1000)
        }
    })

    const quickLinks = [
        {
            title: "Experience",
            description: `${calculateYearsOfExperience({ experiences })}+ years of experience`,
            icon: <Briefcase size={24} className="text-blue-400" />,
            href: "/experience",
            color: "blue"
        },
        {
            title: "Projects",
            description: "View my portfolio of work",
            icon: <FolderOpen size={24} className="text-purple-400" />,
            href: "/projects",
            color: "purple"
        },
        {
            title: "Skills",
            description: "Technical & soft skills",
            icon: <Code2 size={24} className="text-green-400" />,
            href: "/skills",
            color: "green"
        },
        {
            title: "Contact",
            description: "Let's connect and collaborate",
            icon: <Mail size={24} className="text-yellow-400" />,
            href: "/contact",
            color: "yellow"
        }
    ]

    return (
        <div className="p-5">
            <h1 className="text-7xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
                {displayedText.split(' ').map((word, index) => (
                    <span
                        key={index}
                        className={word.includes('VS') || word.includes('Code') || word.includes('Themed') ? 'text-blue-500' : ''}
                    >
                        {word}{' '}
                    </span>
                ))}
                <span className={`inline-block w-1 h-[1em] bg-foreground ${isComplete ? 'animate-blink' : ''}`}></span>
            </h1>
            
            {/* Additional text that fades in */}
            <div className={`transition-all duration-1000 ${showAdditionalText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-2xl text-foreground/70 font-light mb-2">
                    Hi! I'm an aspiring Full-Stack Developer with a passion for creating creative and functional web applications.
                </p>
                <p className="text-xl text-foreground/60 mb-12">
                    Explore my experience, skills, projects, and more using the navigation on the left or the quick links below.
                </p>

                {/* Quick Links Grid with stagger */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-700 ${showQuickLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {quickLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <Card className="h-full group cursor-pointer">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        {link.icon}
                                        <h2 className="text-2xl font-bold text-foreground">{link.title}</h2>
                                    </div>
                                    <ArrowRight size={20} className="text-foreground/60 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </div>
                                <p className="text-foreground/60">{link.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* About Me Section with stagger */}
                <div className={`transition-all duration-700 ${showAbout ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">About Me</h2>
                        <p className="text-foreground leading-relaxed mb-4">
                            I'm a passionate software developer with over {calculateYearsOfExperience({ experiences })} years of experience in full-stack development. 
                            I specialize in building modern web applications using React, Next.js, TypeScript, and various backend technologies.
                        </p>
                        <p className="text-foreground/90 leading-relaxed mb-4">
                            Throughout my career, I've worked on diverse projects ranging from government applications to 
                            accessibility-focused solutions, always striving to deliver high-quality, maintainable code.
                        </p>
                        <Link 
                            href="/about"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            Learn more about me
                            <ArrowRight size={16} />
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    )
}