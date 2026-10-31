import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../api";

function Tasks() {
    // ==========================================
    // STATE
    // ==========================================
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Search filter
    const [search, setSearch] = useState("");

    // Form inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");

    // Operation status (POST / PUT / DELETE)
    const [operationLoading, setOperationLoading] = useState(false);
    const [operationError, setOperationError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    // ==========================================
    // FETCH TASKS (GET)
    // ==========================================
    const fetchTasks = async () => {
        setLoading(true);
        setError(null);

        try {
            const result = await getTasks();
            const taskData = Array.isArray(result)
                ? result
                : result?.data || [];
            setTasks(taskData);
        } catch (err) {
            setError(err.message || "Unable to load tasks from server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const clearMessages = () => {
        setOperationError(null);
        setSuccessMessage("");
    };

    // Auto-dismiss success notification
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    // ==========================================
    // CREATE TASK (POST)
    // ==========================================
    const handleCreateTask = async (e) => {
        e.preventDefault();
        clearMessages();

        if (!title.trim()) {
            setOperationError("Task title is required.");
            return;
        }

        setOperationLoading(true);

        try {
            const result = await createTask({
                title: title.trim(),
                description: description.trim(),
                priority,
                completed: false
            });

            const newTask = result?.data || result;

            if (newTask) {
                setTasks((previousTasks) => [...previousTasks, newTask]);
            } else {
                await fetchTasks();
            }

            // Reset form
            setTitle("");
            setDescription("");
            setPriority("medium");
            setSuccessMessage("Task created successfully!");
        } catch (err) {
            setOperationError(err.message || "Unable to create task.");
        } finally {
            setOperationLoading(false);
        }
    };

    // ==========================================
    // UPDATE TASK STATUS (PUT)
    // ==========================================
    const handleToggleTask = async (task) => {
        clearMessages();
        setOperationLoading(true);

        try {
            const result = await updateTask(task._id, {
                title: task.title,
                description: task.description || "",
                completed: !task.completed,
                priority: task.priority || "medium"
            });

            const updatedTask = result?.data || result;

            if (updatedTask) {
                setTasks((previousTasks) =>
                    previousTasks.map((item) =>
                        item._id === task._id ? updatedTask : item
                    )
                );
            } else {
                await fetchTasks();
            }

            setSuccessMessage("Task updated successfully!");
        } catch (err) {
            setOperationError(err.message || "Unable to update task.");
        } finally {
            setOperationLoading(false);
        }
    };

    // ==========================================
    // DELETE TASK (DELETE)
    // ==========================================
    const handleDeleteTask = async (id) => {
        clearMessages();

        const confirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmed) {
            return;
        }

        setOperationLoading(true);

        try {
            await deleteTask(id);

            setTasks((previousTasks) =>
                previousTasks.filter((task) => task._id !== id)
            );

            setSuccessMessage("Task deleted successfully!");
        } catch (err) {
            setOperationError(err.message || "Unable to delete task.");
        } finally {
            setOperationLoading(false);
        }
    };

    // Filter tasks based on search
    const filteredTasks = tasks.filter((task) => {
        const taskTitle = task.title?.toLowerCase() || "";
        const taskDescription = task.description?.toLowerCase() || "";
        const searchText = search.toLowerCase();

        return (
            taskTitle.includes(searchText) ||
            taskDescription.includes(searchText)
        );
    });

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";
        try {
            return new Date(dateString).toLocaleDateString("en-GB");
        } catch {
            return "Unknown";
        }
    };

    if (loading) {
        return (
            <Spinner
                message="Loading Tasks..."
                subtext="Connecting to Node + Express + MongoDB backend..."
            />
        );
    }

    if (error) {
        return <ErrorMessage message={error} onRetry={fetchTasks} />;
    }

    return (
        <section className="projects section">
            {/* SECTION HEADER */}
            <div className="section-title">
                <p>TASK MANAGEMENT</p>
                <h2>My Tasks</h2>
            </div>

            {/* CREATE TASK FORM */}
            <div className="task-form-container">
                <h3>Create New Task</h3>

                <form className="task-form" onSubmit={handleCreateTask}>
                    <input
                        type="text"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={operationLoading}
                    />

                    <textarea
                        placeholder="Task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={operationLoading}
                    />

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        disabled={operationLoading}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                    <button
                        type="submit"
                        className="repo-btn"
                        disabled={operationLoading}
                    >
                        {operationLoading ? "Saving..." : "Add Task"}
                    </button>
                </form>
            </div>

            {/* ERROR MESSAGE */}
            {operationError && (
                <div className="task-message error">
                    {operationError}
                </div>
            )}

            {/* SUCCESS MESSAGE */}
            {successMessage && (
                <div className="task-message success">
                    {successMessage}
                </div>
            )}

            {/* SEARCH */}
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* TASK COUNT */}
            <div className="task-count">
                <p>
                    Total Tasks: <strong>{filteredTasks.length}</strong>
                </p>
            </div>

            {/* TASK LIST */}
            <div className="projects-grid">
                {filteredTasks.length === 0 ? (
                    <div className="no-tasks">
                        <h3>No tasks found</h3>
                        <p>Create a new task to get started.</p>
                    </div>
                ) : (
                    filteredTasks.map((task) => (
                        <div className="project-card" key={task._id}>
                            {/* TASK HEADER */}
                            <div className="project-top">
                                <div>
                                    <h3>{task.title}</h3>
                                    <span className="language">
                                        {task.priority || "medium"}
                                    </span>
                                </div>

                                <div className="stars">
                                    {task.completed ? "✅" : "⏳"}
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <p className="project-description">
                                {task.description || "No description available."}
                            </p>

                            {/* STATUS */}
                            <div className="repo-info">
                                <span>
                                    Status:{" "}
                                    <strong>
                                        {task.completed
                                            ? "Completed"
                                            : "Pending"}
                                    </strong>
                                </span>
                            </div>

                            {/* CREATED DATE */}
                            <div className="repo-date">
                                Created: {formatDate(task.createdAt)}
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="task-actions">
                                <button
                                    className="repo-btn"
                                    onClick={() => handleToggleTask(task)}
                                    disabled={operationLoading}
                                >
                                    {task.completed
                                        ? "Mark Pending"
                                        : "Mark Complete"}
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDeleteTask(task._id)}
                                    disabled={operationLoading}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

export default Tasks;

