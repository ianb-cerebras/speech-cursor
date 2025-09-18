import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-200 border-b border-gray-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-gray-700 text-lg">
          Portfolio
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
