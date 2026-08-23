function Footer() {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">

          <h2>

            <span>J</span>ay<span>R</span>ohit

          </h2>

          <p>

            Passionate Software Developer focused on
            building modern, responsive and user-friendly
            web applications using React, JavaScript,
            Python and Machine Learning.

          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/projects">Projects</a>

          <a href="/contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <a
            href="https://github.com/jayrohit0310"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:jayrohit@example.com"
          >
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © {currentYear} Jay Rohit.

          Built with ❤️ using React & Vite.

        </p>

      </div>

    </footer>

  );

}

export default Footer;