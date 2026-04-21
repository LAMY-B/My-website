import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contact from "./components/contact";
import Home from "./components/home";
import About from "./components/about";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="user/:name" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;