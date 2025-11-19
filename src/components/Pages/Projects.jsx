// import React from 'react';
// import { Github, ExternalLink, Zap } from 'lucide-react';
// import SectionHeader from '../Common/SectionHeader';
import React from 'react';
import { Github, ExternalLink, Zap, CheckCircle } from 'lucide-react'; 
import SectionHeader from '../Common/SectionHeader';
// Project data moved from the main Portfolio.jsx
const projects = [
    {
        title: "GDVerse",
        fullDesc: "A comprehensive placement preparation platform that revolutionizes group discussions through AI-powered analysis. Students can create or join discussion rooms using unique keys, with full control over their audio and video streams.",
        tech: ["Node.js", "Express", "MongoDB", "React", "Socket.io", "WebRTC", "AssemblyAI"],
        features: ["Real-time video & audio streaming with WebRTC", "AI-powered speech analysis for clarity and tone", "Automated performance reports with feedback", "Random topic generation for practice", "Secure room creation with unique keys"],
        live: "https://wonderful-dasik-d7b0f9.netlify.app/",
        github: "https://github.com/premmsharma122/GD-Web",
        gradient: "from-purple-500 to-pink-500",
        icon: "🎯"
    },
    {
        title: "Quick-Chat App",
        fullDesc: "A modern real-time communication platform built with the MERN stack. Features include instant message delivery, online/offline status indicators, and seamless image sharing capabilities.",
        tech: ["Node.js", "Express", "MongoDB", "React", "Socket.io", "Cloudinary"],
        features: ["Instant real-time messaging", "Live online/offline status tracking", "Image sharing with cloud storage", "User authentication & authorization", "Profile management system"],
        live: "https://web-chat-app-eta-three.vercel.app/",
        github: "https://github.com/premmsharma122/Web-Chat-App",
        gradient: "from-blue-500 to-cyan-500",
        icon: "💬"
    },
    {
        title: "Medicos - Hospital Administration",
        fullDesc: "A comprehensive hospital management solution that streamlines healthcare operations. The system features dual authentication for admins and patients.",
        tech: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
        features: ["Dual authentication (Admin & Patient)", "Doctor profile management", "Real-time appointment scheduling", "Integrated payment processing", "Notification system for updates"],
        live: "https://medicos-prem3.netlify.app/",
        github: "https://github.com/premmsharma122/Medicos",
        gradient: "from-green-500 to-emerald-500",
        icon: "🏥"
    },
    {
        title: "Blog Web Pro",
        fullDesc: "A full-featured blogging platform built with the MERN stack. Includes a rich text editor for content creation and category management.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        features: ["Rich text editor for content creation", "Category & tag management", "Responsive design", "User authentication", "Comment system"],
        live: "https://blog-web-pro-prem.netlify.app/",
        github: "https://github.com/premmsharma122/blog-web-project",
        gradient: "from-orange-500 to-red-500",
        icon: "📝"
    },
    // The rest of your projects follow this structure...
    {
        title: "Weather App",
        fullDesc: "A sleek weather application that provides accurate, real-time weather information with beautiful weather-themed UI animations.",
        tech: ["JavaScript", "HTML", "CSS", "Weather API"],
        features: ["Real-time weather data", "Location-based forecasts", "5-day weather prediction", "Temperature unit conversion", "Clean, intuitive interface"],
        live: "https://weather-app-premm-122.netlify.app/",
        github: "https://github.com/premmsharma122",
        gradient: "from-sky-500 to-blue-500",
        icon: "🌤️"
    },
    {
        title: "Simon Says Game",
        fullDesc: "A digital recreation of the classic Simon Says memory game with colorful animations and increasing difficulty levels.",
        tech: ["JavaScript", "HTML", "CSS", "Audio API"],
        features: ["Progressive difficulty levels", "Sound effects & animations", "Score tracking system", "Responsive game controls", "High score persistence"],
        live: "https://effulgent-banoffee-1dc907.netlify.app/",
        github: "https://github.com/premmsharma122/Simon_Game",
        gradient: "from-yellow-500 to-orange-500",
        icon: "🎮"
    },
    {
        title: "Control Tower",
        fullDesc: "A sophisticated control system dashboard built with React providing real-time monitoring capabilities.",
        tech: ["React", "JavaScript", "Tailwind CSS"],
        features: ["Real-time data monitoring", "Interactive dashboard", "Data visualization charts", "System parameter control", "Responsive design"],
        live: "https://timely-cobbler-8ee7af.netlify.app/",
        github: "https://github.com/premmsharma122/control-tower-react",
        gradient: "from-indigo-500 to-purple-500",
        icon: "🎛️"
    }
];

// Reusable Project Card component to ensure DRY code
const ProjectCard = ({ project }) => (
    <div className="rounded-3xl overflow-hidden border border-gray-700 transition-all shadow-2xl backdrop-blur-sm transform hover:scale-[1.01] duration-300"
         style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
        <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
        
        <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl">{project.icon}</span>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {project.title}
                        </h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed border-l-4 border-gray-600 pl-4">
                        {project.fullDesc}
                    </p>
                    
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center gap-2"><Zap size={20}/> Key Features</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-1" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="md:w-1/3 space-y-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-gray-700/70 rounded-lg text-sm text-gray-300 border border-gray-600 shadow-inner">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="space-y-3 pt-4">
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-[1.02] transition-transform font-medium shadow-lg shadow-blue-500/30">
                            <ExternalLink size={20} /> Live Demo
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all font-medium border border-gray-600">
                            <Github size={20} /> Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default function ProjectsPage() {
    return (
        <div className="pt-24 pb-20 px-4 md:px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <SectionHeader 
                    title="Featured Projects" 
                    subtitle="MERN Stack and Web Development Solutions"
                    color="from-pink-400 to-purple-400"
                />
                
                <div className="space-y-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}