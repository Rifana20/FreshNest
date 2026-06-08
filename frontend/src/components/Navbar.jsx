import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        FreshNest
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/recipes">Recipes</Link>
      </div>

      <div className="auth-btn">

        <Link to="/login">
          <button className="secondary-btn">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="primary-btn">
            Register
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;