import profile from "../assets/profile.jpeg";

function Hero({ name, role }) {
  return (
    <section id="hero" className="hero">

      <div className="hero-left">

        <p className="hero-tag">🚀 Welcome to my portfolio</p>

        <h1 className="hero-title">
          Hi, I'm <span> {name} </span>
        </h1>

        <h2 className="hero-role">
          {role}
        </h2>

        <p className="hero-description">
          I am an Information Technology student passionate about
          building modern web applications using React and exploring
          Artificial Intelligence, Machine Learning, and Data Science.
          I enjoy solving real-world problems through clean,
          efficient, and user-friendly solutions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Download Resume
          </button>

          <button className="secondary-btn">
            Hire Me
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="profile-card">

          <img
            src={profile}
            alt="Profile"
            className="profile-image"
          />

          <h3>{name}</h3>

          <p>{role}</p>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>10+</h2>
            <p>Projects</p>
          </div>

          <div className="stat-card">
            <h2>12+</h2>
            <p>Skills</p>
          </div>

          <div className="stat-card">
            <h2>3rd</h2>
            <p>Year IT</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
