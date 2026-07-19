import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

  // Theme Toggle (Required useState)
  const [darkMode, setDarkMode] = useState(true);

  // Portfolio Data
  const user = {
    name: "Jay Rohit",
    role: "React Developer | AI & ML Enthusiast",
    email: "jayrohit@example.com",
    themeColor: "#6366F1",
  };

  // Skills
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Python",
    "C++",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub",
  ];

  // Projects
  const projects = [
    {
      title: "Secure Digital Voting System",
      tech: "React • Flask • SQLite",
      description:
        "Secure online voting system with face authentication and OTP verification.",
    },
    {
      title: "AI Resume Analyzer",
      tech: "Python • Machine Learning",
      description:
        "Resume analyzer that provides ATS score and skill recommendations.",
    },
    {
      title: "Portfolio Website",
      tech: "React • Vite • CSS",
      description:
        "Modern responsive portfolio using reusable React components.",
    },
    {
      title: "E-Commerce Website",
      tech: "React • Node • MongoDB",
      description:
        "Responsive shopping platform with authentication and cart system.",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Routes */}
      <Routes>

        <Route
          path="/"
          element={
            <Home
              user={user}
              skills={skills}
            />
          }
        />

        <Route
          path="/projects"
          element={
            <Projects
              projectList={projects}
            />
          }
        />

        <Route
          path="/contact"
          element={
            <Contact
              email={user.email}
            />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      {/* Footer */}
      <Footer
        name={user.name}
        email={user.email}
      />

    </div>
  );
}

export default App;
