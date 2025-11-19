import React from 'react';
import { Code, Trophy, Zap, CheckCircle, Clock } from 'lucide-react';
import SectionHeader from '../Common/SectionHeader';

export default function PlaygroundPage() {
  const stats = [
    { value: '663', label: 'Problems Solved', icon: <Code size={24} /> },
    { value: '347', label: 'Total Active Days', icon: <Clock size={24} /> },
    { value: '72', label: 'Current Streak (Max: 81)', icon: <Zap size={24} /> },
    { value: '20', label: 'Total Contests', icon: <Trophy size={24} /> },
  ];

  const platforms = [
    { name: 'LeetCode', count: 670, link: 'https://leetcode.com/u/codee_runn/', icon: '👨‍💻' },
    { name: 'CodeChef', count: 149, link: 'https://www.codechef.com/users/sharmaprm', icon: '🍲' },
    { name: 'CodeForces', count: 100, link: 'https://codeforces.com/profile/premm_122', icon: '🤖' },
    { name: 'GeeksforGeeks', count: 110, link: 'https://auth.geeksforgeeks.org/user/vrbpremsharma/profile', icon: '💡' },
    { name: 'HackerRank', count: 50, link: 'https://www.hackerrank.com/profile/_2315001670', icon: '📜' },
  ];

  const competitionStats = [
    { rank: "AIR 401", event: "Meta Hacker Cup 2025", detail: "Global Rank 2244" },
    { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams" },
    { rank: "Global 1712", event: "LeetCode Biweekly Contest 150", detail: "Top International Rank" },
    { rank: "1546", event: "LeetCode Rating", detail: "Competitive Edge" },
    { rank: "2★", event: "CodeChef", detail: "Rated Competitive Programmer" }
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Coding Playground" 
          subtitle="A live look at my competitive programming streaks and development activity."
          color="from-green-400 to-cyan-400"
        />

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} 
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:scale-[1.02] relative"
              style={{
                background: 'linear-gradient(145deg, #1f2937, #111827)',
              }}
            >
              <div className={`text-4xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${index % 2 === 0 ? 'from-green-400 to-cyan-400' : 'from-purple-400 to-pink-400'}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 flex items-center gap-2">
                {stat.icon} 
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- Activity Streaks Section --- */}
        <h2 className="text-3xl font-bold text-gray-200 mb-8 mt-12">Activity Streaks</h2>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Competitive Streak (LeetCode) Card */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2"><Trophy size={20} /> Competitive Streak (LeetCode)</h3>
            <p className="text-gray-400 mb-4">Daily problem solving activity across platforms.</p>
            
            {/* LeetCode Streak Chart Image - Adjusted blur and added a subtle overlay */}
            <div className="relative w-full h-auto mb-4 overflow-hidden rounded-lg group"> {/* Added 'group' for hover effect */}
                <img 
                    src="/leetcode_streak.png" // Path to your image in the public folder
                    alt="LeetCode Streak Chart"
                    className="w-full h-auto object-cover rounded-lg filter blur-[3px] group-hover:filter-none transition-all duration-500 hover:scale-105" // Adjusted blur to 'blur-[3px]' and added group-hover
                />
                {/* Subtle overlay for blending, removed stronger top gradient */}
                <div className="absolute inset-0 bg-gray-950/20 rounded-lg group-hover:bg-transparent transition-colors duration-500"></div> 
            </div>
            
            <a href="https://leetcode.com/u/codee_runn/" target="_blank" rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-4 inline-flex items-center gap-1">
              View LeetCode Profile &rarr;
            </a>
          </div>

          {/* GitHub Contributions Card */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 text-green-400 flex items-center gap-2"><CheckCircle size={20} /> GitHub Contributions</h3>
            <p className="text-gray-400 mb-4">Commit activity throughout the last year.</p>
            
            {/* GitHub Contributions Chart Image - Add your image here */}
            <div className="relative w-full h-auto mb-4 overflow-hidden rounded-lg group"> {/* Added 'group' for hover effect */}
                <img 
                    src="/github_contributions.png" // <-- PLACE YOUR GITHUB STREAK IMAGE HERE
                    alt="GitHub Contributions Chart"
                    className="w-full h-auto object-cover rounded-lg filter blur-[3px] group-hover:filter-none transition-all duration-500 hover:scale-105" // Adjusted blur
                />
                {/* Subtle overlay for blending */}
                <div className="absolute inset-0 bg-gray-950/20 rounded-lg group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <a href="https://github.com/premmsharma122" target="_blank" rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-cyan-300 text-sm mt-4 inline-flex items-center gap-1">
              View GitHub Profile &rarr;
            </a>
          </div>
        </div>
        
        {/* --- Platform Breakdown and Achievements --- */}
        <h2 className="text-3xl font-bold text-gray-200 mb-8 mt-12">Problem Solved Breakdown</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            {platforms.map(p => (
              <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer" 
                className="flex justify-between items-center bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-purple-500/30">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{p.icon}</span>
                  <span className="font-medium">{p.name}</span>
                </div>
                <span className="text-purple-400 font-bold">{p.count}+</span>
              </a>
            ))}
          </div>

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Top Competitive Achievements</h3>
            {competitionStats.map((achievement, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl border-l-4 border-yellow-500 shadow-md">
                <div className="text-xl font-bold text-yellow-400">{achievement.rank}</div>
                <div className="font-semibold text-gray-200">{achievement.event}</div>
                <div className="text-sm text-gray-400">{achievement.detail}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}