function Spinner({
  message = "Loading...",
  subtext = "Please wait while we fetch the latest data."
}) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <h2>{message}</h2>
      <p>{subtext}</p>
    </div>
  );
}

export default Spinner;
