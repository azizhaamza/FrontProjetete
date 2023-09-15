import React from "react";
import Navigationbar from "../components/Navigationbar";
import { Routes, Route, NavigationType, Link, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Formissions from "./Formmissions";
import Userhome from "./Userhome";

function Dashboarduser() {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <ul className="sidebar-nav">
            <br></br>
            <br></br>
            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/">
                <i className="align-middle" data-feather="check-square"></i>{" "}
                <span className="align-middle">Forms</span>
              </Link>
            </li>
            <br></br>
            <br></br>
            <li className="sidebar-item ">
              <Link className="sidebar-link" to="/dashboard/home">
                <i className="align-middle" data-feather="sliders"></i>{" "}
                <span className="align-middle">Dashboard Mission</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <div style={{ margin: 3 }}>
          <Navigationbar />
        </div>
        <main className="content">
          <div className="container-fluid p-0">
            <Routes>
              <Route path="/" element={<Formissions />} />
              <Route path="/dashboard/home" Component={<Userhome />} exact />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboarduser;
