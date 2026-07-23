
function Spinner() {
  return (
    <div className="spinner-container">

      <div className="spinner"></div>

      <h2>Loading Repositories...</h2>

      <p>
        Please wait while we fetch the latest GitHub repositories.
      </p>

    </div>
  );
}

export default Spinner;
