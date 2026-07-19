function Skills({ skillList }) {
  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>My Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-container">

        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-header">
              <h3>{skill}</h3>
              <span>
                {90 - index * 3 > 60 ? 90 - index * 3 : 65}%
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${
                    90 - index * 3 > 60
                      ? 90 - index * 3
                      : 65
                  }%`,
                }}
              ></div>
            </div>

            <p className="skill-description">
              Experienced in building modern, responsive, and
              user-friendly applications using {skill}. Continuously
              improving through projects and practical development.
            </p>

          </div>
        ))}

      </div>

      <div className="skills-summary">

        <div className="summary-card">
          <h2>10+</h2>
          <p>Technologies</p>
        </div>

        <div className="summary-card">
          <h2>3+</h2>
          <p>Major Projects</p>
        </div>

        <div className="summary-card">
          <h2>100%</h2>
          <p>Learning Passion</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;
