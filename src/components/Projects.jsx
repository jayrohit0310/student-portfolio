import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepositories = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "https://api.github.com/users/jayrohit0310/repos?per_page=6&sort=updated"
            );

            if (!response.ok) {
                throw new Error("Unable to load GitHub repositories.");
            }

            const data = await response.json();
            const filteredRepos = data
                .filter((repo) => !repo.fork)
                .slice(0, 6);

            setRepositories(filteredRepos);
        } catch (err) {
            setError(err.message || "Unable to load repositories.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

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
        <section className="projects section">
            <div className="section-title">
                <p>Portfolio</p>
                <h2>My GitHub Projects</h2>
            </div>

            <div className="projects-grid">
                {repositories.map((repo) => (
                    <div className="project-card" key={repo.id}>
                        <div className="project-top">
                            <div>
                                <h3>{repo.name}</h3>
                                <span className="language">
                                    {repo.language || "Code"}
                                </span>
                            </div>
                            <div className="stars">⭐ {repo.stargazers_count}</div>
                        </div>

                        <p className="project-description">
                            {repo.description || "No description available."}
                        </p>

                        <div className="repo-info">
                            <span>
                                Forks: <strong>{repo.forks_count}</strong>
                            </span>
                        </div>

                        <div className="repo-date">
                            Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </div>

                        <div className="task-actions">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="repo-btn"
                            >
                                View Repo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;