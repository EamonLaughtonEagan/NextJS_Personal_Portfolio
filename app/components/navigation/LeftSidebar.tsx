'use client'

import { experiences } from "@/constants/experience/experience.properties"
import { Accordion, AccordionItem, AccordionContent } from "../Accordion"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

const LeftSidebar = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const router = useRouter()
    const pathname = usePathname()

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        
        // Check if we're already on the experience page
        if (pathname === '/experience') {
            // We're on the page, just scroll
            const element = document.getElementById(targetId)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                })
            }
        } else {
            // Navigate to experience page first, then scroll
            router.push(`/experience#${targetId}`)
            // Use setTimeout to wait for navigation
            setTimeout(() => {
                const element = document.getElementById(targetId)
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    })
                }
            }, 100)
        }
    }

    const handleMouseEnter = (id: string) => {
        setHoveredId(id)
        const element = document.getElementById(id)
        if (element) {
            element.classList.add('card-hovered')
        }
    }

    const handleMouseLeave = () => {
        if (hoveredId) {
            const element = document.getElementById(hoveredId)
            if (element) {
                element.classList.remove('card-hovered')
            }
        }
        setHoveredId(null)
    }

    // Filter experiences by completion status
    const ongoingExperiences = experiences.filter(exp => exp.current)
    const completedExperiences = experiences.filter(exp => !exp.current)

    return (
        <div className="flex flex-col h-full border-r border-r-line overflow-y-auto">
            <div className="px-4 py-2 text-xs uppercase text-foreground/60 font-semibold tracking-wider">
                Explorer
            </div>
            <Accordion multipleOpen={false} defaultOpen={[]}>
                <AccordionItem value="home" trigger="home.tsx" isFolder={false} />
                <AccordionItem value="about" trigger="about.tsx" isFolder={false} />
                
                <AccordionItem value="experience" trigger="experience" navigateOnClick={true}>
                    <AccordionItem value="ongoing" trigger="ongoing" parentPath="/experience">
                        {ongoingExperiences.map((experience, i) => (
                            <AccordionContent
                                key={i}
                                href={`/experience/${experience.title.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                                {experience.title}.tsx
                            </AccordionContent>
                        ))}
                    </AccordionItem>
                    
                        <AccordionItem value="completed" trigger="completed" parentPath="/experience">
                            {completedExperiences.map((experience, i) => (
                                <AccordionContent
                                    key={i}
                                    href={`/experience/${experience.title.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {experience.title}.tsx
                                </AccordionContent>
                            ))}
                        </AccordionItem>
                    </AccordionItem>
                
                <AccordionItem value="skills" trigger="skills" navigateOnClick={true}>
                    <AccordionItem value="technical" trigger="technical.tsx" parentPath="/skills" isFolder={false} />
                    <AccordionItem value="other" trigger="other.tsx" parentPath="/skills" isFolder={false} />
                </AccordionItem>
                
                <AccordionItem value="projects" trigger="projects" navigateOnClick={true}>
                    <AccordionItem value="ongoing" trigger="ongoing.tsx" parentPath="/projects" isFolder={false} />
                    <AccordionItem value="completed" trigger="completed.tsx" parentPath="/projects" isFolder={false} />
                </AccordionItem>
                
                <AccordionItem value="hobbies" trigger="hobbies.tsx" isFolder={false} />
                <AccordionItem value="contact" trigger="contact.tsx" isFolder={false} />
            </Accordion>
        </div>
    )
}

export default LeftSidebar