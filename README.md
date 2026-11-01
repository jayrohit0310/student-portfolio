# Task Management System

A full-stack Task Management System built using **React, Node.js, Express.js, and MongoDB**. The application provides RESTful APIs for managing tasks and user authentication, along with AI-powered task description generation using the OpenAI API.

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Task Management:** Create, view, update, and delete tasks.
- **RESTful API:** Backend APIs developed using Node.js and Express.js.
- **MongoDB Integration:** Store user and task information in MongoDB.
- **AI-Powered Task Description:** Generate meaningful task descriptions using the OpenAI API.
- **Graceful Error Handling:** Provides fallback messages when AI services are unavailable.
- **Event-Driven Architecture:** Uses Node.js EventEmitter for asynchronous background processing.
- **Caching:** Implements NodeCache to improve API response performance.
- **Logging:** Middleware for tracking incoming API requests.
- **Docker Support:** Run the application and database using Docker Compose.
- **Automated Testing:** Jest and Supertest for backend API testing.
- **CI/CD Integration:** GitHub Actions workflow for automated testing.

## Technology Stack

### Frontend
- React.js
- Vite
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- OpenAI API
- NodeCache
- EventEmitter

### Development and Deployment Tools
- Git and GitHub
- Docker
- Docker Compose
- Jest
- Supertest
- Postman
- VS Code

## Project Structure

```text
Advance-webdev-frameworks/
│
├── task-manager-api/
│   ├── controllers/
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │   └── logger.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── taskRoutes.js
│   │   └── aiRoutes.js
│   │
│   ├── tests/
│   │   └── app.test.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── events.js
│   ├── listeners.js
│   ├── cache.js
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
│
├── student-portfolio/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following tools are installed:

- Node.js (v22 or later recommended)
- npm
- MongoDB or Docker Desktop
- Git
- Postman (for API testing)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd Advance-webdev-frameworks
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd task-manager-api
```

Install dependencies:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file inside the backend folder for local development.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
JWT_SECRET=your_secure_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

Replace the placeholder values with your actual credentials.

**Important:** Never upload your `.env` file or API keys to GitHub.

### 4. Start the Backend

```bash
npm start
```

The backend server will run at:

```text
http://localhost:5000
```

Make sure MongoDB is running before starting the backend.

## API Endpoints

The following are the main API endpoints used in the project.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |
| GET | `/tasks` | Get tasks |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |
| POST | `/api/ai/generate-description` | Generate an AI task description |

Protected task endpoints require a valid JWT token in the request headers.

Example:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

## AI-Powered Task Description Generation

The application integrates the OpenAI API to generate meaningful task descriptions based on a task title.

### How It Works

1. The user enters a task title.
2. The frontend sends the title to the backend API.
3. The backend sends a request to the OpenAI API.
4. The generated description is returned to the frontend.
5. The user can review and edit the suggested description before saving it.

### API Request

**Endpoint:**

```text
POST http://localhost:5000/api/ai/generate-description
```

**Request Body:**

```json
{
  "title": "Complete Practical 13 documentation"
}
```

**Example Response:**

```json
{
  "description": "Review the requirements of Practical 13 and prepare the complete documentation. Include the implementation details, testing results, and learning outcomes.",
  "fallback": false
}
```

### Error Handling

If the OpenAI API is unavailable, the backend returns a fallback response and allows the user to write the task description manually.

The API key is stored on the backend and is never exposed directly to the frontend.

## Docker Deployment

The application supports containerized deployment using Docker and Docker Compose.

### 1. Configure Environment Variables

Create a `.env` file in the project root directory:

```env
JWT_SECRET=your_secure_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

Ensure that the Docker Compose backend service passes these variables to the backend container.

### 2. Build and Run Containers

From the project root directory, execute:

```bash
docker compose up -d --build
```

### 3. Check Running Containers

```bash
docker compose ps
```

### 4. View Backend Logs

```bash
docker compose logs -f backend
```

### 5. Stop Containers

```bash
docker compose down
```

Docker Compose runs the application services and MongoDB using the configuration defined in `docker-compose.yml`.

## Testing

The backend uses Jest and Supertest for automated API testing.

Run the test suite from the backend directory:

```bash
npm test
```

The tests verify API behavior, including handling of unknown routes.

Postman can also be used to test API endpoints manually.

## GitHub Actions – Continuous Integration

GitHub Actions is used to automate backend testing.

The CI workflow:

1. Runs when code is pushed to the `main` branch or a pull request is created.
2. Checks out the repository.
3. Sets up the Node.js environment.
4. Installs project dependencies.
5. Executes automated tests.
6. Reports whether the tests pass or fail.

This helps identify errors before changes are merged into the main branch.

## Security Considerations

- JWT is used for user authentication.
- Passwords should be securely hashed before storage.
- API keys and sensitive credentials are stored in environment variables.
- The `.env` file must be excluded from Git commits.
- AI-generated descriptions should be reviewed by users before saving.
- Error handling prevents sensitive implementation details from being returned to API clients.

## Learning Outcomes

Through this project, the following concepts were implemented and practiced:

1. Developed RESTful APIs using Node.js and Express.js.
2. Integrated MongoDB for database management.
3. Implemented authentication and middleware.
4. Used EventEmitter for asynchronous event-driven processing.
5. Implemented caching using NodeCache.
6. Containerized application services using Docker and Docker Compose.
7. Configured GitHub Actions for automated testing.
8. Integrated the OpenAI API for AI-powered task description generation.
9. Implemented error handling and fallback mechanisms.
10. Tested APIs using Postman, Jest, and Supertest.

## Future Enhancements

- Add task priority and deadline recommendations using AI.
- Implement task reminders and notifications.
- Add advanced task filtering and searching.
- Improve dashboard analytics and visualizations.
- Implement more comprehensive automated testing.
- Add role-based access control.

## Author

**Jay Rohit**

B.Tech – Information Technology

CHARUSAT University

---

⭐ If you find this project useful, consider giving the repository a star!
