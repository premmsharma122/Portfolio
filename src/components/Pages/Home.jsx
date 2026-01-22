import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  Cpu,
  Trophy,
  ArrowRight,
  ChevronDown,
  Zap,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import SectionHeader from "../Common/SectionHeader";

/* ================= DATA ================= */

const skills = {
  Languages: ["Java", "Python", "JavaScript", "SQL", "HTML/CSS"],
  "Backend & Frameworks": [
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
  ],
  "Microservices & Cloud": [
    "Kafka",
    "Spring Cloud",
    "Eureka",
    "OpenFeign",
    "API Gateway",
    "OAuth 2.0",
    "JWT",
  ],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Swagger"],
  "Core CS": ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
};

const achievements = [
  { rank: "AIR 115", event: "Amazon ML Challenge 2025", detail: "Among 6,000+ teams", icon: "🥈" },
  { rank: "1859", event: "LeetCode Knight Badge", detail: "720+ Problems Solved", icon: "⚡" },
  { rank: "1211", event: "Codeforces Pupil", detail: "Peak Rating", icon: "⭐" },
  { rank: "Top 5", event: "College Rank", detail: "Competitive Programming", icon: "🏆" },
];

/* ================= COMPONENT ================= */

export default function Home() {
  return (
    <div className="pt-16">
      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -top-32 -left-32 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -bottom-40 -right-40 animate-pulse"></div>
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
              <Code size={20} /> Java Backend Developer
            </span>
            <span className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30">
              <Trophy size={20} /> Competitive Programmer
            </span>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Backend-focused developer specializing in <b>Java, Spring Boot,
            Microservices & Distributed Systems</b>. Passionate about scalable,
            high-performance system design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform shadow-2xl"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-600"
            >
              Contact Me <Zap size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <a href="https://github.com/premmsharma122" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com" target="_blank"><Linkedin /></a>
            <a href="mailto:vrbpremsharma@gmail.com"><Mail /></a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* ================= ABOUT (MERGED ONLY) ================= */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="About Me"
            subtitle="Backend engineering & system design focus"
            color="from-purple-400 to-blue-400"
          />

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I am a <span className="text-white font-semibold">B.Tech Computer Science</span> student
            with a CGPA of <span className="text-purple-400 font-semibold">8.52</span> from
            <span className="text-white font-semibold"> GL Bajaj Group of Institutions</span>.
            I focus on Java backend development, microservices, and distributed system design,
            with experience in open-source contributions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Code />, title: "Backend Engineering", desc: "Java, Spring Boot, JPA, Hibernate" },
              { icon: <Server />, title: "Microservices", desc: "Kafka, Spring Cloud, OAuth 2.0" },
              { icon: <Database />, title: "Core CS", desc: "DSA, DBMS, OS, CN" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition shadow-xl"
                style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
              >
                <div className="mx-auto mb-3 text-purple-400">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS (UNCHANGED) ================= */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Technical Skills" subtitle="Core strengths" color="from-green-400 to-blue-400" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, list]) => (
              <div
                key={cat}
                className="p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition shadow-xl"
                style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
              >
                <h3 className="text-xl font-semibold mb-4">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((s) => (
                    <span key={s} className="px-3 py-1 bg-gray-800 rounded-full text-sm">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS (UNCHANGED) ================= */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Achievements" subtitle="Competitive milestones" color="from-yellow-400 to-orange-400" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div
                key={a.event}
                className="p-6 rounded-2xl border border-gray-700 hover:border-yellow-500 transition shadow-xl"
                style={{ background: "linear-gradient(145deg,#1f2937,#111827)" }}
              >
                <div className="text-3xl">{a.icon}</div>
                <div className="text-2xl font-bold text-yellow-400">{a.rank}</div>
                <div className="font-semibold">{a.event}</div>
                <div className="text-sm text-gray-400">{a.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader title="Education" subtitle="Academic foundation" color="from-green-400 to-blue-400" />
          <div className="p-8 rounded-2xl border border-gray-700 shadow-xl">
            <GraduationCap className="mx-auto mb-4 text-green-400" size={48} />
            <h3 className="text-2xl font-bold">GLA University</h3>
            <p className="text-gray-300">B.Tech – Computer Science</p>
            <p className="text-gray-400">CGPA 7.40 • 2023 – 2027</p>
          </div>
        </div>
      </section>
    </div>
  );
}
