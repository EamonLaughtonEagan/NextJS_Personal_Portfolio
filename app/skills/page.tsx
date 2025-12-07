"use client"

import { AnimatedHeader } from "../components/AnimatedHeader";
import Card from "../components/Card";
import Link from "next/link";
import { Code2, Users, ArrowRight, Award, TrendingUp, Layers, Briefcase } from "lucide-react";
import { technicalSkills } from "@/constants/skills/technical.properties";
import { otherSkills } from "@/constants/skills/other.properties";

export default function Skills() {
    const totalTechnicalSkills = technicalSkills.reduce((acc, cat) => acc + cat.skills.length, 0);
    const totalOtherSkills = otherSkills.reduce((acc, cat) => acc + cat.skills.length, 0);
    const totalSkills = totalTechnicalSkills + totalOtherSkills;
    const totalCategories = technicalSkills.length + otherSkills.length;

    return (
        <div className="p-5">
            <AnimatedHeader fullText="My Skills" speed={50} />
            <p className="text-xl text-gray-400 mb-12">
                An overview of my technical and soft skills developed through 5+ years of professional experience.
            </p>

            {/* Skills Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <Award size={24} className="text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{totalSkills}+</h3>
                            <p className="text-gray-400 text-sm">Total Skills</p>
                        </div>
                    </div>
                </Card>

                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg">
                            <Layers size={24} className="text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{totalCategories}</h3>
                            <p className="text-gray-400 text-sm">Skill Categories</p>
                        </div>
                    </div>
                </Card>

                {/* <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <TrendingUp size={24} className="text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">10+</h3>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                    </div>
                </Card>

                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-500/10 rounded-lg">
                            <Briefcase size={24} className="text-yellow-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">5+</h3>
                            <p className="text-gray-400 text-sm">Companies</p>
                        </div>
                    </div>
                </Card> */}
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Technical Skills Card */}
                <Link href="/skills/technical">
                    <Card className="h-full group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Code2 size={24} className="text-blue-400" />
                                <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
                            </div>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-400 mb-4">
                            {totalTechnicalSkills} technical skills across {technicalSkills.length} categories including frontend, backend, databases, and more.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {technicalSkills.slice(0, 3).map((category, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                                    {category.title}
                                </span>
                            ))}
                            {technicalSkills.length > 3 && (
                                <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                                    +{technicalSkills.length - 3} more
                                </span>
                            )}
                        </div>
                    </Card>
                </Link>

                {/* Soft Skills Card */}
                <Link href="/skills/other">
                    <Card className="h-full group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Users size={24} className="text-green-400" />
                                <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                            </div>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-400 mb-4">
                            {totalOtherSkills} soft skills across {otherSkills.length} categories including communication, leadership, problem solving, and more.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {otherSkills.slice(0, 3).map((category, i) => (
                                <span key={i} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                                    {category.title}
                                </span>
                            ))}
                            {otherSkills.length > 3 && (
                                <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                                    +{otherSkills.length - 3} more
                                </span>
                            )}
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    );
}