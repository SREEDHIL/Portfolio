import React from 'react';
import { Code, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            icon: <Code size={24} className="sm:w-8 sm:h-8" />,
            title: 'Frontend Development',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'React + Vite', 'Tailwind CSS'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Database size={24} className="sm:w-8 sm:h-8" />,
            title: 'Backend & Database',
            skills: ['Node.js', 'Express', 'MongoDB', 'Authentication', 'REST APIs'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <Palette size={24} className="sm:w-8 sm:h-8" />,
            title: 'Design & Tools',
            skills: ['Figma', 'Git', 'VS Code', 'Responsive Design', 'UI/UX'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Globe size={24} className="sm:w-8 sm:h-8" />,
            title: 'Other Technologies',
            skills: ['Python', 'C++'],
            color: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
                        My <span className="text-purple-400">Skills</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {skillCategories.map((category) => (
                            <div
                                key={category.title}
                                className="bg-gray-900 rounded-lg p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 text-white`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="bg-gray-800 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-200"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
