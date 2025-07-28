import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Synertia - Dynamic Workforce Allocation System',
            description: 'A real-time workforce management platform that dynamically assigns tasks to employees based on availability, workload, and priority. Perfect for industries like customer service, IT support, logistics, and event management.',
            image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
            technologies: ['React', 'Node.js', 'MongoDB', "JWT", "Recharts, Express.js"],
            github: 'https://github.com/kalviumcommunity/S66_SREEDHIL_Capstone_SYNERTIA',
            live: 'https://synertia.netlify.app/',
            featured: true
        },
        // {
        //     title: 'Task Management App',
        //     description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        //     image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
        //     technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
        //     github: 'https://github.com',
        //     live: 'https://example.com',
        //     featured: false
        // },
        // {
        //     title: 'Weather Dashboard',
        //     description: 'A beautiful weather application that provides current conditions, forecasts, and interactive maps using multiple weather APIs.',
        //     image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
        //     technologies: ['JavaScript', 'API Integration', 'Chart.js', 'CSS'],
        //     github: 'https://github.com',
        //     live: 'https://example.com',
        //     featured: false
        // },
        // {
        //     title: 'Portfolio Website',
        //     description: 'A responsive portfolio website showcasing my projects and skills, built with modern web technologies and best practices.',
        //     image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
        //     technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
        //     github: 'https://github.com',
        //     live: 'https://example.com',
        //     featured: true
        // }
    ];

    return (
        <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
                        My <span className="text-purple-400">Projects</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group hover:shadow-xl"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                                            <Star size={12} className="mr-1 sm:w-4 sm:h-4" />
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-4 sm:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-purple-600/20 text-purple-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                                        <a
                                            href={project.github}
                                            className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-white transition-colors duration-200 py-2 px-3 hover:bg-gray-700 rounded-lg"
                                        >
                                            <Github size={16} className="mr-2" />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center justify-center sm:justify-start text-gray-400 hover:text-purple-400 transition-colors duration-200 py-2 px-3 hover:bg-gray-700 rounded-lg"
                                        >
                                            <ExternalLink size={16} className="mr-2" />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
