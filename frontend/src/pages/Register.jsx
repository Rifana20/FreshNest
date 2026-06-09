import { useState } from "react";
import API from "../services/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const res = await API.post(
        "/users/register/",
        {  
          name,
          email,
          password
        }
      );

      alert(res.data.message);

    } catch (error) {

      alert(
        error.response?.data?.error ||
        "Registration Failed"
      );

    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleRegister}
        >
          Register
        </button>

      </div>

    </div>
  );
}

export default Register;