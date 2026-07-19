function Footer({ name, email }) {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>{name}</h2>

          <p>
            Thank you for visiting my portfolio.
            I am always excited to learn new technologies,
            collaborate on interesting projects, and
            build innovative web applications.
          </p>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 {email}</p>

          <p>📍 Gujarat, India</p>

          <p>📱 Available for Internship & Placement</p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>

        </div>

        <div className="footer-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">

            <a href="#">💼 LinkedIn</a>

            <a href="#">🐱 GitHub</a>

            <a href="#">📷 Instagram</a>

            <a href="#">✉️ Email</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 {name}. All Rights Reserved.
        </p>

        <p>
          Built with ❤️ using React & Vite
        </p>

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑ Back to Top
        </button>

      </div>

    </footer>
  );
}

export default Footer;
