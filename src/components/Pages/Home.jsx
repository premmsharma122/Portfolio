import React from 'react';
import { Github, Linkedin, Mail, Code, Server, Database, Cpu, Trophy, CheckCircle, ArrowRight, ChevronDown, Zap, Briefcase, GraduationCap } from 'lucide-react';
import SectionHeader from '../Common/SectionHeader';

const skills = {
    "Languages": ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
    "MERN Stack": ["MongoDB", "Express.js", "React.js", "Node.js"],
    "Tools & Tech": ["Git", "GitHub", "Postman", "Socket.io", "WebRTC", "Tailwind CSS"],
    "Core CS": ["Data Structures", "Algorithms", "OOP", "DBMS", "Computer Networks"]
};

const achievements = [
    { rank: "AIR 401", event: "Meta Hacker Cup 2025", detail: "Global Rank 2244", icon: "🏆" },
    { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams", icon: "🥈" },
    { rank: "Global 1712", event: "LeetCode Biweekly Contest 150", detail: "Top International Rank", icon: "⚡" },
    { rank: "1600+", event: "LeetCode Rating", detail: "2★ at CodeChef", icon: "⭐" },
    { rank: "1050+", event: "DSA Problems Solved", detail: "650+ on LeetCode", icon: "💪" }
];


export default function HomePage({ setCurrentPage }) {
    return (
        <div className="pt-16">
            {/* --- Hero Section (Increased 3D Depth) --- */}
            <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
                {/* Background Dynamic Glow/Blobs (More prominent/complex) */}
                <div className="absolute inset-0 opacity-40 overflow-hidden transform perspective-1000">
                    {/* Pulsing Light Sources */}
                    <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -top-32 -left-32 animate-[pulse_8s_infinite_ease-in-out]"></div>
                    <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-[pulse_8s_infinite_ease-in-out]" style={{animationDelay: '1.5s'}}></div>
                    {/* Radial Glow on Center */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-color-gray-950)_20%,_var(--tw-color-gray-900)_100%)] opacity-30"></div>
                </div>
                
                <div className="z-10 text-center space-y-8 max-w-4xl pt-16">
                    
                    {/* Professional Profile Image Placeholder with Glowing Ring */}
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl ring-4 ring-gray-700/50 relative overflow-hidden">
                        PS
                         {/* Subtle inner animated ring effect */}
                        <div className="absolute inset-0 rounded-full ring-4 ring-white/10 animate-ping-slow"></div>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-none drop-shadow-lg">
                        Prem Sharma
                    </h1>
                    
                    <div className="text-xl md:text-3xl text-gray-300 font-light space-y-2">
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30 shadow-xl shadow-purple-900/50">
                                <Code size={20} /> Mern Stack Developer
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 shadow-xl shadow-blue-900/50">
                                <Trophy size={20} /> Competitive Programmer
                            </span>
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Crafting scalable **MERN stack applications** and solving complex algorithmic challenges. 
                        Passionate about building innovative web solutions with modern technologies.
                    </p>
                    
                    <div className="flex flex-wrap gap-4 justify-center pt-6">
                        <button onClick={() => setCurrentPage('projects')}
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50 hover:shadow-pink-400/70">
                            View Projects <ArrowRight size={18} />
                        </button>
                        <button onClick={() => setCurrentPage('playground')}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-all border border-gray-600 hover:border-gray-500 shadow-md">
                            Coding Playground <Zap size={18} />
                        </button>
                    </div>
                    
                    {/* Social Icons with shadow glow */}
                    <div className="flex flex-wrap gap-4 justify-center pt-6">
                        <a href="https://github.com/premmsharma122" target="_blank" rel="noopener noreferrer" 
                           className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-purple-500/50">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/prem-sharma-0a4b62291" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-blue-500/50">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://codolio.com/profile/premm-122" target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-green-500/50">
                            <Code size={24} />
                        </a>
                        <a href="mailto:vrbpremsharma@gmail.com"
                           className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-md hover:shadow-pink-500/50">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                
                <div className="absolute bottom-10 animate-bounce">
                    <ChevronDown size={32} className="text-gray-400" />
                </div>
            </section>

            {/* --- Stats Section (Dynamic Border Glow) --- */}
            <section className="py-20 px-4 md:px-8 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {/* Stat Card 1 - Purple Glow */}
                        <div className="group p-8 rounded-2xl border border-transparent transform transition-transform duration-300 hover:scale-[1.03] shadow-lg relative overflow-hidden"
                             style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                            {/* Dynamic Border Effect */}
                            <div className="absolute inset-0 rounded-2xl border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-2xl group-hover:shadow-purple-700/50"></div>
                            <div className="relative z-10">
                                <div className="text-5xl font-bold text-purple-400 mb-2">7+</div>
                                <div className="text-gray-300">Projects Built</div>
                            </div>
                        </div>
                        
                        {/* Stat Card 2 - Blue Glow */}
                        <div className="group p-8 rounded-2xl border border-transparent transform transition-transform duration-300 hover:scale-[1.03] shadow-lg relative overflow-hidden"
                             style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                            <div className="absolute inset-0 rounded-2xl border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-2xl group-hover:shadow-blue-700/50"></div>
                             <div className="relative z-10">
                                <div className="text-5xl font-bold text-blue-400 mb-2">1050+</div>
                                <div className="text-gray-300">Problems Solved</div>
                            </div>
                        </div>

                        {/* Stat Card 3 - Green Glow */}
                        <div className="group p-8 rounded-2xl border border-transparent transform transition-transform duration-300 hover:scale-[1.03] shadow-lg relative overflow-hidden"
                             style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                            <div className="absolute inset-0 rounded-2xl border border-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-2xl group-hover:shadow-green-700/50"></div>
                             <div className="relative z-10">
                                <div className="text-5xl font-bold text-green-400 mb-2">1600+</div>
                                <div className="text-gray-300">LeetCode Rating</div>
                            </div>
                        </div>

                        {/* Stat Card 4 - Orange Glow */}
                        <div className="group p-8 rounded-2xl border border-transparent transform transition-transform duration-300 hover:scale-[1.03] shadow-lg relative overflow-hidden"
                             style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                            <div className="absolute inset-0 rounded-2xl border border-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-2xl group-hover:shadow-orange-700/50"></div>
                             <div className="relative z-10">
                                <div className="text-5xl font-bold text-orange-400 mb-2">AIR 115</div>
                                <div className="text-gray-300">Amazon ML</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Skills Section (Enhanced Card Styling) --- */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader 
                        title="Technical Arsenal" 
                        subtitle="Technologies I master for full-stack development"
                        color="from-purple-400 to-blue-400"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} 
                                className="p-6 rounded-2xl border border-gray-700 transition-all hover:border-purple-500 hover:scale-[1.02] shadow-xl hover:shadow-purple-900/40"
                                style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    {category === "MERN Stack" && <Server className="text-green-400" size={24} />}
                                    {category === "Languages" && <Code className="text-blue-400" size={24} />}
                                    {category === "Tools & Tech" && <Cpu className="text-purple-400" size={24} />}
                                    {category === "Core CS" && <Database className="text-orange-400" size={24} />}
                                    <h3 className="text-xl font-semibold">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-800/80 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-purple-500/50 transition-colors shadow-inner">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Achievements Section --- */}
            <section className="py-20 px-4 md:px-8 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader 
                        title="Competitive Milestones" 
                        subtitle="Recognition from top global coding contests"
                        color="from-yellow-400 to-orange-400"
                    />
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement) => (
                            <div key={achievement.event} 
                                className="p-6 rounded-2xl border border-gray-700 transition-all hover:border-yellow-500 hover:scale-[1.02] shadow-xl"
                                style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{achievement.icon}</div>
                                    <div>
                                        <div className="text-3xl font-bold text-yellow-400 mb-1">{achievement.rank}</div>
                                        <div className="text-lg font-semibold mb-1">{achievement.event}</div>
                                        {achievement.detail && <div className="text-sm text-gray-400">{achievement.detail}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 max-w-3xl shadow-2xl hover:shadow-purple-500/50 transition-shadow">
                            <Briefcase className="mx-auto mb-4 text-purple-400" size={40} />
                            <h3 className="text-2xl font-bold mb-2">AICTE Virtual Internship</h3>
                            <p className="text-gray-400">AI/ML Intern • June 2025 - July 2025</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Government-certified internship focused on AI/ML applications in sustainability. 
                                Developed Garbage Classification project for environmental efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Education Section --- */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader 
                        title="Education" 
                        subtitle="Foundational knowledge for a technical career"
                        color="from-green-400 to-blue-400"
                    />
                    
                    <div className="p-8 rounded-2xl border border-gray-700 shadow-xl hover:scale-[1.03] transition-transform hover:shadow-green-900/40"
                         style={{ background: 'linear-gradient(145deg, #1f2937, #111827)' }}>
                        <GraduationCap className="mx-auto mb-4 text-green-400" size={48} />
                        <h3 className="text-3xl font-bold mb-2">GLA University</h3>
                        <p className="text-xl text-gray-300 mb-2">Bachelor of Technology - Computer Science</p>
                        <p className="text-gray-400 mb-4">2023 - 2027 • Mathura, India</p>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}