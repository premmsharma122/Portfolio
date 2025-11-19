import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-gray-500">
        <p>
          &copy; {currentYear} Prem Sharma. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}