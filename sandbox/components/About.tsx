import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 px-4 mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono tracking-wider">
            <span className="bg-black px-4 py-2 border-4 border-green-400 rounded-sm">
              PLAYER PROFILE
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="bg-black border-4 border-green-400 p-6 rounded-sm">
            <h3 className="text-2xl font-mono text-green-400 mb-4 text-center">CHARACTER STATS</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">LEVEL:</span>
                <span className="text-white bg-green-900 px-2 py-1 border border-green-400 rounded-sm">99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">EXPERIENCE:</span>
                <span className="text-white bg-green-900 px-2 py-1 border border-green-400 rounded-sm">MAX</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">CODING:</span>
                <span className="text-white bg-green-900 px-2 py-1 border border-green-400 rounded-sm">★★★★★</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">DESIGN:</span>
                <span className="text-white bg-green-900 px-2 py-1 border border-green-400 rounded-sm">★★★★★</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400">CREATIVITY:</span>
                <span className="text-white bg-green-900 px-2 py-1 border border-green-400 rounded-sm">★★★★★</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black border-4 border-yellow-400 p-6 rounded-sm">
            <h3 className="text-2xl font-mono text-yellow-400 mb-4 text-center">PLAYER BIO</h3>
            <p className="text-lg mb-4 font-mono text-center">
              🎮 Welcome to the arcade! I'm a developer who grew up in the golden age of gaming.
            </p>
            <p className="text-lg mb-4 font-mono text-center">
              🕹️ I create digital experiences that capture the magic of classic arcade games 
              while using cutting-edge web technologies.
            </p>
            <p className="text-lg font-mono text-center">
              ⚡ Ready to level up your project? Let's play!
            </p>
          </div>
          
          <div className="bg-black border-4 border-red-400 p-6 rounded-sm">
            <h3 className="text-2xl font-mono text-red-400 mb-4 text-center">POWER-UPS</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-900 border-2 border-green-400 p-2 rounded-sm text-center">
                <div className="text-green-400 font-mono text-xs">HTML5</div>
              </div>
              <div className="bg-blue-900 border-2 border-blue-400 p-2 rounded-sm text-center">
                <div className="text-blue-400 font-mono text-xs">CSS3</div>
              </div>
              <div className="bg-yellow-900 border-2 border-yellow-400 p-2 rounded-sm text-center">
                <div className="text-yellow-400 font-mono text-xs">JS</div>
              </div>
              <div className="bg-purple-900 border-2 border-purple-400 p-2 rounded-sm text-center">
                <div className="text-purple-400 font-mono text-xs">REACT</div>
              </div>
              <div className="bg-pink-900 border-2 border-pink-400 p-2 rounded-sm text-center">
                <div className="text-pink-400 font-mono text-xs">NODE</div>
              </div>
              <div className="bg-red-900 border-2 border-red-400 p-2 rounded-sm text-center">
                <div className="text-red-400 font-mono text-xs">PYTHON</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-black border-4 border-green-400 p-6 rounded-sm inline-block">
            <div className="text-green-400 font-mono text-2xl mb-2">🎯 MISSION OBJECTIVE</div>
            <p className="text-white font-mono">Create amazing digital experiences that bring back the joy of classic gaming!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
