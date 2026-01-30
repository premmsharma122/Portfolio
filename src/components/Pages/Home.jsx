import React from "react";

import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  Trophy,
  ArrowRight,
  ChevronDown,
  Zap,
  GraduationCap,
} from "lucide-react";

import SectionHeader from "../Common/SectionHeader";

/* ================= DATA ================= */

const skills = {
  Languages: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],

  "Frameworks & Libraries": [
    "Node.js",
    "Express.js",
    "React.js",
    "Tailwind CSS",
    "Pandas",
    "Matplotlib",
  ],

  "Databases & Cloud": [
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "Kubernetes",
  ],

  "Core CS": [
    "Data Structures & Algorithms",
    "Low-Level System Design",
    "Operating Systems",
    "OOP",
    "Computer Networks",
    "DBMS",
  ],
};

const achievements = [
  {
    rank: "AIR 115",
    event: "Amazon ML Challenge 2025",
    detail: "Among 6,000+ teams",
    icon: "🥈",
  },
  {
    rank: "1854★",
    event: "LeetCode Knight",
    detail: "1300+ Problems Solved",
    icon: "⚡",
  },
  {
    rank: "AIR 615",
    event: "Meta Hacker Cup Round 1",
    detail: "Global Rank 2025",
    icon: "🏆",
  },
  {
    rank: "AIR 1041",
    event: "Meta Hacker Cup Round 2",
    detail: "Global Rank 2025",
    icon: "⭐",
  },
];

/* ================= COMPONENT ================= */

export default function Home({ setCurrentPage }) {
  return (
    <div className="pt-16">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -top-32 -left-32 animate-pulse" />
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-pulse" />
        </div>

        <div className="z-10 text-center space-y-8 max-w-4xl pt-16">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl ring-4 ring-gray-700/50">
            PS
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Prem Sharma
          </h1>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-2 bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500/30">
              <Code size={20} /> Full Stack Developer
            </span>

            <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
              <Trophy size={20} /> Competitive Programmer
            </span>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer specializing in{" "}
            <b>
              MERN Stack, Real-Time Systems, Cloud & Scalable Application
              Development
            </b>
            . Passionate about problem-solving and system design.
          </p>

          {/* ===== BUTTONS ===== */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <button
              type="button"
              onClick={() => setCurrentPage("projects")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform shadow-2xl"
            >
              View Projects <ArrowRight size={18} />
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage("contact")}
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600"
            >
              Contact Me <Zap size={18} />
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a href="https://github.com/premmsharma122" target="_blank">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/prem-sharma-0a4b62291"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="mailto:vrbpremsharma@gmail.com">
              <Mail />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="About Me"
            subtitle="Full-stack engineering & system design"
            color="from-purple-400 to-blue-400"
          />

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a B.Tech Computer Science student from GLA University, Mathura. Strong
            foundation in DSA, system design, and cloud technologies with
            hands-on experience building scalable web applications.
          </p>
        </div>
      </section>
      {/* ================= SKILLS ================= */}
<section className="py-20 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <SectionHeader
      title="Technical Skills"
      subtitle="Core strengths"
      color="from-green-400 to-blue-400"
    />

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(skills).map(([category, list]) => (
        <div
          key={category}
          className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition shadow-xl"
          style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
        >
          <h3 className="text-xl font-semibold mb-4">{category}</h3>

          <div className="flex flex-wrap gap-2">
            {list.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= EDUCATION ================= */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="Education"
            subtitle="Academic foundation"
            color="from-green-400 to-blue-400"
          />

          <div className="p-8 rounded-2xl border border-gray-700 shadow-xl">
            <GraduationCap
              className="mx-auto mb-4 text-green-400"
              size={48}
            />
            <h3 className="text-2xl font-bold">GLA University</h3>
            <p className="text-gray-300">B.Tech – Computer Science</p>
            <p className="text-gray-400">CGPA 7.40 • 2023 – 2027</p>
          </div>
        </div>
      </section>
    </div>
  );
}
