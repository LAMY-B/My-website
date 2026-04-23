import axios from "axios";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [succesful, setSuccesful] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2468/users/create", {
        username,
        email,
        age,
        password,
      });
      setSuccesful("User sign up succesfully");
    } catch (err) {
      console.error(err.message);
      setError(err, message);
    }
  };

  return (
    <div>
      <h1>{succesful ? succesful : error}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <input
          type="email"
          placeholder="Enter Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter Your Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
