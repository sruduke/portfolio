import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('aboutme');
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        // Handle active link based on scroll position
        const handleScroll = () => {
            const sections = ['aboutme', 'skills', 'projects'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
        setIsMobileMenuOpen(false);
        
        // Smooth scroll to section
        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { id: 'aboutme', label: 'About Me' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
                scrolled 
                    ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <button
                                onClick={() => onUpdateActiveLink('aboutme')}
                                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                            >
                                SR
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => onUpdateActiveLink(link.id)}
                                    className={`relative px-6 py-2 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                                        activeLink === link.id
                                            ? 'text-white bg-white/10 backdrop-blur-sm'
                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.label}
                                    {activeLink === link.id && (
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="relative p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                                aria-label="Toggle mobile menu"
                            >
                                <div className="w-6 h-6 relative">
                                    <Menu 
                                        size={24} 
                                        className={`absolute inset-0 transition-all duration-300 ${
                                            isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                                        }`}
                                    />
                                    <X 
                                        size={24} 
                                        className={`absolute inset-0 transition-all duration-300 ${
                                            isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                                        }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-64 opacity-100' 
                        : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                    <div className="bg-gray-900/98 backdrop-blur-xl border-t border-white/10">
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => onUpdateActiveLink(link.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 ${
                                        activeLink === link.id
                                            ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};