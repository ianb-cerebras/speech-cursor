import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Computer Science Header */}
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 border-b border-cyan-400 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-cyan-400 font-mono font-bold text-xl tracking-wider">
              <span className="bg-black px-3 py-1 border border-cyan-400 rounded">
                COMPUTER SCIENCE
              </span>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6 font-mono text-sm">
              <li><a href="#about" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 border-b border-transparent hover:border-cyan-100">ABOUT</a></li>
              <li><a href="#projects" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 border-b border-transparent hover:border-cyan-100">PROJECTS</a></li>
              <li><a href="#contact" className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 border-b border-transparent hover:border-cyan-100">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Computer Science Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-mono font-bold text-cyan-400 mb-6 tracking-tight animate-pulse">
              Computer
            </h1>
            <h2 className="text-4xl md:text-6xl font-mono font-bold text-purple-400 tracking-wide">
              Science
            </h2>
          </div>
          
          <div className="mb-12">
            <p className="text-lg text-gray-300 font-mono max-w-2xl mx-auto leading-relaxed">
              "Where algorithms meet innovation, and computational theory becomes practical solutions"
            </p>
          </div>
          
          <div className="flex justify-center space-x-16 mb-16">
            <div className="w-28 h-28 border-2 border-cyan-400 rounded-lg flex items-center justify-center transform transition-transform duration-500 hover:scale-110 bg-black bg-opacity-30">
              <span className="text-5xl">🔢</span>
            </div>
            <div className="w-28 h-28 border-2 border-purple-400 rounded-lg flex items-center justify-center transform transition-transform duration-500 hover:scale-110 bg-black bg-opacity-30">
              <span className="text-5xl">💻</span>
            </div>
            <div className="w-28 h-28 border-2 border-pink-400 rounded-lg flex items-center justify-center transform transition-transform duration-500 hover:scale-110 bg-black bg-opacity-30">
              <span className="text-5xl">⚙️</span>
            </div>
          </div>
          
          <div className="border border-cyan-400 p-6 rounded-lg max-w-md mx-auto bg-black bg-opacity-30">
            <p className="text-cyan-300 font-mono text-sm tracking-wide">
              Exploring the foundations of computing, algorithms, and systems design
            </p>
          </div>
        </div>
      </section>

      {/* Computer Science About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono font-bold text-cyan-400 mb-4">Computer Scientist</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-black bg-opacity-30 border border-cyan-400 p-8 rounded-lg">
              <h3 className="font-mono text-cyan-300 text-xl mb-4">Research Focus</h3>
              <p className="font-mono text-gray-300 mb-4">
                I'm a computer scientist specializing in algorithms, data structures, and computational complexity theory.
              </p>
              <p className="font-mono text-gray-300 mb-4">
                My research explores efficient algorithm design, optimization techniques, and theoretical foundations of computing systems.
              </p>
              <p className="font-mono text-gray-300">
                I focus on bridging the gap between theoretical computer science and practical implementation in real-world systems.
              </p>
            </div>
            
            <div className="bg-black bg-opacity-30 border border-purple-400 p-8 rounded-lg">
              <h3 className="font-mono text-purple-300 text-xl mb-4">Technical Expertise</h3>
              <div className="space-y-3 font-mono">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Algorithm Design & Analysis</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Systems Architecture</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Data Structures & Databases</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Machine Learning & AI</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span className="text-gray-300">Computational Theory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Technologies Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono font-bold text-cyan-400 mb-4">Technology Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-40 border border-cyan-400 p-6 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-cyan-900 to-blue-900 mb-4 rounded flex items-center justify-center">
                <span className="text-4xl">🖥️</span>
              </div>
              <h3 className="font-mono text-cyan-300 text-xl mb-2">Generative Canvas</h3>
              <p className="font-mono text-gray-300 text-sm mb-4">
                AI-powered digital painting tool that creates unique artworks based on user input
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-900 text-cyan-300 px-2 py-1 font-mono text-xs border border-cyan-400 rounded">p5.js</span>
                <span className="bg-purple-900 text-purple-300 px-2 py-1 font-mono text-xs border border-purple-400 rounded">TensorFlow</span>
                <span className="bg-pink-900 text-pink-300 px-2 py-1 font-mono text-xs border border-pink-400 rounded">WebGL</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-40 border border-purple-400 p-6 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-indigo-900 mb-4 rounded flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
              <h3 className="font-mono text-purple-300 text-xl mb-2">Interactive Museum</h3>
              <p className="font-mono text-gray-300 text-sm mb-4">
                AR experience that brings classical paintings to life with animated stories
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-900 text-cyan-300 px-2 py-1 font-mono text-xs border border-cyan-400 rounded">AR.js</span>
                <span className="bg-purple-900 text-purple-300 px-2 py-1 font-mono text-xs border border-purple-400 rounded">Three.js</span>
                <span className="bg-pink-900 text-pink-300 px-2 py-1 font-mono text-xs border border-pink-400 rounded">WebXR</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-40 border border-pink-400 p-6 rounded-lg transform transition-all duration-500 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-pink-900 to-rose-900 mb-4 rounded flex items-center justify-center">
                <span className="text-4xl">🎛️</span>
              </div>
              <h3 className="font-mono text-pink-300 text-xl mb-2">Sound Sculptures</h3>
              <p className="font-mono text-gray-300 text-sm mb-4">
                Interactive audio-visual installations that respond to movement and touch
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-900 text-cyan-300 px-2 py-1 font-mono text-xs border border-cyan-400 rounded">Web Audio</span>
                <span className="bg-purple-900 text-purple-300 px-2 py-1 font-mono text-xs border border-purple-400 rounded">React</span>
                <span className="bg-pink-900 text-pink-300 px-2 py-1 font-mono text-xs border border-pink-400 rounded">Socket.IO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Technologies Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-mono font-bold text-cyan-400 mb-4">Connect With Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black bg-opacity-30 border border-cyan-400 p-8 rounded-lg">
              <h3 className="font-mono text-cyan-300 text-xl mb-6">Let's Collaborate</h3>
              <p className="font-mono text-gray-300 mb-6">
                Interested in exploring the intersection of creativity and technology? 
                I'm always excited to work on innovative projects that push boundaries.
              </p>
              <div className="space-y-3 font-mono text-gray-300">
                <p>Email: creative@tech.dev</p>
                <p>GitHub: @creative-tech</p>
                <p>LinkedIn: /in/creative-technologist</p>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-30 border border-purple-400 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block font-mono text-purple-300 text-sm mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 font-mono p-3 rounded focus:border-purple-400 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-purple-300 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 font-mono p-3 rounded focus:border-purple-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-purple-300 text-sm mb-2">Project Idea</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 text-gray-300 font-mono p-3 rounded focus:border-purple-400 focus:outline-none"
                    placeholder="Tell me about your creative technology project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono font-bold py-3 px-6 rounded hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 w-full"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
