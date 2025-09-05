import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 bg-black">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-green-400 font-mono tracking-wider mb-4">
              <span className="bg-black px-6 py-4 border-4 border-green-400 rounded-sm inline-block">
                🕹️ ARCADE
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 font-mono tracking-wider">
              <span className="bg-black px-6 py-4 border-4 border-yellow-400 rounded-sm inline-block">
                DEVELOPER
              </span>
            </h2>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl text-white font-mono mb-6">
              Welcome to the Arcade! 🎮
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 border-4 border-white rounded-sm flex items-center justify-center">
                <span className="text-2xl">👾</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 border-4 border-white rounded-sm flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 border-4 border-white rounded-sm flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black border-4 border-green-400 p-6 rounded-sm inline-block">
            <p className="text-green-400 font-mono text-lg">
              Press START to explore my game collection!
            </p>
          </div>
          
          <div className="mt-8">
            <div className="bg-black border-2 border-yellow-400 p-4 rounded-sm inline-block">
              <div className="text-yellow-400 font-mono text-sm">HIGH SCORE: 999,999</div>
              <div className="text-white font-mono text-xs">COINS: 50</div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
