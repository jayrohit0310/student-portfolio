import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Lazy Loading
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

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
        <div
            className={
                darkMode
                    ? "app dark-theme"
                    : "app light-theme"
            }
        >
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Suspense
                fallback={
                    <div className="page-loading">
                        <div className="loading-spinner"></div>
                        <p>Loading page...</p>
                    </div>
                }
            >
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
            </Suspense>

            <Footer />
        </div>
    );
}

export default App;