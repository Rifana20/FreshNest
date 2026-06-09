import { useState } from "react";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

  try {

    const res = await API.post(
      "/users/login/",
      {
        email,
        password
      }
    );

    localStorage.setItem(
      "access_token",
      res.data.access_token
    );

    const profileRes = await API.get(
      "/users/profile/",
      {
        headers: {
          Authorization:
            `Bearer ${res.data.access_token}`
        }
      }
    );

    localStorage.setItem(
      "user_name",
      profileRes.data.name
    );

    alert("Login Successful");

    window.location.href = "/inventory";

  } catch (error) {

    console.log(error.response);

    alert(
      error.response?.data?.error ||
      "Login Failed"
    );

  }
};

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;