import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Web Application",
      description: "A basic web application built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management System",
      description: "Simple task management application with user authentication",
      tech: ["JavaScript", "Express", "MySQL"]
    },
    {
      title: "Data Visualization Tool",
      description: "Basic data visualization using charts and graphs",
      tech: ["Python", "Django", "Chart.js"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl text-gray-800 mb-8">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
