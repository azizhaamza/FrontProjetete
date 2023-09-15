import React from "react";
import Footer from "../components/Footer";
import Navigationbar from "../components/Navigationbar";
import Sidebar from "../components/Sidebar";
import Allsidebarpages from "../components/Allsidebarpages";

const Dashboarding = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <div>
          <Navigationbar />
        </div>
        <main className="content">
          <div className="container-fluid p-0">
            <Allsidebarpages />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboarding;
