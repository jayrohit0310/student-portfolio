function Skills({ skillList }) {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <ul className="skills-grid">
        {skillList.map((skill) => (
          <li key={skill.name} className="skill-card">
            <span className="skill-icon" role="img" aria-label={skill.name}>
              {skill.icon}
            </span>
            <span className="skill-name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
