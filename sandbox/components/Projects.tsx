import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "PAC-MAN CLONE",
      description: "Classic maze game with modern web technologies",
      tech: ["JavaScript", "Canvas", "Web Audio"],
      color: "from-yellow-400 to-yellow-600",
      icon: "👻",
      score: "HIGH SCORE: 50,000"
    },
    {
      title: "SPACE INVADERS",
      description: "Defend Earth from alien invasion in this retro shooter",
      tech: ["React", "CSS3", "Game Loop"],
      color: "from-green-400 to-green-600",
      icon: "🚀",
      score: "HIGH SCORE: 25,000"
    },
    {
      title: "TETRIS BLOCK",
      description: "The legendary falling blocks puzzle game",
      tech: ["Next.js", "TypeScript", "Canvas"],
      color: "from-blue-400 to-blue-600",
      icon: "🧩",
      score: "HIGH SCORE: 100,000"
    },
    {
      title: "ARCADE DASH",
      description: "Endless runner with retro pixel art and chiptune music",
      tech: ["Vue.js", "WebGL", "Audio API"],
      color: "from-red-400 to-red-600",
      icon: "🏃",
      score: "HIGH SCORE: 75,000"
    },
    {
      title: "PONG REBORN",
      description: "The original video game reimagined for the web",
      tech: ["HTML5", "CSS3", "JavaScript"],
      color: "from-purple-400 to-purple-600",
      icon: "🏓",
      score: "HIGH SCORE: 15,000"
    },
    {
      title: "BREAKOUT BRICKS",
      description: "Smash bricks with your paddle in this classic arcade game",
      tech: ["React", "Canvas", "Physics"],
      color: "from-pink-400 to-pink-600",
      icon: "🧱",
      score: "HIGH SCORE: 30,000"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono tracking-wider">
            <span className="bg-black px-4 py-2 border-4 border-green-400 rounded-sm">
              🎮 GAME LIBRARY
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br ${project.color} border-4 border-white p-4 rounded-sm transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:border-yellow-400`}>
                <div className="bg-black bg-opacity-80 p-4 rounded-sm">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{project.icon}</div>
                    <h3 className="text-xl font-mono text-white mb-2 font-bold">
                      {project.title}
                    </h3>
                    <div className="text-green-400 font-mono text-xs mb-2">
                      {project.score}
                    </div>
                  </div>
                  
                  <p className="text-white font-mono text-sm mb-4 text-center">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white text-black px-2 py-1 font-mono text-xs border border-gray-400 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-green-400 text-black font-mono font-bold px-4 py-2 border-2 border-white rounded-sm hover:bg-yellow-400 transition-colors">
                      PLAY NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -left-1 w-full h-full bg-gradient-to-br from-yellow-400 to-red-400 border-4 border-white rounded-sm -z-10"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-black border-4 border-green-400 p-6 rounded-sm inline-block">
            <h3 className="text-2xl font-mono text-green-400 mb-4">🎯 MORE GAMES COMING SOON!</h3>
            <p className="text-white font-mono">New levels and challenges being developed...</p>
            <div className="mt-4 text-yellow-400 font-mono text-sm">
              TOTAL HIGH SCORE: 295,000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
