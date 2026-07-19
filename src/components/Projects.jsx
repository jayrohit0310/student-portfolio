function Projects({ projectList }) {
  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <h2>My Projects</h2>
        <p>Some of my recent work and academic projects</p>
      </div>

      <div className="projects-container">

        {projectList.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <h1>🚀</h1>
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <span className="project-tech">
                {project.tech}
              </span>

              <p>
                {project.description}
              </p>

              <div className="project-features">

                <span>✔ Responsive UI</span>
                <span>✔ Clean Code</span>
                <span>✔ Modern Design</span>

              </div>

              <div className="project-buttons">

                <button className="primary-btn">
                  View Project
                </button>

                <button className="secondary-btn">
                  GitHub
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      <div className="projects-footer">

        <h3>More exciting projects are coming soon...</h3>

        <p>
          I enjoy building practical applications using
          React, Python, Machine Learning, and Full-Stack
          Development. Every project helps me learn new
          technologies and improve my problem-solving skills.
        </p>

      </div>

    </section>
  );
}

export default Projects;
