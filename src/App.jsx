import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./components/Projects";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const portfolioData = {

    name: "Jay Rohit",

    email: "jayrohit0310@gmail.com",

    role: "AI & Full Stack Developer",

    theme: darkMode ? "dark" : "light"

  };

  return (

    <div className={darkMode ? "app dark-theme" : "app light-theme"}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>

        <Route

          path="/"

          element={

            <Home

              name={portfolioData.name}

              role={portfolioData.role}

            />

          }

        />

        <Route

          path="/projects"

          element={<Projects />}

        />

        <Route

          path="/contact"

          element={

            <Contact

              email={portfolioData.email}

            />

          }

        />

        <Route

          path="*"

          element={<NotFound />}

        />

      </Routes>

      <Footer />

    </div>

  );

}

export default App;