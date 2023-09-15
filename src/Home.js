import React, { useState, useEffect } from "react";
import "./App.css";
import { Link, Navigate } from "react-router-dom";
import image from "./assets/platformholly.jpg";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Home() {
  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  localStorage.clear();

  // Create the submit method.
  function submitLogin(e) {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/login/", loginData)
      .then((response) => {
        setMessage(response.data.message);
        setCurrentUser(true);
        setIsAuthenticated(true);
        console.log("hamdoulh ");
        localStorage.setItem("access_token", response.data.token);
        localStorage.setItem("admin", response.data.user.is_staff);
        localStorage.setItem("id_user", response.data.user.id);
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        setMessage("Login failed"); // Display an error message
        console.error("Login error:", error);
      });
  }

  return (
    <div
      className="gauche login template d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 600,
        width: 1400,
      }}
    >
      <div className="droit form_container rounded bg-white">
        <form method="post" onSubmit={(e) => submitLogin(e)}>
          <h3 className="text-center">Login</h3>
          <div className=" ustify-content-left mb-2">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Login
            </button>
          </div>
          <p className="text-end mt-2" className="mt-2">
            Forgot<a href="">Password?</a>
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Home;
