function Login() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <input type="email" placeholder="Email" />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="primary-btn">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;