import React from "react";
import Card from "../components/Card";
import { AnimatedHeader } from "../components/AnimatedHeader";
import Link from "next/link";
import { FolderOpen, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import projects from "@/constants/projects/project.properties";

const Projects = () => {
    const ongoingProjects = projects.filter(project => !project.completed);
    const completedProjects = projects.filter(project => project.completed);

    return (
        <div className="p-5">
            <AnimatedHeader fullText="My Projects" speed={50} />
            <p className="text-xl text-gray-400 mb-12">
                Explore my collection of personal and professional projects. 
                Each one represents a unique challenge and learning experience.
            </p>

            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg">
                            <FolderOpen size={24} className="text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{projects.length}</h3>
                            <p className="text-gray-400 text-sm">Total Projects</p>
                        </div>
                    </div>
                </Card>

                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-500/10 rounded-lg">
                            <Clock size={24} className="text-yellow-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{ongoingProjects.length}</h3>
                            <p className="text-gray-400 text-sm">In Progress</p>
                        </div>
                    </div>
                </Card>

                <Card className="group cursor-default">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <CheckCircle2 size={24} className="text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">{completedProjects.length}</h3>
                            <p className="text-gray-400 text-sm">Completed</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Project Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ongoing Projects Card */}
                <Link href="/projects/ongoing">
                    <Card className="h-full group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <Clock size={24} className="text-yellow-400" />
                                <h2 className="text-2xl font-bold text-white">Ongoing Projects</h2>
                            </div>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Currently working on {ongoingProjects.length} project{ongoingProjects.length !== 1 ? 's' : ''}. 
                            These are actively being developed and improved.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {ongoingProjects.slice(0, 3).map((project, i) => (
                                <span key={i} className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">
                                    {project.title}
                                </span>
                            ))}
                            {ongoingProjects.length > 3 && (
                                <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                                    +{ongoingProjects.length - 3} more
                                </span>
                            )}
                        </div>
                    </Card>
                </Link>

                {/* Completed Projects Card */}
                <Link href="/projects/completed">
                    <Card className="h-full group cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={24} className="text-green-400" />
                                <h2 className="text-2xl font-bold text-white">Completed Projects</h2>
                            </div>
                            <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-gray-400 mb-4">
                            View {completedProjects.length} finished project{completedProjects.length !== 1 ? 's' : ''}. 
                            These have been successfully delivered and deployed.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {completedProjects.slice(0, 3).map((project, i) => (
                                <span key={i} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                                    {project.title}
                                </span>
                            ))}
                            {completedProjects.length > 3 && (
                                <span className="px-3 py-1 bg-gray-700 text-gray-400 rounded-full text-sm">
                                    +{completedProjects.length - 3} more
                                </span>
                            )}
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default Projects;