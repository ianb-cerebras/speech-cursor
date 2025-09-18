import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl text-gray-800 mb-8">About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg text-gray-700 mb-4">Background</h3>
            <p className="text-gray-600 mb-4">
              I am a software developer with experience in web development. 
              I work with various technologies and frameworks to create 
              functional applications.
            </p>
            <p className="text-gray-600">
              My focus is on building reliable and maintainable code 
              that meets business requirements.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg text-gray-700 mb-4">Skills</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
              <li>• React</li>
              <li>• Node.js</li>
              <li>• Python</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
