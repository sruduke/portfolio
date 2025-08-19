import React, { useEffect, useState, useRef } from 'react';

// Mock data for demonstration
const skillsDescription = "I have extensive experience across multiple programming languages, frameworks, and technologies. My expertise spans from backend development to system administration, with a passion for learning and implementing new technologies.";

// Simulated gauge images - in real implementation these would be your actual images
const createGaugeDataURL = (percentage) => {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');
  
  // Background circle
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI);
  ctx.strokeStyle = '#374151';
  ctx.lineWidth = 16;
  ctx.stroke();
  
  // Progress arc
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + (2 * Math.PI * percentage / 100);
  
  ctx.beginPath();
  ctx.arc(100, 100, 80, startAngle, endAngle);
  ctx.strokeStyle = percentage >= 95 ? '#10b981' : 
                   percentage >= 90 ? '#3b82f6' : 
                   percentage >= 85 ? '#8b5cf6' : '#f59e0b';
  ctx.lineWidth = 16;
  ctx.lineCap = 'round';
  ctx.stroke();
  
  return canvas.toDataURL();
};

// Mock skill icons (using emoji for demo)
const skillIcons = {
  python: '🐍',
  java: '☕',
  javascript: '📜',
  c: '⚡',
  html: '🌐',
  css: '🎨',
  react: '⚛️',
  bash: '💻',
  mssql: '🗄️',
  postgres: '🐘',
  mongodb: '🍃',
  mariadb: '🛢️',
  influxdb: '📊',
  docker: '🐳',
  proxmox: '💾',
  ansible: '🤖',
  maven: '📦',
  gradle: '🔧',
  ignition: '🔥',
  tailscale: '🌐',
  vyos: '🛡️'
};

const programmingLanguages = [
  { title: "Python", icon: skillIcons.python },
  { title: "Java", icon: skillIcons.java },
  { title: "C", icon: skillIcons.c },
  { title: "Bash", icon: skillIcons.bash },
];

const webDevelopment = [
  { title: "HTML", icon: skillIcons.html },
  { title: "CSS", icon: skillIcons.css },
  { title: "JavaScript", icon: skillIcons.javascript },
  { title: "React", icon: skillIcons.react },
];

const databases = [
  { title: "InfluxDB", icon: skillIcons.influxdb },
  { title: "MariaDB", icon: skillIcons.mariadb },
  { title: "Microsoft SQL Server", icon: skillIcons.mssql },
  { title: "Postgres", icon: skillIcons.postgres },
  { title: "MongoDB", icon: skillIcons.mongodb },
];

const virtualizationAndAutomation = [
  { title: "Docker", icon: skillIcons.docker, category: "virtualization" },
  { title: "Proxmox", icon: skillIcons.proxmox, category: "virtualization" },
  { title: "Ignition", icon: skillIcons.ignition, category: "automation" },
  { title: "Ansible", icon: skillIcons.ansible, category: "automation" },
];

const networkingAndPackaging = [
  { title: "Tailscale", icon: skillIcons.tailscale, category: "networking" },
  { title: "VyOS", icon: skillIcons.vyos, category: "networking" },
  { title: "Maven", icon: skillIcons.maven, category: "packaging" },
  { title: "Gradle", icon: skillIcons.gradle, category: "packaging" },
];

const gaugeSkills = [
  { title: "Procedural Programming", percentage: 95 },
  { title: "Object-Oriented Programming", percentage: 85 },
  { title: "Functional Programming", percentage: 90 },
  { title: "REST APIs", percentage: 85 },
  { title: "Testing", percentage: 90 },
  { title: "Automation", percentage: 90 },
  { title: "System Admin", percentage: 85 },
  { title: "Client Relations", percentage: 95 },
  { title: "Virtualization", percentage: 90 },
  { title: "Learning New Things", percentage: 100 },
];

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated === false) return;

    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    let animationFrame;
    
    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration, hasAnimated]);

  return <span ref={counterRef}>{count}</span>;
};

