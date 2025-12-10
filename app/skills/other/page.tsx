"use client"

import { AnimatedHeader } from "@/app/components/AnimatedHeader";
import Card from "@/app/components/Card";
import { otherSkills } from "@/constants/skills/other.properties";
import { Users, Lightbulb, Award, TrendingUp } from "lucide-react";

export default function OtherSkills() {
    const totalSkills = otherSkills.reduce((acc, cat) => acc + cat.skills.length, 0);

    return (
        <div className="p-5">
            <AnimatedHeader fullText="Other" speed={50} />
            <p className="text-xl text-gray-400 mb-12">
                An overview of my soft skills and interpersonal abilities that complement my technical expertise.
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
                            <Users size={24} className="text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{otherSkills.length}</h3>
                            <p className="text-gray-400 text-sm">Skill Categories</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherSkills.map((category, index) => (
                    <Card key={index} className="h-full group cursor-default">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {category.icon}
                                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                            </div>
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                                {category.skills.length}
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Proficient in {category.skills.length} skills related to {category.title.toLowerCase()}.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span 
                                    key={i} 
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        category.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                        category.color === 'green' ? 'bg-green-500/10 text-green-400' :
                                        category.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                                        category.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' :
                                        category.color === 'red' ? 'bg-red-500/10 text-red-400' :
                                        'bg-indigo-500/10 text-indigo-400'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}