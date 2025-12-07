"use client"

import Card from "@/app/components/Card"
import projects from "@/constants/projects/project.properties"
import { generateCodeLines } from "../layout"

const Completed = () => {
    return (
        <div className="gap-4 flex flex-col p-5">
            {projects.filter(project => project.completed).map((project, i) => {
                const codeLines = generateCodeLines(project)

                return (
                    <Card key={i} className="font-mono text-sm bg-[#1e1e1e]">
                        <div className="flex">
                            <div className="text-gray-600 select-non pr-4 border-r border-line mr-4 text-right min-w-12">
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
                )
            })}
        </div>
    )
}

export default Completed