function About() {
  return (
    <section id="about" className="about">

      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-container">

        <div className="about-left">

          <h3>Who am I?</h3>

          <p>
            Hello! I'm <strong>Jay Rohit</strong>, a passionate
            Information Technology student with a strong interest in
            React Development, Artificial Intelligence, Machine
            Learning, and Data Science.
          </p>

          <p>
            I enjoy building responsive web applications, learning new
            technologies, and solving real-world problems through clean
            and efficient code. My goal is to become a skilled Software
            Engineer and contribute to innovative projects.
          </p>

          <button className="primary-btn">
            Download CV
          </button>

        </div>

        <div className="about-right">

          <div className="info-card">
            <h4>🎓 Education</h4>
            <p>B.Tech - Information Technology</p>
            <p>Currently in 3rd Year</p>
          </div>

          <div className="info-card">
            <h4>💡 Strengths</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Quick Learner</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
            </ul>
          </div>

          <div className="info-card">
            <h4>🎯 Career Goal</h4>
            <p>
              To secure a software development role where I can apply
              my skills in React, Full-Stack Development, and AI while
              continuously learning and growing.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
