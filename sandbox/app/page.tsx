import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative overflow-hidden font-sans">
      {/* Artsy design elements */}
      <div className="absolute top-12 left-8 w-24 h-24 border-2 border-gray-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-12 w-32 h-32 border-2 border-gray-400 transform rotate-45 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-indigo-100 rounded opacity-50"></div>
      
      <header className="border-b border-gray-200 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-light text-indigo-900 flex items-center tracking-wide">
            CREATIVE PORTFOLIO
          </div>
          <nav>
            <ul className="flex gap-8 text-sm font-medium">
              <li><a href="#work" className="text-gray-600 hover:text-indigo-800 transition-all duration-300">Work</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-indigo-800 transition-all duration-300">About</a></li>
              <li><a href="#approach" className="text-gray-600 hover:text-indigo-800 transition-all duration-300">Approach</a></li>
              <li><a href="#recognition" className="text-gray-600 hover:text-indigo-800 transition-all duration-300">Recognition</a></li>
              <li><a href="#connect" className="text-gray-600 hover:text-indigo-800 transition-all duration-300">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <section className="mb-28 text-center">
          <h1 className="text-4xl font-light mb-7 text-gray-900 tracking-wide">
            Creative Vision
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light mb-14">
            A collection of artistic explorations and creative expressions
          </p>
          <div className="flex justify-center">
            <a href="#work" className="px-8 py-3 border border-gray-800 text-gray-800 rounded font-medium text-lg hover:bg-gray-800 hover:text-white transition-all duration-300">
              View Portfolio
            </a>
          </div>
        </section>

        <section id="work" className="mb-28">
          <h2 className="text-3xl font-light mb-14 text-gray-900 text-center">
            Selected Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Art piece 1 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded-lg mb-5 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                <div className="text-indigo-300 text-7xl font-light">●</div>
              </div>
              <h3 className="font-medium text-lg mb-2 text-gray-900">Abstract Composition</h3>
              <p className="text-gray-500 text-sm">Digital Art, 2024</p>
            </div>
            
            {/* Art piece 2 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded-lg mb-5 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                <div className="text-indigo-300 text-7xl font-light">▲</div>
              </div>
              <h3 className="font-medium text-lg mb-2 text-gray-900">Geometric Forms</h3>
              <p className="text-gray-500 text-sm">Mixed Media, 2023</p>
            </div>
            
            {/* Art piece 3 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded-lg mb-5 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg">
                <div className="text-indigo-300 text-7xl font-light">■</div>
              </div>
              <h3 className="font-medium text-lg mb-2 text-gray-900">Minimal Landscapes</h3>
              <p className="text-gray-500 text-sm">Oil on Canvas, 2023</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-28">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-light mb-8 text-gray-900">
                Creative Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-7 leading-relaxed">
                My work explores the intersection of form, color, and emotion through a contemporary lens. 
                I believe in the power of visual storytelling to convey complex ideas and evoke profound feelings.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Drawing inspiration from modern design principles and natural elements, 
                I create visual experiences that invite contemplation, connection, and aesthetic appreciation.
              </p>
            </div>
            <div className="md:w-1/3 h-96 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-indigo-400 text-8xl font-light">★</div>
            </div>
          </div>
        </section>

        <section id="approach" className="mb-28">
          <h2 className="text-3xl font-light mb-14 text-gray-900 text-center">
            Creative Process
          </h2>
          <div className="bg-white border border-gray-200 p-12 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
              Each project begins with deep observation and thoughtful reflection. I work across multiple mediums,
              allowing each discipline to inform the others in unexpected and exciting ways.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
              My approach emphasizes experimentation and authenticity. I seek to distill complex concepts into their purest visual forms,
              creating work that resonates on both intellectual and emotional levels.
            </p>
            <div className="flex justify-center">
              <div className="px-7 py-4 border border-gray-800 text-gray-800 rounded font-medium">
                Artistic Methodology
              </div>
            </div>
          </div>
        </section>

        <section id="recognition" className="mb-28">
          <h2 className="text-3xl font-light mb-14 text-gray-900 text-center">
            Recognition & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white border border-gray-200 p-9 rounded-lg">
              <div className="h-44 bg-gray-100 rounded-lg mb-7 flex items-center justify-center">
                <div className="text-gray-500 font-medium text-xl">Gallery Exhibition</div>
              </div>
              <h3 className="font-medium text-xl mb-4 text-gray-900">Featured Artist</h3>
              <p className="text-gray-600 mb-5">
                Contemporary Art Gallery, New York
              </p>
              <p className="text-gray-500 text-sm">
                Selected works displayed in group exhibition exploring modern minimalism
              </p>
              <div className="mt-5 text-sm text-gray-500">2024</div>
            </article>
            
            <article className="bg-white border border-gray-200 p-9 rounded-lg">
              <div className="h-44 bg-gray-100 rounded-lg mb-7 flex items-center justify-center">
                <div className="text-gray-500 font-medium text-xl">Creative Residency</div>
              </div>
              <h3 className="font-medium text-xl mb-4 text-gray-900">Artist Fellowship</h3>
              <p className="text-gray-600 mb-5">
                International Arts Foundation
              </p>
              <p className="text-gray-500 text-sm">
                Six-month residency focused on experimental compositions and cross-disciplinary collaboration
              </p>
              <div className="mt-5 text-sm text-gray-500">2023</div>
            </article>
          </div>
        </section>

        <section id="connect" className="mb-28">
          <div className="bg-indigo-900 rounded-lg p-14 text-white">
            <h2 className="text-3xl font-light mb-8 text-center">
              Let's Collaborate
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto font-light">
              Interested in my creative approach or potential projects? I'd love to connect and explore possibilities.
            </p>
            <div className="flex flex-col items-center">
              <ul className="space-y-5 text-lg mb-12">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 mr-5 rounded-full"></div>
                  Email: <a href="mailto:creative@example.com" className="underline hover:no-underline ml-3">creative@example.com</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 mr-5 rounded-full"></div>
                  Instagram: <a href="https://instagram.com/creative" className="underline hover:no-underline ml-3">@creativeportfolio</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 mr-5 rounded-full"></div>
                  Behance: <a href="https://behance.net/creative" className="underline hover:no-underline ml-3">creative-works</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-indigo-600 mr-5 rounded-full"></div>
                  LinkedIn: <a href="https://linkedin.com/in/creative" className="underline hover:no-underline ml-3">creative-professional</a>
                </li>
              </ul>
              <a href="mailto:creative@example.com" className="px-9 py-4 bg-white text-indigo-900 rounded font-medium border border-white hover:bg-transparent hover:text-white transition-all duration-300">
                Send Message
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-9 text-center text-gray-600 font-light text-sm">
          © {new Date().getFullYear()} Creative Portfolio — All works copyright protected
        </div>
      </footer>
    </div>
  );
}
