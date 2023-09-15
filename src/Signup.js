import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "./assets/platformholly.jpg";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Signup() {
  const [currentUser, setCurrentUser] = useState();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [is_staff, set_is_staff] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  /*----------------------------------*/
  console.log("hi");
  function submitRegistrastion(e) {
    e.preventDefault();
    const loginData = {
      username: username,
      email: email,
      password: password,
      is_staff: is_staff,
    };
    axios
      .post("http://127.0.0.1:8000/signup", loginData)
      .then((response) => {
        setMessage(response.data.message);
        setCurrentUser(true);
        setIsAuthenticated(true);
        console.log("hamdoulh");
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
        <form onSubmit={(e) => submitRegistrastion(e)}>
          <h3 className="text-center">Sign up</h3>
          <div className="mb-2">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-2">
            <div class="form-check"></div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                checked={is_staff}
                onChange={() => set_is_staff(!is_staff)}
              />
              <label className="form-check-label" for="flexCheckDefault">
                Register as Admin
              </label>
            </div>
          </div>
          <br></br>
          <div className="d-grid">
            <button className="btn btn-primary btn-lg btn-block">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2" className="mt-2">
            Forgot<a href="">Password?</a>
            <Link to="/" className="ms-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
