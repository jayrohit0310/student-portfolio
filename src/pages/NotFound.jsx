import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (
    <section className="not-found">

      <div className="notfound-card">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist
          or may have been moved.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Home
        </button>

      </div>

    </section>
  );
}

export default NotFound;