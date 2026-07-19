import { useState } from "react";

function Contact({ email }) {

  const [message, setMessage] = useState("");

  const [showHelp, setShowHelp] = useState(false);

  return (
    <section className="contact-page">

      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Feel free to send me a message.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always interested in internships,
            placement opportunities, and exciting
            software development projects.
          </p>

          <p>
            <strong>Email:</strong> {email}
          </p>

          <button
            className="secondary-btn"
            onClick={() => setShowHelp(!showHelp)}
          >
            {showHelp ? "Hide Help" : "Show Help"}
          </button>

          {showHelp && (
            <div className="help-box">
              💡 Enter your message below. The text is
              updated instantly using React's useState().
            </div>
          )}

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <p className="char-count">
            Characters: {message.length}/200
          </p>

          <textarea
            rows="6"
            placeholder="Write something about yourself..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={200}
          ></textarea>

          <button className="primary-btn">
            Send Message
          </button>

          <div className="live-preview">

            <h3>Live Preview</h3>

            <p>
              {message.length > 0
                ? message
                : "Your message will appear here..."}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;