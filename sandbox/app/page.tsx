import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-hidden font-serif">
      {/* Artistic background texture */}
      <div className="artistic-bg"></div>
      
      {/* Subtle scanlines effect */}
      <div className="scanlines"></div>
      
      {/* Artistic elements */}
      <div className="absolute top-10 left-6 w-20 h-20 art-border opacity-70"></div>
      <div className="absolute bottom-24 right-16 w-28 h-28 art-border-light opacity-60"></div>
      
      <header className="border-b art-border bg-[var(--background)] relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl art-title text-[var(--accent)] flex items-center">
            Personal Portfolio
          </div>
          <nav>
            <ul className="flex gap-8 text-sm art-title">
              <li><a href="#about" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-all duration-300">About</a></li>
              <li><a href="#interests" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-all duration-300">Interests</a></li>
              <li><a href="#gallery" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-all duration-300">Gallery</a></li>
              <li><a href="#journey" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-all duration-300">Journey</a></li>
              <li><a href="#connect" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-all duration-300">Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <section className="mb-28 text-center">
          <h1 className="text-4xl art-title mb-7 text-[var(--accent)]">
            Ian Baime
          </h1>
          <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto mb-14 art-subtitle">
            Creative technologist, retro enthusiast, and lifelong learner
          </p>
          <div className="flex justify-center">
            <a href="#about" className="px-8 py-3 art-border text-[var(--tertiary)] rounded font-serif hover:bg-[var(--tertiary)] hover:text-[var(--background)] transition-all duration-300">
              Discover My Story
            </a>
          </div>
        </section>

        <section id="about" className="mb-28">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl art-title mb-8 text-[var(--accent)] brush-stroke">
                About Me
              </h2>
              <p className="text-lg text-[var(--foreground)] mb-7 leading-relaxed">
                I'm a creative developer with a passion for blending modern technology with nostalgic aesthetics. 
                My journey began in the early days of computing when the magic of code first captivated me.
              </p>
              <p className="text-lg text-[var(--foreground)] leading-relaxed">
                I believe in crafting digital experiences that are both functional and emotionally resonant. 
                When I'm not coding, you can find me exploring vintage electronics, collecting retro games, 
                or experimenting with new creative projects.
              </p>
            </div>
            <div className="md:w-1/2 h-96 art-border flex items-center justify-center">
              <div className="text-[var(--secondary)]">Personal Image</div>
            </div>
          </div>
        </section>

        <section id="interests" className="mb-28">
          <h2 className="text-3xl art-title mb-14 text-[var(--accent)] text-center brush-stroke">
            Personal Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Interest 1 */}
            <div className="gallery-item">
              <div className="h-64 bg-[var(--background)] art-border mb-5 flex items-center justify-center">
                <div className="text-[var(--secondary)]">Retro Computing</div>
              </div>
              <h3 className="art-title text-lg mb-2 text-[var(--tertiary)]">Retro Computing</h3>
              <p className="text-[var(--foreground)] text-sm">
                Exploring vintage hardware and software from the golden age of computing
              </p>
            </div>
            
            {/* Interest 2 */}
            <div className="gallery-item">
              <div className="h-64 bg-[var(--background)] art-border mb-5 flex items-center justify-center">
                <div className="text-[var(--secondary)]">Creative Coding</div>
              </div>
              <h3 className="art-title text-lg mb-2 text-[var(--tertiary)]">Creative Coding</h3>
              <p className="text-[var(--foreground)] text-sm">
                Using code as a medium for artistic expression and creative exploration
              </p>
            </div>
            
            {/* Interest 3 */}
            <div className="gallery-item">
              <div className="h-64 bg-[var(--background)] art-border mb-5 flex items-center justify-center">
                <div className="text-[var(--secondary)]">Digital Art</div>
              </div>
              <h3 className="art-title text-lg mb-2 text-[var(--tertiary)]">Digital Art</h3>
              <p className="text-[var(--foreground)] text-sm">
                Creating and appreciating digital artwork that bridges art and technology
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="mb-28">
          <h2 className="text-3xl art-title mb-14 text-[var(--accent)] text-center brush-stroke">
            Personal Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="gallery-item">
              <div className="h-48 art-border bg-[var(--background)] flex items-center justify-center">
                <div className="text-[var(--secondary)]">Memory 1</div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="h-48 art-border bg-[var(--background)] flex items-center justify-center">
                <div className="text-[var(--secondary)]">Memory 2</div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="h-48 art-border bg-[var(--background)] flex items-center justify-center">
                <div className="text-[var(--secondary)]">Memory 3</div>
              </div>
            </div>
            <div className="gallery-item">
              <div className="h-48 art-border bg-[var(--background)] flex items-center justify-center">
                <div className="text-[var(--secondary)]">Memory 4</div>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="mb-28">
          <h2 className="text-3xl art-title mb-14 text-[var(--accent)] text-center brush-stroke">
            My Journey
          </h2>
          <div className="bg-[var(--background)] art-border p-12 max-w-3xl mx-auto">
            <p className="text-lg text-[var(--foreground)] mb-8 leading-relaxed text-center">
              From tinkering with my first computer to creating digital experiences today, 
              my path has been driven by curiosity and a love for both technology and aesthetics.
            </p>
            <p className="text-lg text-[var(--foreground)] mb-8 leading-relaxed text-center">
              I've always been fascinated by how technology can evoke emotion and create connections. 
              My work reflects this intersection of the technical and the personal.
            </p>
            <div className="flex justify-center">
              <div className="px-7 py-4 art-border-light text-[var(--tertiary)]">
                Ongoing Exploration
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="mb-28">
          <div className="bg-[var(--secondary)] art-border rounded p-14 text-[var(--background)]">
            <h2 className="text-3xl art-title mb-8 text-center brush-stroke">
              Let's Connect
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
              I'd love to hear about your projects, share ideas, or just chat about our shared interests.
            </p>
            <div className="flex flex-col items-center">
              <ul className="space-y-5 text-lg mb-12">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[var(--tertiary)] mr-5"></div>
                  Email: <a href="mailto:ian@example.com" className="underline ml-3 hover:text-[var(--accent)]">ian@example.com</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[var(--tertiary)] mr-5"></div>
                  LinkedIn: <a href="https://linkedin.com/in/ianbaime" className="underline ml-3 hover:text-[var(--accent)]">linkedin.com/in/ianbaime</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[var(--tertiary)] mr-5"></div>
                  Twitter: <a href="https://twitter.com/ianbaime" className="underline ml-3 hover:text-[var(--accent)]">@ianbaime</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-[var(--tertiary)] mr-5"></div>
                  Website: <a href="https://ianbaime.com" className="underline ml-3 hover:text-[var(--accent)]">ianbaime.com</a>
                </li>
              </ul>
              <a href="mailto:ian@example.com" className="px-9 py-4 art-border text-[var(--background)] bg-[var(--accent)] hover:bg-[var(--tertiary)] hover:text-[var(--accent)] transition-all duration-300">
                Send a Message
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t art-border bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6 py-9 text-center text-[var(--secondary)] text-sm art-title">
          © {new Date().getFullYear()} Ian Baime - Personal Portfolio
        </div>
      </footer>
    </div>
  );
}
