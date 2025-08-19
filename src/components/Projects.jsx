import React, { useState, useEffect } from 'react';
import { projects } from '../static/Info'

import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project, isExpanded, onToggle }) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    </div>
                </div> */}
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {isExpanded ? (
                        // Show all technologies when expanded
                        project.technologies.map((tech, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                            >
                                {tech}
                            </span>
                        ))
                    ) : (
                        // Show limited technologies when collapsed
                        <>
                            {project.technologies.slice(0, 3).map((tech, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="px-3 py-1 bg-gray-600/50 text-gray-300 text-sm rounded-full">
                                    +{project.technologies.length - 3} more
                                </span>
                            )}
                        </>
                    )}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 text-left leading-relaxed">
                    {isExpanded ? project.description : `${project.description.split('.')[0]}.`}
                </p>

                {/* Links (only show when expanded) */}
                {isExpanded && (project.githubLink || project.liveLink) && (
                    <div className="flex gap-3 mb-4">
                        {project.githubLink && (
                            <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors"
                            >
                                <Github size={16} />
                                View Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={onToggle}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                    {isExpanded ? (
                        <>
                            <span>Show Less</span>
                            <ChevronUp size={18} />
                        </>
                    ) : (
                        <>
                            <span>View Details</span>
                            <ChevronDown size={18} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};



export const Projects = () => {
    const [expandedProjects, setExpandedProjects] = useState(new Set());

    const handleToggleProject = (projectId) => {
        const newExpanded = new Set(expandedProjects);
        if (newExpanded.has(projectId)) {
            newExpanded.delete(projectId);
        } else {
            newExpanded.add(projectId);
        }
        setExpandedProjects(newExpanded);
    };

    return (
        <section className="projects py-20 px-4 bg-gray-900 min-h-screen w-full" id="projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    {/* <h2 className="text-4xl md:text-5xl font-bold pb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> */}
                    <h2 className="text-4xl md:text-5xl font-bold pb-10 text-white">
                        Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects showcasing different technologies and approaches to problem-solving.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            isExpanded={expandedProjects.has(project.id)}
                            onToggle={() => handleToggleProject(project.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};