import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2468/users/login", {
        email,
        password,
      });
      setSuccessful("Login successful");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>{successful ? successful : error}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;