import { useState } from "react";

function Contact({ email }) {

  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (

    <section className="contact section">

      <div className="section-title">

        <p>Get In Touch</p>

        <h2>Contact Me</h2>

      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Let's Work Together 🚀</h3>

          <p>
            I'm always open to internships, freelance work,
            exciting projects, and collaboration opportunities.
            Feel free to contact me anytime.
          </p>

          <div className="info-card">

            <h4>📧 Email</h4>

            <span>{email}</span>

          </div>

          <div className="info-card">

            <h4>📍 Location</h4>

            <span>Gujarat, India</span>

          </div>

          <div className="info-card">

            <h4>💼 Availability</h4>

            <span>Available for Internship</span>

          </div>

          <button
            className="secondary-btn"
            onClick={() => setShowHelp(!showHelp)}
          >

            {showHelp ? "Hide Help" : "Show Help"}

          </button>

          {showHelp && (

            <div className="help-box">

              Fill in your details and message.
              This form demonstrates React's
              <strong> useState </strong>
              and controlled components.

            </div>

          )}

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <textarea
            rows="6"
            maxLength="250"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <p className="char-count">

            Characters : {message.length}/250

          </p>

          <button className="primary-btn">

            Send Message

          </button>

          <div className="preview-card">

            <h3>Live Preview</h3>

            <p>

              <strong>Name :</strong>

              {name || " -----"}

            </p>

            <p>

              <strong>Email :</strong>

              {userEmail || " -----"}

            </p>

            <p>

              <strong>Message :</strong>

              {message || " Start typing..."}

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;