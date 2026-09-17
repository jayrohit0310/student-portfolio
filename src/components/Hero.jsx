import profile from "../assets/profile.jpeg";

function Hero({ name, role }) {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-subtitle">
          👋 Welcome to My Portfolio
        </p>

        <h1>
          Hi, I'm <br />

          <span>{name}</span>
        </h1>

        <h2>{role}</h2>

        <p className="hero-description">
          Passionate Software Developer with a strong interest in
          React.js, Artificial Intelligence, Machine Learning,
          and Full Stack Development. I enjoy building
          modern, scalable, and user-friendly applications
          that solve real-world problems.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Hire Me
          </button>

          <button className="secondary-btn">
            View Projects
          </button>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="mailto:jayrohit@example.com"
          >
            <i className="fas fa-envelope"></i>
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="image-circle">

          <img
            src={profile}
            alt="Jay Rohit"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;