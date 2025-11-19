import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

// !!! IMPORTANT: Replace this with your actual form submission endpoint !!!
// Example: A Formspree endpoint (easy to set up for static sites)
const FORM_SUBMIT_URL = 'https://formspree.io/f/mgvdaydn'; 

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(''); // 'sending', 'success', 'error', ''

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
        const response = await fetch(FORM_SUBMIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setFormStatus('error');
        }
    } catch (error) {
        setFormStatus('error');
    } finally {
        setTimeout(() => setFormStatus(''), 5000); // Clear status after 5 seconds
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch 🚀
          </h1>
          <p className="text-xl text-gray-400">Let's build something amazing together.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - 3D Effect */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl transform hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden"
               style={{
                 background: 'linear-gradient(145deg, #1f2937, #111827)', 
                 boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
               }}
          >
            <h2 className="text-3xl font-bold mb-6 text-purple-400">Send a Message</h2>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                  placeholder="Test "
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                  placeholder="test@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:scale-[1.01] transition-transform font-medium shadow-lg disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

              {formStatus === 'success' && (
                <div className="text-green-400 text-center font-medium mt-3 flex items-center justify-center gap-2">
                  Message sent successfully! 🥳
                </div>
              )}
              {formStatus === 'error' && (
                <div className="text-red-400 text-center font-medium mt-3 flex items-center justify-center gap-2">
                  Failed to send. Please contact me directly. 😥
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-3xl border border-purple-500/30 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Direct Contact</h2>

              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <Mail size={28} className="text-purple-400" />
                  <a href="mailto:vrbpremsharma@gmail.com" className="hover:text-purple-400 transition-colors">
                    vrbpremsharma@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone size={28} className="text-purple-400" />
                  <span>+91 9258534560</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin size={28} className="text-purple-400" />
                  <span>Vrindavan, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="https://github.com/premmsharma122" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-lg">
                  <Github size={24} />
                </a>

                <a href="https://www.linkedin.com/in/prem-sharma-0a4b62291" target="_blank" rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110 shadow-lg">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}