import { useEffect, useState } from "react";

import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

function Projects() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Replace with your GitHub username
  const username = "jayrohit0310";

  const fetchRepositories = async () => {

    setLoading(true);
    setError(null);

    try {

      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch GitHub repositories.");
      }

      const data = await response.json();

      setRepos(data);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchRepositories();

  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={fetchRepositories}
      />
    );
  }

  return (
    <section className="projects">

      <div className="section-title">

        <h2>GitHub Repositories</h2>

        <p>
          Repositories fetched dynamically using the GitHub REST API.
        </p>

      </div>

      <div className="search-box">

        <input
          type="text"
          placeholder="Search Repository..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="projects-container">

        {filteredRepos.length > 0 ? (

          filteredRepos.map((repo) => (

            <div
              className="project-card"
              key={repo.id}
            >

              <div className="project-content">

                <h3>{repo.name}</h3>

                <span className="project-tech">

                  ⭐ {repo.stargazers_count} Stars

                </span>

                <p>

                  {repo.description
                    ? repo.description
                    : "No description available."}

                </p>

                <div className="project-features">

                  <span>🍴 Forks: {repo.forks_count}</span>

                  <span>{repo.language || "Unknown"}</span>

                </div>

                <div className="project-buttons">

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="primary-btn">

                      View Repository

                    </button>

                  </a>

                </div>

              </div>

            </div>

          ))

        ) : (

          <h2 style={{ textAlign: "center" }}>
            No repositories found.
          </h2>

        )}

      </div>

    </section>
  );
}

export default Projects;
