import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import headshot from '../assets/img/headshot.jpg';

const personalDescription = "I'm a passionate software developer with expertise in full-stack development, system integration, and DevOps practices. I love creating innovative solutions that tackle complex technical challenges and provide a friendly user experience.";

const SlideIn = ({ children, direction = "up", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);
    
    const getTransform = () => {
        if (isVisible) return 'translate-x-0 translate-y-0';
        switch (direction) {
            case 'up': return 'translate-y-10';
            case 'down': return '-translate-y-10';
            case 'left': return 'translate-x-10';
            case 'right': return '-translate-x-10';
            default: return 'translate-y-10';
        }
    };
    
    return (
        <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
        } transform ${getTransform()}`}>
            {children}
        </div>
    );
};

const TypewriterEffect = ({ texts, className = "" }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % texts.length;
        const fullText = texts[i];
        const updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === '') {
            setDelta(300 - Math.random() * 100);
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <span className={className}>
            {text}
            <span className="animate-pulse">|</span>
        </span>
    );
};

const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                />
            ))}
        </div>
    );
};

const SocialLinks = ({ className = "" }) => {
    const links = [
        { icon: Github, href: "https://github.com/sruduke", label: "GitHub" },
        { icon: Linkedin, href: "https://ca.linkedin.com/in/sophia-ruduke-56599522a", label: "LinkedIn" },
        { icon: Mail, href: "mailto:sophia.ruduke@convalexa.cc", label: "Email" }
    ];

    return (
        <div className={`flex gap-4 ${className}`}>
            {links.map(({ icon: Icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
                    aria-label={label}
                >
                    <Icon size={20} className="text-white group-hover:text-blue-300 transition-colors duration-300" />
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            {label}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

const ScrollIndicator = () => {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm font-medium">Scroll Down</span>
                <ChevronDown size={24} />
            </div>
        </div>
    );
};

export const Banner = () => {
    const toRotate = ["Software Developer", "Systems Integrator", "DevOps Engineer"];

    return (
        <section 
            className="relative min-h-screen w-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden" 
            id="aboutme"
        >
            {/* Background Effects */}
            <FloatingParticles />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Mobile Layout */}
            <div className="relative z-10 lg:hidden">
                {/* Mobile Hero Section */}
                <div className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
                    <div className="text-center space-y-8 max-w-sm">
                        <SlideIn direction="up" delay={200}>
                            <div className="relative mb-8">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 scale-110" />
                                <img 
                                    src={headshot} 
                                    alt="Sophia Ruduke" 
                                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
                                />
                            </div>
                        </SlideIn>

                        <SlideIn direction="up" delay={400}>
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Hello World!
                                </span>
                                <br />
                                I'm Sophia Ruduke
                            </h1>
                        </SlideIn>

                        <SlideIn direction="up" delay={600}>
                            <div className="h-12 flex items-center justify-center">
                                <TypewriterEffect 
                                    texts={toRotate}
                                    className="text-lg text-center sm:text-xl font-semibold text-blue-300"
                                />
                            </div>
                        </SlideIn>

                        <SlideIn direction="up" delay={800}>
                            <div className="flex items-center justify-center">
                                <SocialLinks />
                            </div>
                        </SlideIn>
                    </div>
                </div>

                {/* Mobile About Section */}
                <div className="px-6 pb-12">
                    <SlideIn direction="up" delay={1000}>
                        <div className="relative max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur-xl" />
                            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                                <p className="text-gray-200 leading-relaxed text-center">
                                    {personalDescription}
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <a
                                        href="/file/cv.pdf" 
                                        download="Sophia_Ruduke_CV.pdf"
                                        className="inline-block">
                                        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                                            <Download size={18} />
                                            Download CV
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SlideIn>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex relative z-10 min-h-screen items-center">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        {/* Left Column */}
                        <div className="space-y-8">
                            <SlideIn direction="right" delay={200}>
                                <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        Hello World!
                                    </span>
                                    <br />
                                    I'm Sophia Ruduke
                                </h1>
                            </SlideIn>

                            <SlideIn direction="right" delay={400}>
                                <div className="h-16 flex items-center justify-center">
                                    <TypewriterEffect 
                                        texts={toRotate}
                                        className="text-2xl xl:text-3xl font-semibold text-blue-300"
                                    />
                                </div>
                            </SlideIn>

                            <SlideIn direction="right" delay={600}>
                                <div className="flex gap-6 items-center justify-center">
                                    <SocialLinks />
                                    <a
                                        href="/file/cv.pdf" 
                                        download="Sophia_Ruduke_CV.pdf"
                                        className="inline-block">
                                            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                                                <Download size={18} />
                                                Download CV
                                            </button>
                                    </a>
                                </div>
                            </SlideIn>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center space-y-8">
                            <SlideIn direction="left" delay={300}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 scale-110" />
                                    <img 
                                        src={headshot} 
                                        alt="Sophia Ruduke" 
                                        className="relative w-64 h-64 xl:w-80 xl:h-80 rounded-full border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </SlideIn>

                            <SlideIn direction="left" delay={800}>
                                <div className="relative max-w-md">
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur-xl" />
                                    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                                        <p className="text-gray-200 leading-relaxed">
                                            {personalDescription}
                                        </p>
                                    </div>
                                </div>
                            </SlideIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator/>
        </section>
    );
};