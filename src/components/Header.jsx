function Header({ name, themeColor }) {
  return (
    <header style={{ backgroundColor: themeColor, padding: "20px", color: "white" }}>
      <h1>{name}'s Portfolio</h1>
    </header>
  );
}

export default Header;