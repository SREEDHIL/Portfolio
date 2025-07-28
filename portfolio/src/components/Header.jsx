import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                        Portfolio
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-gray-900/95 backdrop-blur-md rounded-lg">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 rounded-lg mx-2 my-1"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
