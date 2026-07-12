import React from 'react';

function Projects() {
  const projectItems = [
    {
      title: "E-Commerce AI Agent",
      desc: "Smart recommendation system built with React and Python.",
      tags: ["React", "Python", "ML"]
    },
    {
      title: "Glassmorphic Dashboard",
      desc: "A beautiful UI dashboard optimized for fast data rendering.",
      tags: ["CSS Grid", "JavaScript"]
    }
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projectItems.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
