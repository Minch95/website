import { Link } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Painting App</a>
      </div>
      <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
      </div>
      {/* <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul> */}
    </nav>
  );
}
export default NavBar;