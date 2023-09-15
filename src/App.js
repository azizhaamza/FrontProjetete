import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import DashboardingorderMissions from "./pages/DashboardingorderMissions";
import Dashboarduser from "./Userpages/dashboardUser";
import Demandedetail from "./pages/Demandedetail";
import Home from "./Home";
import Allsidebarpages from "./components/Allsidebarpages";
import ProtectedRoute from "./components/ProtectedRoute";
import "react-datepicker/dist/react-datepicker.css";
import Userhome from "./Userpages/Userhome";

function App() {
  const admin = localStorage.getItem("admin");
  console.log(admin);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/dashboard/home" element={<Userhome />} exact />
          <Route path="/dashboard/demande/:id" element={<Demandedetail />} exact /> 

          <Route element={<ProtectedRoute />}>
            {admin === "true" ? (
              <Route element={<Allsidebarpages />} path="/dashboard" />
            ) : (
              <Route element={<Dashboarduser />} path="/dashboard" />
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
