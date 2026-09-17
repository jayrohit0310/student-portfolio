import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">

      <div className="logo">
        <h2>
          <span>J</span>ay<span>R</span>ohit
        </h2>
      </div>

      <nav>

        <ul className="nav-links">

          {menuItems.map((item) => (
            <li key={item.path}>

              <Link
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "active"
                    : ""
                }
              >
                {item.name}
              </Link>

            </li>
          ))}

        </ul>

      </nav>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀" : "🌙"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;