function Header({ name, role, themeColor }) {
  return (
    <header
      id="home"
      className="header"
      style={{
        background: `linear-gradient(135deg, ${themeColor}, #8B5CF6)`,
      }}
    >
      <div className="header-container">

        <div className="header-content">

          <p className="welcome-text">
            👋 Welcome to My Portfolio
          </p>

          <h1 className="header-title">
            {name}
          </h1>

          <h3 className="header-role">
            {role}
          </h3>

          <p className="header-description">
            Passionate about creating responsive web applications,
            solving real-world problems, and continuously learning
            modern technologies like React, Machine Learning,
            Artificial Intelligence, and Full-Stack Development.
          </p>

          <div className="header-buttons">
            <button className="primary-btn">
              View Portfolio
            </button>

            <button className="secondary-btn">
              Contact Me
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;
