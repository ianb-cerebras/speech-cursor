import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4 font-mono tracking-wider">
            <span className="bg-black px-4 py-2 border-4 border-green-400 rounded-sm">
              🎮 GAME OVER - CONTINUE?
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-black border-4 border-green-400 p-8 rounded-sm">
            <h3 className="text-2xl font-mono text-green-400 mb-6 text-center">PLAYER INFO</h3>
            <p className="text-white font-mono mb-6 text-center">
              🕹️ Ready to start a new game? Let's team up and create something epic!
            </p>
            
            <div className="space-y-4">
              <div className="bg-green-900 border-2 border-green-400 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-mono text-sm">EMAIL:</span>
                  <span className="text-white font-mono text-sm">arcade@dev.com</span>
                </div>
              </div>
              <div className="bg-blue-900 border-2 border-blue-400 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-mono text-sm">GITHUB:</span>
                  <span className="text-white font-mono text-sm">@arcade-dev</span>
                </div>
              </div>
              <div className="bg-yellow-900 border-2 border-yellow-400 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-sm">DISCORD:</span>
                  <span className="text-white font-mono text-sm">ArcadeDev#1234</span>
                </div>
              </div>
              <div className="bg-red-900 border-2 border-red-400 p-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-mono text-sm">TWITTER:</span>
                  <span className="text-white font-mono text-sm">@arcade_dev</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-black border-2 border-green-400 p-4 rounded-sm">
                <div className="text-green-400 font-mono text-sm mb-2">CURRENT STATUS:</div>
                <div className="text-white font-mono text-lg">🟢 ONLINE & READY TO PLAY</div>
              </div>
            </div>
          </div>
          
          <div className="bg-black border-4 border-yellow-400 p-8 rounded-sm">
            <h3 className="text-2xl font-mono text-yellow-400 mb-6 text-center">SEND MESSAGE</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-yellow-400 font-mono text-sm mb-2">
                  PLAYER NAME:
                </label>
                <input 
                  type="text" 
                  className="w-full bg-green-900 border-2 border-green-400 text-white font-mono p-3 rounded-sm focus:border-yellow-400 focus:outline-none"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <label className="block text-yellow-400 font-mono text-sm mb-2">
                  EMAIL ADDRESS:
                </label>
                <input 
                  type="email" 
                  className="w-full bg-green-900 border-2 border-green-400 text-white font-mono p-3 rounded-sm focus:border-yellow-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-yellow-400 font-mono text-sm mb-2">
                  MESSAGE:
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-green-900 border-2 border-green-400 text-white font-mono p-3 rounded-sm focus:border-yellow-400 focus:outline-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-green-400 text-black font-mono font-bold py-3 px-8 border-2 border-white rounded-sm hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  🚀 SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-black border-4 border-green-400 p-6 rounded-sm inline-block">
            <div className="text-green-400 font-mono text-2xl mb-2">🎯 GAME COMPLETE!</div>
            <p className="text-white font-mono mb-4">Thanks for playing! Hope you enjoyed the arcade experience!</p>
            <div className="text-yellow-400 font-mono text-sm">
              FINAL SCORE: 1,000,000 POINTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
