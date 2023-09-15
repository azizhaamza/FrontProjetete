import React, { useEffect } from "react";
import { Routes, Route, NavigationType, Link, Switch } from "react-router-dom";
import DashboardingorderMissions from "../pages/DashboardingorderMissions";
import Formissions from "../Userpages/Formmissions";
import Dashboardhome from "../pages/Dashboardhome";
import Navigationbar from "./Navigationbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Allsidebarpages = () => {
  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    }
  });
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <ul className="sidebar-nav">
              <li className="sidebar-item active">
                <Link className="sidebar-link" to="/dashboard">
                  <i className="align-middle" data-feather="sliders"></i>{" "}
                  <span className="align-middle">Dashboard Mission</span>
                </Link>
              </li>

              <li className="sidebar-item">
                <i className="align-middle" data-feather="sliders"></i>{" "}
                <Link className="sidebar-link" to="order">
                  Dashboard Orders
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <div>
            <Navigationbar />
          </div>
          <main className="content">
            <div className="container-fluid p-0">
              <Routes>
                <Route path="/" element={<Dashboardhome />} />
                <Route
                  path="/order"
                  element={<DashboardingorderMissions />}
                  exact
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Allsidebarpages;
