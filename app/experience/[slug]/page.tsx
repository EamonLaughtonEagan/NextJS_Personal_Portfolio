"use client"

import { use, useEffect, useRef, useState } from "react"
import { experiences } from "@/constants/experience/experience.properties"
import { notFound } from "next/navigation"
import Card from "@/app/components/Card"
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react"

export default function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const codeRef = useRef<HTMLDivElement>(null)
    const [lineCount, setLineCount] = useState(0)
    
    // Find the experience that matches the slug
    const experience = experiences.find(
        exp => {
            const expSlug = exp.title.toLowerCase().replace(/\s+/g, '-')
            return expSlug === slug
        }
    )

    // If no matching experience, show 404
    if (!experience) {
        notFound()
    }

    const generateExperienceCodeLines = (experience: typeof experiences[0]) => {
        const lines = [
            { indent: 0, content: <span><span style={{ color: 'var(--color-syntax-keyword)' }}>const</span> <span style={{ color: 'var(--color-syntax-variable)' }}>position</span> <span className="text-white">=</span> {'{'}</span> },
            { indent: 1, content: <span><span className="text-blue-300">title</span><span className="text-white">:</span> <span style={{ color: 'var(--color-syntax-string)' }}>"{experience.title}"</span><span className="text-white">,</span></span> },
            { indent: 1, content: <span><span className="text-blue-300">company</span><span className="text-white">:</span> <span className="text-green-300">"{experience.company}"</span><span className="text-white">,</span></span> },
            { indent: 1, content: <span><span className="text-blue-300">location</span><span className="text-white">:</span> <span className="text-green-300">"{experience.location}"</span><span className="text-white">,</span></span> },
            { indent: 1, content: <span><span className="text-blue-300">period</span><span className="text-white">:</span> <span className="text-green-300">"{experience.start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {typeof experience.finish === 'string' ? experience.finish : experience.finish.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}"</span><span className="text-white">,</span></span> },
            { indent: 1, content: <span><span className="text-blue-300">current</span><span className="text-white">:</span> <span className="text-yellow-300">{experience.current.toString()}</span><span className="text-white">,</span></span> },
            { indent: 1, content: <span><span className="text-blue-300">responsibilities</span><span className="text-white">:</span> {' ['}</span> },
        ]

        experience.description.forEach((desc, i) => {
            const isLast = i === experience.description.length - 1
            lines.push({
                indent: 2,
                content: <span><span className="text-green-300">"{desc}"</span>{!isLast && <span className="text-white">,</span>}</span>
            })
        })

        lines.push({ indent: 1, content: <span>{']'}</span> })
        lines.push({ indent: 0, content: <span>{'}'}<span className="text-white">;</span></span> })

        return lines
    }

    const codeLines = generateExperienceCodeLines(experience)
    const isCurrent = experience.current

    // Calculate actual line count based on rendered height
    useEffect(() => {
        const calculateLineCount = () => {
            if (codeRef.current) {
                const lineHeight = 24 // leading-6 = 1.5rem = 24px
                const totalHeight = codeRef.current.scrollHeight
                const lines = Math.ceil(totalHeight / lineHeight)
                setLineCount(lines)
            }
        }

        // Small delay to ensure DOM is updated
        const timer = setTimeout(calculateLineCount, 0)
        
        // Recalculate on window resize with debounce
        let resizeTimer: NodeJS.Timeout
        const handleResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(calculateLineCount, 100)
        }
        
        window.addEventListener('resize', handleResize)
        
        // Use ResizeObserver for more accurate tracking
        const resizeObserver = new ResizeObserver(() => {
            calculateLineCount()
        })
        
        if (codeRef.current) {
            resizeObserver.observe(codeRef.current)
        }

        return () => {
            clearTimeout(timer)
            clearTimeout(resizeTimer)
            window.removeEventListener('resize', handleResize)
            resizeObserver.disconnect()
        }
    }, [experience, slug]) // Added slug dependency

    return (
        <Card 
            className={`font-mono text-xs sm:text-sm ${isCurrent ? 'border-green-500/50 bg-green-500/5' : 'bg-[#1e1e1e]'}`}
        >
            {/* Header Section */}
            <div className="mb-4 pb-4 border-b border-line font-sans">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h2 className="text-xl sm:text-2xl font-bold text-white">{experience.title}</h2>
                            {isCurrent && (
                                <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold w-fit">
                                    <CheckCircle2 size={12} />
                                    Current
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <Briefcase size={16} />
                                <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>{experience.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                        <Calendar size={16} />
                        <span>
                            {experience.start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                            {typeof experience.finish === 'string' ? experience.finish : experience.finish.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                    </div>
                </div>
            </div>

            {/* Code Section */}
            <div className="flex">
                <div className="text-gray-600 select-none pr-2 sm:pr-4 border-r border-line mr-2 sm:mr-4 text-right min-w-8 sm:min-w-12 shrink-0">
                    {Array.from({ length: lineCount || codeLines.length }, (_, i) => (
                        <div key={i} className="leading-6">
                            {i + 1}
                        </div>
                    ))}
                </div>
                <div ref={codeRef} className="flex-1 min-w-0">
                    {codeLines.map((line, j) => (
                        <div key={j} className="leading-6">
                            <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                                {line.content}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}