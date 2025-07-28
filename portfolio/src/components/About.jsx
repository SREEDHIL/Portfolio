import React from 'react';
import { User, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
                        About <span className="text-purple-400">Me</span>
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200">
                                <div className="flex items-center mb-4">
                                    <User className="text-purple-400 mr-3 flex-shrink-0" size={20} />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">Who I Am</h3>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    I'm a first-year computer science student with a passion for creating
                                    digital experiences. I love learning new technologies and building
                                    projects that solve real-world problems.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:bg-gray-750 transition-colors duration-200">
                                <div className="flex items-center mb-4">
                                    <Heart className="text-purple-400 mr-3 flex-shrink-0" size={20} />
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">What I Love</h3>
                                </div>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    When I'm not coding, you'll find me exploring new frameworks,
                                    contributing to open source projects, or learning about UI/UX design.
                                    I believe in continuous learning and growth.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <MapPin className="text-purple-400 mr-2 flex-shrink-0" size={18} />
                                        <span className="text-gray-400 text-sm sm:text-base">Location</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm sm:text-base">KASARAGOD, KERALA</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <Calendar className="text-purple-400 mr-2 flex-shrink-0" size={18} />
                                        <span className="text-gray-400 text-sm sm:text-base">Experience</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm sm:text-base">1+ Year Learning</p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg">
                                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <User className="text-purple-400 mr-2 flex-shrink-0" size={18} />
                                        <span className="text-gray-400 text-sm sm:text-base">Education</span>
                                    </div>
                                    <p className="text-white font-semibold text-sm sm:text-base">B.Tech CSE - Software Product Engineering (Kalvium)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
