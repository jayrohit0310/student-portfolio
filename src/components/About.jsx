function About() {

  const stats = [
    {
      number: "10+",
      title: "Projects Completed",
    },
    {
      number: "8+",
      title: "Technologies",
    },
    {
      number: "3+",
      title: "Major Certifications",
    },
    {
      number: "100%",
      title: "Dedication",
    },
  ];

  return (
    <section className="about section">

      <div className="section-title">

        <p>Who Am I?</p>

        <h2>About Me</h2>

      </div>

      <div className="about-container">

        <div className="about-left">

          <h3>
            Passionate React Developer &
            <span> AI Enthusiast</span>
          </h3>

          <p>
            Hello! I'm <strong>Jay Rohit</strong>, a third-year
            B.Tech Information Technology student with a passion
            for creating modern web applications and intelligent
            software solutions.
          </p>

          <p>
            I specialize in React.js, JavaScript, Python,
            Machine Learning, and Full Stack Development.
            I enjoy solving real-world problems through
            technology while continuously learning new tools
            and frameworks.
          </p>

          <p>
            My goal is to become a Software Engineer and AI
            Developer, building innovative products that make
            people's lives easier and more efficient.
          </p>

        </div>

        <div className="about-right">

          {stats.map((item, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;