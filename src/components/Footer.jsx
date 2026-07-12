import React from 'react';

function Footer({ email }) {
  return (
    <footer id="contact">
      <div className="footer-glass">
        <p>Let's collaborate on your next big concept!</p>
        <a href={`mailto:${email}`} className="contact-btn">Get In Touch</a>
        <p className="copyright">© {new Date().getFullYear()} Jay Rohit. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
