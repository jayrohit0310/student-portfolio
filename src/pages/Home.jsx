import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

function Home({ name, role })  {

  return (

    <main className="home-page">

      {/* Hero Section */}

      <Hero
        name={name}
        role={role}
      />

      {/* About Section */}

      <About />

      {/* Skills Section */}

      <Skills />

      {/* Call To Action */}

      <section className="cta-section">

        <div className="cta-card">

          <h2>

            Let's Build Something Amazing Together 🚀

          </h2>

          <p>

            I'm passionate about creating responsive web
            applications, AI-powered solutions, and scalable
            software. If you're looking for a motivated
            developer for internships, projects, or
            collaborations, let's connect.

          </p>

          <div className="cta-buttons">

            <a href="/contact">

              <button className="primary-btn">

                Contact Me

              </button>

            </a>

            <a href="/projects">

              <button className="secondary-btn">

                View Projects

              </button>

            </a>

          </div>

        </div>

      </section>

    </main>

  );

}

export default Home;