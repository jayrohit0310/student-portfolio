import './App.css';
import './index.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Machine Learning", icon: "🤖" }
  ];

  return (
    <>
      <Navbar />
      <Hero name="Jay Rohit" />
      <About />
      <Skills skillList={skills} />
      <Projects />
      <Footer email="jay@example.com" />
    </>
  );
}

export default App;
