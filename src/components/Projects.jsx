import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../api";


function Projects() {

    // ==========================================
    // STATE
    // ==========================================

    const [tasks, setTasks] = useState([]);

    // Initial GET loading state
    const [loading, setLoading] = useState(true);

    // Initial GET error
    const [error, setError] = useState(null);

    // Search
    const [search, setSearch] = useState("");

    // Form
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");

    // POST / PUT / DELETE loading
    const [operationLoading, setOperationLoading] = useState(false);

    // POST / PUT / DELETE error
    const [operationError, setOperationError] = useState(null);

    // Success message
    const [successMessage, setSuccessMessage] = useState("");


    // ==========================================
    // GET TASKS
    // ==========================================

    const fetchTasks = async () => {

        setLoading(true);
        setError(null);

        try {

            const result = await getTasks();

            // Supports both:
            // direct array response
            // { data: [...] } response

            const taskData = Array.isArray(result)
                ? result
                : result?.data || [];

            setTasks(taskData);

        } catch (err) {

            setError(
                err.message || "Unable to load tasks."
            );

        } finally {

            setLoading(false);

        }
    };


    // ==========================================
    // LOAD TASKS WHEN PAGE OPENS
    // ==========================================

    useEffect(() => {

        fetchTasks();

    }, []);


    // ==========================================
    // CLEAR OPERATION MESSAGE
    // ==========================================

    const clearMessages = () => {

        setOperationError(null);
        setSuccessMessage("");

    };


    // ==========================================
    // CREATE TASK - POST
    // ==========================================

    const handleCreateTask = async (e) => {

        e.preventDefault();

        clearMessages();


        // Frontend validation

        if (!title.trim()) {

            setOperationError(
                "Task title is required."
            );

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


            // Support direct object or { data: object }

            const newTask =
                result?.data || result;


            if (newTask) {

                setTasks((previousTasks) => [

                    ...previousTasks,

                    newTask

                ]);

            } else {

                // Fallback: reload from MongoDB

                await fetchTasks();

            }


            // Clear form

            setTitle("");
            setDescription("");
            setPriority("medium");


            setSuccessMessage(
                "Task created successfully!"
            );


        } catch (err) {

            setOperationError(
                err.message ||
                "Unable to create task."
            );

        } finally {

            setOperationLoading(false);

        }

    };


    // ==========================================
    // UPDATE TASK - PUT
    // ==========================================

    const handleToggleTask = async (task) => {

        clearMessages();

        setOperationLoading(true);


        try {

            const result = await updateTask(

                task._id,

                {

                    title: task.title,

                    description:
                        task.description || "",

                    completed:
                        !task.completed,

                    priority:
                        task.priority || "medium"

                }

            );


            const updatedTask =
                result?.data || result;


            if (updatedTask) {

                setTasks((previousTasks) =>

                    previousTasks.map((item) =>

                        item._id === task._id
                            ? updatedTask
                            : item

                    )

                );

            } else {

                await fetchTasks();

            }


            setSuccessMessage(
                "Task updated successfully!"
            );


        } catch (err) {

            setOperationError(
                err.message ||
                "Unable to update task."
            );

        } finally {

            setOperationLoading(false);

        }

    };


    // ==========================================
    // DELETE TASK - DELETE
    // ==========================================

    const handleDeleteTask = async (id) => {

        clearMessages();


        // Confirmation dialog

        const confirmed = window.confirm(

            "Are you sure you want to delete this task?"

        );


        if (!confirmed) {

            return;

        }


        setOperationLoading(true);


        try {

            await deleteTask(id);


            // Remove from React state

            setTasks((previousTasks) =>

                previousTasks.filter(

                    (task) =>
                        task._id !== id

                )

            );


            setSuccessMessage(
                "Task deleted successfully!"
            );


        } catch (err) {

            setOperationError(
                err.message ||
                "Unable to delete task."
            );

        } finally {

            setOperationLoading(false);

        }

    };


    // ==========================================
    // SEARCH TASKS
    // ==========================================

    const filteredTasks = tasks.filter((task) => {

        const taskTitle =
            task.title?.toLowerCase() || "";

        const taskDescription =
            task.description?.toLowerCase() || "";

        const searchText =
            search.toLowerCase();


        return (

            taskTitle.includes(searchText) ||

            taskDescription.includes(searchText)

        );

    });


    // ==========================================
    // INITIAL LOADING
    // ==========================================

    if (loading) {

        return <Spinner />;

    }


    // ==========================================
    // INITIAL ERROR
    // ==========================================

    if (error) {

        return (

            <ErrorMessage

                message={error}

                onRetry={fetchTasks}

            />

        );

    }


    // ==========================================
    // UI
    // ==========================================

    return (

        <section className="projects section">


            {/* ==================================
                PAGE TITLE
            ================================== */}

            <div className="section-title">

                <p>Task Management</p>

                <h2>My Tasks</h2>

            </div>


            {/* ==================================
                CREATE TASK FORM
            ================================== */}

            <div className="task-form-container">

                <h3>Create New Task</h3>


                <form
                    className="task-form"
                    onSubmit={handleCreateTask}
                >


                    {/* TITLE */}

                    <input

                        type="text"

                        placeholder="Task title"

                        value={title}

                        onChange={(e) =>
                            setTitle(e.target.value)
                        }

                        disabled={operationLoading}

                    />


                    {/* DESCRIPTION */}

                    <textarea

                        placeholder="Task description"

                        value={description}

                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }

                        disabled={operationLoading}

                    />


                    {/* PRIORITY */}

                    <select

                        value={priority}

                        onChange={(e) =>
                            setPriority(
                                e.target.value
                            )
                        }

                        disabled={operationLoading}

                    >

                        <option value="low">
                            Low
                        </option>

                        <option value="medium">
                            Medium
                        </option>

                        <option value="high">
                            High
                        </option>

                    </select>


                    {/* CREATE BUTTON */}

                    <button

                        type="submit"

                        className="repo-btn"

                        disabled={operationLoading}

                    >

                        {operationLoading
                            ? "Saving..."
                            : "Add Task"}

                    </button>

                </form>

            </div>


            {/* ==================================
                ERROR MESSAGE
            ================================== */}

            {operationError && (

                <div className="task-message error">

                    {operationError}

                </div>

            )}


            {/* ==================================
                SUCCESS MESSAGE
            ================================== */}

            {successMessage && (

                <div className="task-message success">

                    {successMessage}

                </div>

            )}


            {/* ==================================
                SEARCH
            ================================== */}

            <div className="search-box">

                <input

                    type="text"

                    placeholder="Search tasks..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                />

            </div>


            {/* ==================================
                TASK COUNT
            ================================== */}

            <div className="task-count">

                <p>

                    Total Tasks:{" "}

                    <strong>
                        {tasks.length}
                    </strong>

                </p>

            </div>


            {/* ==================================
                TASK LIST
            ================================== */}

            <div className="projects-grid">


                {filteredTasks.length === 0 ? (

                    <div className="no-tasks">

                        <h3>
                            No tasks found
                        </h3>

                        <p>
                            Create a new task
                            to get started.
                        </p>

                    </div>

                ) : (

                    filteredTasks.map((task) => (

                        <div

                            className="project-card"

                            key={task._id}

                        >


                            {/* TASK HEADER */}

                            <div className="project-top">

                                <div>

                                    <h3>
                                        {task.title}
                                    </h3>


                                    <span className="language">

                                        {task.priority ||
                                            "medium"}

                                    </span>

                                </div>


                                <div className="stars">

                                    {task.completed

                                        ? "✅"

                                        : "⏳"}

                                </div>

                            </div>


                            {/* DESCRIPTION */}

                            <p className="project-description">

                                {task.description ||

                                    "No description available."}

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


                            {/* PRIORITY */}

                            <div className="repo-info">

                                <span>

                                    Priority:{" "}

                                    <strong>

                                        {task.priority ||
                                            "medium"}

                                    </strong>

                                </span>

                            </div>


                            {/* CREATED DATE */}

                            <div className="repo-date">

                                Created:{" "}

                                {task.createdAt

                                    ? new Date(
                                        task.createdAt
                                    ).toLocaleDateString()

                                    : "Unknown"}

                            </div>


                            {/* ACTION BUTTONS */}

                            <div className="task-actions">


                                {/* UPDATE */}

                                <button

                                    className="repo-btn"

                                    onClick={() =>
                                        handleToggleTask(
                                            task
                                        )
                                    }

                                    disabled={
                                        operationLoading
                                    }

                                >

                                    {task.completed

                                        ? "Mark Pending"

                                        : "Mark Complete"}

                                </button>


                                {/* DELETE */}

                                <button

                                    className="delete-btn"

                                    onClick={() =>
                                        handleDeleteTask(
                                            task._id
                                        )
                                    }

                                    disabled={
                                        operationLoading
                                    }

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


export default Projects;