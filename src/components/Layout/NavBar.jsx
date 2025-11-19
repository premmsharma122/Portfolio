import React from 'react';
import { Download, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'home' },
  { name: 'Projects', page: 'projects' },
  { name: 'Playground', page: 'playground' },
  { name: 'Contact', page: 'contact' },
];

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/final_prem_remm.pdf'; 
  link.download = 'Prem_Sharma_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function NavBar({ currentPage, setCurrentPage, menuOpen, setMenuOpen }) {
  
  // Custom component for better styling in both desktop and mobile
  const NavButton = ({ name, page, isMobile = false }) => (
    <button 
      onClick={() => { 
        setCurrentPage(page); 
        if (isMobile) setMenuOpen(false); // Close menu only if clicked from mobile view
      }} 
      className={`
        text-base font-medium transition-colors 
        ${currentPage === page ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-purple-400'}
        ${isMobile ? 'block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800' : ''}
      `}
    >
      {name}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-lg z-50 border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title Area */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-lg font-bold shadow-2xl transition-transform hover:scale-105">
              PS
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent sm:text-2xl">
              Prem Sharma
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <NavButton key={item.page} {...item} />)}
            <button onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50">
              <Download size={18} /> Resume
            </button>
          </div>
          
          {/* Mobile Hamburger Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X size={24} className="text-purple-400" /> : <Menu size={24} className="text-purple-400" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Responsive Dropdown) */}
      {/* Added transition classes for smoother opening/closing experience */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
            // Ensures menu doesn't interfere with main content when closed
            display: menuOpen ? 'block' : 'none' 
        }}
      >
        <div className="bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-2">
          {navItems.map(item => (
            // Pass isMobile prop to apply mobile-specific styling
            <NavButton key={item.page} {...item} isMobile={true} />
          ))}
          
          <div className="pt-2">
             <button onClick={handleDownloadResume}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-base font-medium shadow-md">
              <Download size={18} /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}