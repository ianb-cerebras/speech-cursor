import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black border-b-4 border-green-400 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-green-400 font-bold text-2xl tracking-wider font-mono">
            <span className="bg-black px-3 py-2 border-2 border-green-400 rounded-sm">
              🕹️ ARCADE DEV
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-yellow-400 font-mono text-sm">
            <span>HIGH SCORE:</span>
            <span className="bg-black px-2 py-1 border border-yellow-400 rounded-sm">999,999</span>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-2 font-mono text-sm">
            <li><a href="#about" className="text-white hover:text-green-400 transition-colors bg-black px-3 py-2 border-2 border-white hover:border-green-400 rounded-sm hover:bg-green-900">PLAYER</a></li>
            <li><a href="#projects" className="text-white hover:text-green-400 transition-colors bg-black px-3 py-2 border-2 border-white hover:border-green-400 rounded-sm hover:bg-green-900">GAMES</a></li>
            <li><a href="#contact" className="text-white hover:text-green-400 transition-colors bg-black px-3 py-2 border-2 border-white hover:border-green-400 rounded-sm hover:bg-green-900">CONTINUE</a></li>
          </ul>
        </nav>
      </div>
      <div className="h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
    </header>
  );
};

export default Header;
