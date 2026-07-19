import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

function Home({ user, skills }) {
  return (
    <main className="home-page">

      {/* Header Section */}
      <Header
        name={user.name}
        role={user.role}
        themeColor={user.themeColor}
      />

      {/* Hero Section */}
      <Hero
        name={user.name}
        role={user.role}
      />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills
        skillList={skills}
      />

      {/* Optional Banner */}
      <section className="home-banner">

        <h2>Ready to Build Amazing Projects?</h2>

        <p>
          I enjoy creating modern web applications using
          React, JavaScript, Python, and Machine Learning.
          I'm continuously improving my skills through
          projects and real-world practice.
        </p>

      </section>

    </main>
  );
}

export default Home;