"use client"

import { AnimatedHeader } from "../components/AnimatedHeader"
import Card from "../components/Card"
import Link from "next/link"
import { Briefcase, CheckCircle2, Clock, ArrowRight, Calendar, MapPin } from "lucide-react"
import { experiences } from "@/constants/experience/experience.properties"
import calculateYearsOfExperience from "../utils/calculatYearsOfExperience"

export default function Experience() {
    const currentExperience = experiences.filter(exp => exp.current)
    const previousExperience = experiences.filter(exp => !exp.current)

    return (
        <div className="p-5">
            <AnimatedHeader fullText="Work Experience" speed={50} />
            <p className="text-xl text-gray-400 mb-12">
                My professional journey as a software developer and tester, showcasing my roles, responsibilities, and the technologies I've worked with.
            </p>

            {/* Experience Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <Briefcase size={24} className="text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{experiences.length}</h3>
                            <p className="text-gray-400 text-sm">Total Positions</p>
                        </div>
                    </div>
                </Card>

                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg">
                            <Calendar size={24} className="text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{calculateYearsOfExperience({ experiences })}+ </h3>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                    </div>
                </Card>

                <Card className="h-full group">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Clock size={24} className="text-purple-400" />
                            <h2 className="text-2xl font-bold text-white">Previous Experience</h2>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-4">
                        View {previousExperience.length} previous position{previousExperience.length !== 1 ? 's' : ''} spanning various roles and technologies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {previousExperience.slice(0, 3).map((exp, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                                {exp.company}
                            </span>
                        ))}
                        {previousExperience.length > 3 && (
                            <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                                +{previousExperience.length - 3} more
                            </span>
                        )}
                    </div>
                </Card>
            </div>

            {/* Experience Categories */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Current Position Card */}
                {currentExperience.length > 0 && (
                    <Link href={`/experience/${currentExperience[0].title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Card className="h-full group cursor-pointer border-green-500/30">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 size={24} className="text-green-400" />
                                    <h2 className="text-2xl font-bold text-white">Current Position</h2>
                                </div>
                                <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-white mb-2">{currentExperience[0].title}</h3>
                                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={16} />
                                        <span>{currentExperience[0].company}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>{currentExperience[0].location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>
                                            {currentExperience[0].start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - Present
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                                    Active
                                </span>
                            </div>
                        </Card>
                    </Link>
                )}
            </div>

            {/* Previous Positions Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Previous Positions</h2>
                <div className="grid grid-cols-1 gap-4">
                    {previousExperience
                        .sort((a, b) => b.start.getTime() - a.start.getTime())
                        .map((exp, i) => (
                            <Link key={i} href={`/experience/${exp.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                <Card className="group cursor-pointer hover:border-blue-500/50 transition-all">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase size={16} />
                                                    <span>{exp.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin size={16} />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={16} />
                                                    <span>
                                                        {exp.start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                                                        {typeof exp.finish === 'string' ? exp.finish : exp.finish.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}