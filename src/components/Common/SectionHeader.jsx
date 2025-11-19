import React from 'react';

export default function SectionHeader({ title, subtitle, color }) {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {title}
      </h2>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </div>
  );
}