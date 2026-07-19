import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>JR.</h2>
      </div>

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

      <div className="nav-actions">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
