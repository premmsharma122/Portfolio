import React, { useState } from 'react';
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';
import HomePage from './components/Pages/Home';
import ProjectsPage from './components/Pages/Projects';
import PlaygroundPage from './components/Pages/Playground'; // New Page
import ContactPage from './components/Pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to determine which page to render
  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'playground': // New case
        return <PlaygroundPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <NavBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
      />
      
      <main className="min-h-[calc(100vh-64px)]"> 
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

// NOTE: You must also create a minimal `src/components/Layout/Footer.jsx` file.
// For now, it can just contain a simple div with Prem Sharma © 2025.