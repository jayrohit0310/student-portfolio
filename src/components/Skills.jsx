function Skills() {

  const skills = [
    {
      name: "HTML5",
      icon: "🌐",
      level: "95%",
    },
    {
      name: "CSS3",
      icon: "🎨",
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      level: "88%",
    },
    {
      name: "React.js",
      icon: "⚛️",
      level: "85%",
    },
    {
      name: "Python",
      icon: "🐍",
      level: "90%",
    },
    {
      name: "C++",
      icon: "💻",
      level: "82%",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: "80%",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: "80%",
    },
  ];

  return (
    <section className="skills section">

      <div className="section-title">

        <p>Technical Expertise</p>

        <h2>My Skills</h2>

      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <div className="skill-header">

              <span className="skill-icon">
                {skill.icon}
              </span>

              <h3>{skill.name}</h3>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>

            </div>

            <p className="skill-level">
              Proficiency : {skill.level}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;