
function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">

      <div className="error-card">

        <h1>❌</h1>

        <h2>Oops! Something Went Wrong</h2>

        <p>
          {message}
        </p>

        <button
          className="primary-btn"
          onClick={onRetry}
        >
          🔄 Retry
        </button>

      </div>

    </div>
  );
}

export default ErrorMessage;
