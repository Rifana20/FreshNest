import { Link } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem(
    "access_token"
  );

  const userName = localStorage.getItem(
  "user_name"
);

  const handleLogout = () => {

    localStorage.removeItem(
      "access_token"
    );

    localStorage.removeItem(
      "user_name"
    );

    window.location.href = "/login";
  };

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

        {token ? (

          <>
            <span
              style={{
                marginRight: "15px",
                fontWeight: "bold"
              }}
            >
              {userName}
            </span>

            <button
              className="secondary-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>

        ) : (

          <>
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
          </>

        )}

      </div>

    </nav>
  );
}

export default Navbar;