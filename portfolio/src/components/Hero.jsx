import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "I'm a passionate developer";

    useEffect(() => {
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);

        return () => clearInterval(typingEffect);
    }, []);

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
                        Hello, I'm <span className="text-purple-400 block sm:inline">Sreedhil Pavishanker B</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 h-8 px-4">
                        {text}<span className="animate-pulse">|</span>
                    </p>
                    <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
                        Welcome to my digital space where creativity meets code. I love building
                        beautiful, functional web applications that make a difference.
                    </p>

                    <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
                        <a href="https://github.com/SREEDHIL" className="text-white hover:text-purple-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
                            <Github size={24} className="sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/sreedhil-pavishanker-b-476a72306/" className="text-white hover:text-purple-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
                            <Linkedin size={24} className="sm:w-8 sm:h-8" />
                        </a>
                        <a href="mailto:sreedhilpavishanker@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-200 p-2 hover:bg-white/10 rounded-lg">
                            <Mail size={24} className="sm:w-8 sm:h-8" />
                        </a>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                    >
                        Learn More About Me
                    </button>
                </div>
            </div>

            <button
                onClick={scrollToAbout}
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce p-2"
            >
                <ArrowDown size={20} className="sm:w-6 sm:h-6" />
            </button>
        </section>
    );
};

export default Hero;
