import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 text-gray-800 relative overflow-hidden">
      {/* Sporty athletic elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-orange-500 opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 transform rotate-45 bg-green-400 opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-32 h-32 rounded-full bg-blue-300 opacity-25"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 transform rotate-12 bg-orange-400 opacity-20"></div>
      
      <header className="border-b border-green-400 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="font-mono text-2xl font-bold text-green-900 flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-ping"></div>
            Athlete Portfolio
          </div>
          <nav>
            <ul className="flex gap-8 font-mono text-lg">
              <li><a href="#about" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">About</a></li>
              <li><a href="#journey" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Journey</a></li>
              <li><a href="#training" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Training</a></li>
              <li><a href="#achievements" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Achievements</a></li>
              <li><a href="#mindset" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Mindset</a></li>
              <li><a href="#social" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Social</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-all duration-300 border-b-2 border-transparent hover:border-orange-400">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <section className="mb-24 text-center">
          <div className="inline-block mb-6">
            {/* Trophy icon */}
            <svg width="80" height="80" viewBox="0 0 100 100" className="text-orange-500">
              <path d="M80 20H20c-5.5 0-10 4.5-10 10v10c0 5.5 4.5 10 10 10h10v30c0 5.5 4.5 10 10 10h20c5.5 0 10-4.5 10-10V50h10c5.5 0 10-4.5 10-10V30c0-5.5-4.5-10-10-10z" fill="currentColor" className="opacity-80"/>
              <circle cx="50" cy="15" r="8" fill="currentColor" className="opacity-80"/>
              <rect x="45" y="5" width="10" height="10" fill="currentColor" className="opacity-80"/>
            </svg>
          </div>
          <h1 className="text-6xl font-mono font-bold mb-6 text-green-900 leading-tight">
            Athlete Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light italic mb-10">
            Personal Journey & Athletic Pursuits — pushing boundaries through dedication
          </p>
          <div className="flex justify-center gap-6">
            <a href="#journey" className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-mono font-bold text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              My Athletic Journey
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-green-900 text-green-900 rounded-lg hover:bg-green-900 hover:text-white transition-all duration-300 font-mono font-bold text-lg flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Connect With Me
            </a>
          </div>
        </section>

        <section id="about" className="mb-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-mono font-bold mb-6 text-green-900 flex items-center">
                <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                About Me
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
                I'm a dedicated athlete committed to excellence in my sport. My journey is defined by 
                continuous improvement, discipline, and the pursuit of peak performance.
              </p>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Through rigorous training, strategic competition planning, and mental fortitude, 
                I push my limits every day to achieve greatness in my athletic endeavors.
              </p>
            </div>
          </div>
        </section>

        <section id="journey" className="mb-24">
          <h2 className="text-4xl font-mono font-bold mb-12 text-green-900 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            My Athletic Journey
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              Athletic paths aren't always straightforward, and that's perfectly okay. I'm currently navigating my own journey in the sports world, 
              understanding that meaningful progress and breakthrough moments take time to develop.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              While I work toward my next competition and personal goals, I'm staying committed to my training regimen, sharing insights on social media, and continuing to 
              challenge myself every day. The process itself is part of the growth.
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-mono font-bold">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Growth through struggle
              </div>
            </div>
          </div>
        </section>

        <section id="training" className="mb-24">
          <h2 className="text-4xl font-mono font-bold mb-12 text-green-900 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Training Philosophy
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              I believe in structured, progressive training that challenges both my physical and mental limits. 
              Whether it's strength work, conditioning, or skill development, every session has a purpose.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              My approach combines scientific training principles with intuitive listening to my body. 
              Recovery is just as important as the workout itself, and nutrition fuels my performance.
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-mono font-bold">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Train with intention
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="mb-24">
          <h2 className="text-4xl font-mono font-bold mb-12 text-green-900 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Achievements & Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400 rounded-full -mr-16 -mt-16 opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500 rounded-full -ml-12 -mb-12 opacity-10"></div>
              <div className="h-48 bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-white font-mono text-2xl font-bold relative z-10">Personal Records</div>
                {/* Medal icon */}
                <svg className="absolute bottom-0 right-0 w-24 h-24 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-mono text-2xl font-bold mb-3 text-gray-800">Current Achievements</h3>
              <p className="text-gray-600 mb-6 font-light">
                A showcase of my personal bests, competition results, and milestones reached in my athletic journey.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-2 bg-green-900 text-white rounded-lg text-sm font-medium hover:bg-orange-500 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Records
                </a>
              </div>
            </article>
            
            <article className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-orange-400 rounded-full -ml-16 -mt-16 opacity-10"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-500 rounded-full -mr-12 -mb-12 opacity-10"></div>
              <div className="h-48 bg-gradient-to-r from-orange-400 via-green-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-white font-mono text-2xl font-bold relative z-10">Future Goals</div>
                {/* Target icon */}
                <svg className="absolute top-0 left-0 w-24 h-24 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 8z"/>
                </svg>
              </div>
              <h3 className="font-mono text-2xl font-bold mb-3 text-gray-800">Aspirations</h3>
              <p className="text-gray-600 mb-6 font-light">
                My upcoming competitions, performance targets, and long-term athletic ambitions that drive my daily training.
              </p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-2 bg-green-900 text-white rounded-lg text-sm font-medium hover:bg-orange-500 transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Goals
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="mindset" className="mb-24">
          <h2 className="text-4xl font-mono font-bold mb-12 text-green-900 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            Athlete Mindset
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              People often describe me as determined and resilient - someone who faces challenges head-on and learns from every setback. 
              I believe in the power of mental strength and maintaining a growth-oriented perspective.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
              Whether it's through visualization techniques, goal setting, or simply pushing through discomfort during training, 
              I strive to develop both my physical capabilities and mental fortitude.
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg font-mono font-bold">
                <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                Mind over matter
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="mb-24">
          <h2 className="text-4xl font-mono font-bold mb-12 text-green-900 text-center flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c.552 0 1-.672 1-1.5V6a1 1 0 00-1-1h-4.014a1 1 0 00-.91.593l-1.98 4A1 1 0 0112 10H9a1 1 0 00-1 1v4a1 1 0 001 1h1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 16v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1zM3 21h18" />
            </svg>
            Social Presence
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed text-center">
              I'm actively sharing training insights, competition experiences, and mindset strategies on social media.
            </p>
            <div className="flex justify-center">
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-mono font-bold hover:bg-blue-600 transition-colors flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c.552 0 1-.672 1-1.5V6a1 1 0 00-1-1h-4.014a1 1 0 00-.91.593l-1.98 4A1 1 0 0112 10H9a1 1 0 00-1 1v4a1 1 0 001 1h1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 16v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1zM3 21h18" />
                </svg>
                Follow My Journey
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-24">
          <div className="bg-gradient-to-br from-green-900 to-blue-800 rounded-xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="grid grid-cols-4 gap-8">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border border-white rounded-full w-16 h-16"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-mono font-bold mb-6 text-center flex items-center justify-center">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Connect With Me
              </h2>
              <p className="text-xl text-center mb-10 max-w-2xl mx-auto font-light">
                Interested in my athletic journey or training philosophy? Let's connect and share experiences.
              </p>
              <div className="flex flex-col items-center">
                <ul className="space-y-4 text-lg mb-8 font-mono">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email: <a href="mailto:example@example.com" className="underline hover:no-underline ml-2">athlete@example.com</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.48 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.48-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    GitHub: <a href="https://github.com/username" className="underline hover:no-underline ml-2">github.com/athlete-portfolio</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c.552 0 1-.672 1-1.5V6a1 1 0 00-1-1h-4.014a1 1 0 00-.91.593l-1.98 4A1 1 0 0112 10H9a1 1 0 00-1 1v4a1 1 0 001 1h1" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 16v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1zM3 21h18" />
                    </svg>
                    Discord: <a href="#" className="underline hover:no-underline ml-2">Training Community</a>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    LinkedIn: <a href="https://www.linkedin.com/in/username" className="underline hover:no-underline ml-2">linkedin.com/in/athlete-profile</a>
                  </li>
                </ul>
                <a href="mailto:example@example.com" className="px-8 py-4 bg-orange-500 text-green-900 rounded-lg font-mono font-bold hover:bg-white transition-colors duration-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  Reach Out
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-200 bg-white/50 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600 font-mono italic">
          © {new Date().getFullYear()} Athlete Portfolio — Personal journey and athletic pursuits
          <div className="mt-2">
            Follow my journey: <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">@athletehandle</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