const GaugeItem = ({ title, percentage }) => {
  const [gaugeImage, setGaugeImage] = useState(null);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const gaugeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (gaugeRef.current) {
      observer.observe(gaugeRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated === false) return;

    let start = 0;
    const duration = 1000;
    const increment = percentage / (duration / 16);
    let animationFrame;
    
    const animate = () => {
      start += increment;
      if (start >= percentage) {
        setCurrentPercentage(percentage);
      } else {
        setCurrentPercentage(Math.floor(start));
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, percentage, hasAnimated]);

  useEffect(() => {
    setGaugeImage(createGaugeDataURL(currentPercentage));
  }, [currentPercentage]);

  return (
    <div 
      ref={gaugeRef}
      className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
    >
      <div className="relative mb-4">
        <img 
          src={gaugeImage} 
          alt="gauge" 
          className="w-32 h-32 drop-shadow-lg" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            <AnimatedCounter target={currentPercentage} duration={1000}/>%
          </span>
        </div>
      </div>
      <h5 className="font-semibold text-white text-center text-sm leading-tight">
        {title}
      </h5>
    </div>
  );
};

const SkillIcon = ({ title, icon }) => {
  return (
    <div className="group flex flex-col items-center p-4 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
      <div className="text-4xl mb-2 group-hover:animate-bounce">
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors text-center">
        {title}
      </span>
    </div>
  );
};

const SkillCategory = ({ title, skills, gradientFrom = "blue", gradientTo = "purple" }) => {
  const gradientClasses = {
    blue: "from-blue-400 to-blue-500",
    purple: "from-purple-400 to-purple-500",
    "blue-purple": "from-blue-400 to-purple-500",
    "purple-blue": "from-purple-400 to-blue-500"
  };

  // Determine grid layout based on number of skills
  const getGridClasses = (skillCount) => {
    if (skillCount <= 2) {
      return "flex justify-center gap-8"; // Center 2 or fewer items
    } else if (skillCount <= 3) {
      return "grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center max-w-md mx-auto";
    } else if (skillCount <= 4) {
      return "grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mx-auto";
    } else {
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl";
    }
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex flex-col items-center mb-8">
        <h3 className={`text-xl md:text-2xl font-bold px-6 py-3 rounded-full bg-gradient-to-r ${gradientClasses[gradientFrom + "-" + gradientTo] || gradientClasses["blue-purple"]} text-white text-center shadow-lg mb-6`}>
          {title}
        </h3>
        <div className={getGridClasses(skills.length)}>
          {skills.map((skill, index) => (
            <SkillIcon key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SimpleCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  // Reset currentIndex if it goes out of bounds when itemsToShow changes
  useEffect(() => {
    const maxIndex = Math.max(0, items.length - itemsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsToShow, items.length, currentIndex]);

  const maxIndex = Math.max(0, items.length - itemsToShow);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Calculate item width as percentage of the visible container
  const itemWidth = 100 / itemsToShow;

  return (
    <div className="relative w-full">
      <div className="overflow-visible rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * itemWidth}%)`,
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-2"
              style={{ width: `${itemWidth}%` }}
            >
              <GaugeItem title={item.title} percentage={item.percentage} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        disabled={!canGoPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${
          canGoPrev 
            ? 'bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-xl hover:scale-110 cursor-pointer' 
            : 'bg-gray-600/50 cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        disabled={!canGoNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 ${
          canGoNext 
            ? 'bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-xl hover:scale-110 cursor-pointer' 
            : 'bg-gray-600/50 cursor-not-allowed opacity-50'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 scale-125'
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="min-h-screen py-20 w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/30 shadow-2xl overflow-hidden">
          
          {/* Header Section */}
          <div className="text-center p-8 md:p-16 bg-gradient-to-r from-blue-400/10 to-purple-500/10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {skillsDescription}
            </p>
          </div>

          {/* Gauge Skills Carousel */}
          <div className="p-8 md:p-16">
            <SimpleCarousel items={gaugeSkills} />
          </div>

          {/* Skills Categories */}
          <div className="p-8 md:p-16 space-y-16">
            <SkillCategory 
              title="Programming Languages" 
              skills={programmingLanguages}
              gradientFrom="blue"
              gradientTo="purple"
            />

            <SkillCategory 
              title="Web Development" 
              skills={webDevelopment}
              gradientFrom="purple"
              gradientTo="blue"
            />

            <SkillCategory 
              title="Databases" 
              skills={databases}
              gradientFrom="blue"
              gradientTo="purple"
            />

            <div className="grid md:grid-cols-2 gap-12">
              <SkillCategory 
                title="Virtualization" 
                skills={virtualizationAndAutomation.filter(s => s.category === "virtualization")}
                gradientFrom="purple"
                gradientTo="blue"
              />
              
              <SkillCategory 
                title="Automation" 
                skills={virtualizationAndAutomation.filter(s => s.category === "automation")}
                gradientFrom="blue"
                gradientTo="purple"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <SkillCategory 
                title="Networking" 
                skills={networkingAndPackaging.filter(s => s.category === "networking")}
                gradientFrom="purple"
                gradientTo="blue"
              />
              
              <SkillCategory 
                title="Build Tools" 
                skills={networkingAndPackaging.filter(s => s.category === "packaging")}
                gradientFrom="blue"
                gradientTo="purple"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};