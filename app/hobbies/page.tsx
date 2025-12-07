"use client"

import { AnimatedHeader } from "../components/AnimatedHeader";
import Card from "../components/Card";

interface Hobby {
    name: string
    description: string
    activities: string[]
    frequency: string
}

const hobbies: Hobby[] = [
    {
        name: "Miniature Painting",
        description: "Painting and customizing miniature figures for tabletop games",
        activities: ["Priming", "Base Coating", "Detailing", "Basing"],
        frequency: "Daily"
    },
    {
        name: "Fitness",
        description: "Engaging in cardio and strength training exercises",
        activities: ["Powerlifting", "Bodybuilding", "Stairmaster"],
        frequency: "Daily"
    },
    {
        name: "Reading",
        description: "Reading books of all sorts both fiction and non-fiction",
        activities: ["Science Fiction", "Fantasy", "Technology", "Self-Improvement"],
        frequency: "Monthly"
    }
]

const generateHobbyCodeLines = (hobby: Hobby) => {
    const lines = [
        { indent: 0, content: <span><span className="text-purple-400">const</span> <span className="text-blue-300">{hobby.name.toLowerCase().replace(/\s+/g, '')}</span> <span className="text-white">=</span> {'{'}</span> },
        { indent: 1, content: <span><span className="text-blue-300">name</span><span className="text-white">:</span> <span className="text-green-300">"{hobby.name}"</span><span className="text-white">,</span></span> },
        { indent: 1, content: <span><span className="text-blue-300">description</span><span className="text-white">:</span> <span className="text-green-300">"{hobby.description}"</span><span className="text-white">,</span></span> },
        { indent: 1, content: <span><span className="text-blue-300">frequency</span><span className="text-white">:</span> <span className="text-green-300">"{hobby.frequency}"</span><span className="text-white">,</span></span> },
        { indent: 1, content: <span><span className="text-blue-300">activities</span><span className="text-white">:</span> {' ['}</span> },
    ]

    hobby.activities.forEach((activity, i) => {
        const isLast = i === hobby.activities.length - 1;
        lines.push({
            indent: 2,
            content: <span><span className="text-green-300">"{activity}"</span>{!isLast && <span className="text-white">,</span>}</span>
        })
    })

    lines.push({ indent: 1, content: <span>{']'}</span> })
    lines.push({ indent: 0, content: <span>{'}'}<span className="text-white">;</span></span> })

    return lines
};

export default function Hobbies() {
    return (
        <div className="p-5">
            <AnimatedHeader fullText="Hobbies & Interests" speed={50} />
            <p className="text-xl text-gray-400 mb-8">
                When I'm not coding, here are some of the things I enjoy doing in my free time.
            </p>
            
            <div className="gap-4 flex flex-col">
                {hobbies.map((hobby, i) => {
                    const codeLines = generateHobbyCodeLines(hobby);

                    return (
                        <Card key={i} className="font-mono text-sm bg-[#1e1e1e]">
                            <div className="flex">
                                <div className="text-gray-600 select-none pr-4 border-r border-line mr-4 text-right min-w-12">
                                    {codeLines.map((_, j) => (
                                        <div key={j} className="leading-6">
                                            {j + 1}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex-1">
                                    {codeLines.map((line, j) => (
                                        <div key={j} className="leading-6 relative">
                                            <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                                                {line.content}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>     
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}