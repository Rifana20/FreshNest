function Register() {
  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <input placeholder="Name" />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button className="primary-btn">
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;