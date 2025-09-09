import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 relative overflow-hidden font-sans">
      {/* Minimal boring elements */}
      <div className="absolute top-10 left-6 w-20 h-20 border border-gray-300 opacity-30"></div>
      <div className="absolute bottom-24 right-16 w-28 h-28 border border-gray-400 opacity-20"></div>
      
      <header className="border-b border-gray-300 bg-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-normal text-gray-700 flex items-center">
            Professional Portfolio
          </div>
          <nav>
            <ul className="flex gap-8 text-sm font-normal">
              <li><a href="#work" className="text-gray-600 hover:text-gray-800 transition-all duration-300">Work</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-800 transition-all duration-300">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-gray-800 transition-all duration-300">Services</a></li>
              <li><a href="#experience" className="text-gray-600 hover:text-gray-800 transition-all duration-300">Experience</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800 transition-all duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <section className="mb-28 text-center">
          <h1 className="text-4xl font-normal mb-7 text-gray-800">
            Professional Work
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
            A collection of professional projects and accomplishments
          </p>
          <div className="flex justify-center">
            <a href="#work" className="px-8 py-3 border border-gray-600 text-gray-700 rounded text-lg">
              View Work
            </a>
          </div>
        </section>

        <section id="work" className="mb-28">
          <h2 className="text-3xl font-normal mb-14 text-gray-800 text-center">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded mb-5 flex items-center justify-center">
                <div className="text-gray-400">Project Image</div>
              </div>
              <h3 className="font-normal text-lg mb-2 text-gray-800">Project Title</h3>
              <p className="text-gray-600 text-sm">Project details, 2024</p>
            </div>
            
            {/* Project 2 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded mb-5 flex items-center justify-center">
                <div className="text-gray-400">Project Image</div>
              </div>
              <h3 className="font-normal text-lg mb-2 text-gray-800">Project Title</h3>
              <p className="text-gray-600 text-sm">Project details, 2023</p>
            </div>
            
            {/* Project 3 */}
            <div className="group">
              <div className="h-80 bg-white border border-gray-200 rounded mb-5 flex items-center justify-center">
                <div className="text-gray-400">Project Image</div>
              </div>
              <h3 className="font-normal text-lg mb-2 text-gray-800">Project Title</h3>
              <p className="text-gray-600 text-sm">Project details, 2023</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-28">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-normal mb-8 text-gray-800">
                Professional Background
              </h2>
              <p className="text-lg text-gray-600 mb-7 leading-relaxed">
                I am a professional with experience in my field. 
                I work diligently to achieve results and maintain high standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My approach is methodical and focused on delivering quality outcomes. 
                I believe in continuous improvement and professional development.
              </p>
            </div>
            <div className="md:w-1/2 h-96 bg-white border border-gray-300 rounded flex items-center justify-center">
              <div className="text-gray-400">Professional Image</div>
            </div>
          </div>
        </section>

        <section id="services" className="mb-28">
          <h2 className="text-3xl font-normal mb-14 text-gray-800 text-center">
            Professional Services
          </h2>
          <div className="bg-white border border-gray-300 p-12 rounded max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
              I provide professional services in my area of expertise. 
              My work follows established standards and best practices.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
              My approach is consistent and reliable. 
              I focus on meeting client needs and delivering expected results.
            </p>
            <div className="flex justify-center">
              <div className="px-7 py-4 border border-gray-600 text-gray-700">
                Service Details
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-28">
          <h2 className="text-3xl font-normal mb-14 text-gray-800 text-center">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <article className="bg-white border border-gray-300 p-9 rounded">
              <div className="h-44 bg-gray-100 rounded mb-7 flex items-center justify-center">
                <div className="text-gray-600 font-normal">Experience Details</div>
              </div>
              <h3 className="font-normal text-xl mb-4 text-gray-800">Position Title</h3>
              <p className="text-gray-600 mb-5">
                Company Name, Location
              </p>
              <p className="text-gray-600 text-sm">
                Description of responsibilities and achievements in this position
              </p>
              <div className="mt-5 text-sm text-gray-500">2024</div>
            </article>
            
            <article className="bg-white border border-gray-300 p-9 rounded">
              <div className="h-44 bg-gray-100 rounded mb-7 flex items-center justify-center">
                <div className="text-gray-600 font-normal">Experience Details</div>
              </div>
              <h3 className="font-normal text-xl mb-4 text-gray-800">Position Title</h3>
              <p className="text-gray-600 mb-5">
                Company Name, Location
              </p>
              <p className="text-gray-600 text-sm">
                Description of responsibilities and achievements in this position
              </p>
              <div className="mt-5 text-sm text-gray-500">2023</div>
            </article>
          </div>
        </section>

        <section id="contact" className="mb-28">
          <div className="bg-gray-200 rounded p-14 text-gray-800">
            <h2 className="text-3xl font-normal mb-8 text-center">
              Contact Information
            </h2>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
              For professional inquiries, please use the contact information below.
            </p>
            <div className="flex flex-col items-center">
              <ul className="space-y-5 text-lg mb-12">
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 mr-5"></div>
                  Email: <a href="mailto:professional@example.com" className="underline ml-3">professional@example.com</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 mr-5"></div>
                  LinkedIn: <a href="https://linkedin.com/in/professional" className="underline ml-3">linkedin.com/in/professional</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 mr-5"></div>
                  Phone: <a href="tel:+1234567890" className="underline ml-3">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 mr-5"></div>
                  Website: <a href="https://professional-portfolio.com" className="underline ml-3">professional-portfolio.com</a>
                </li>
              </ul>
              <a href="mailto:professional@example.com" className="px-9 py-4 bg-gray-300 text-gray-800 rounded border border-gray-400">
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-9 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Professional Portfolio
        </div>
      </footer>
    </div>
  );
}
