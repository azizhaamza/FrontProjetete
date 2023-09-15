import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigationbar from "../components/Navigationbar";
import { Routes, Route, NavigationType, Link, Switch } from "react-router-dom";
import Footer from "../components/Footer";

function Userhome() {
  const [demandes, setDemandes] = useState([]);
  const user = localStorage.getItem("id_user");
  console.log(user);

  useEffect(() => {
    // Make a GET request to the Django API endpoint
    axios
      .get(`http://127.0.0.1:8000/show/${user}`)
      .then((response) => {
        setDemandes(response.data.demandes);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <ul className="sidebar-nav">
            <br></br>
            <br></br>
            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/dashboard/home">
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
          <div className="container-fluid p-0"></div>
          <h1 className="h3 mb-3">
            <strong>Analytics</strong> Dashboard
          </h1>

          <div className="row">
            <div class="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
              <div class="card flex-fill w-100">
                <div class="card-header">
                  <h5 class="card-title mb-0">Real-Time</h5>
                </div>
                <div class="card-body px-4">
                  <div id="world_map" style={{ height: 350 }}>
                    <table className="table table-hover my-0">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>prenom</th>
                          <th className="d-none d-xl-table-cell">date Aller</th>
                          <th className="d-none d-xl-table-cell">
                            Date Retour
                          </th>
                          <th>Reponse</th>
                          <th className="d-none d-md-table-cell">Sujet</th>
                          <th className="d-none d-md-table-cell">Plan</th>
                          <th className="d-none d-md-table-cell">
                            Accompagnant
                          </th>
                          <th>Envoyer Order</th>
                        </tr>
                      </thead>
                      <tbody>
                        {demandes.map((item) => (
                          <tr>
                            <td>{item.nom}</td>
                            <td>{item.prenom}</td>
                            <td className="d-none d-xl-table-cell">
                              {item.date_Aller}
                            </td>
                            <td className="d-none d-xl-table-cell">
                              {item.date_retour}
                            </td>

                            <td>
                              <span
                                className={`badge ${
                                  item.reponse_admin === "true"
                                    ? "bg-success"
                                    : item.reponse_admin === "false"
                                    ? "bg-danger"
                                    : "bg-warning"
                                }`}
                              >
                                {item.reponse_admin === "true"
                                  ? "Success"
                                  : item.reponse_admin === "false"
                                  ? "Fail"
                                  : "Pending"}
                              </span>
                            </td>
                            <td>{item.sujet}</td>

                            <td className="d-none d-md-table-cell">
                              {item.plan}
                            </td>
                            <td className="d-none d-md-table-cell">
                              {item.accompagnant}
                            </td>
                            {item.reponse_admin === "true" ? (
                              <td>
                                <Link
                                  to={`/dashboard/demande/${item.id}`}
                                  type="button"
                                  class="btn btn-primary btn-sm"
                                >
                                  Order
                                </Link>
                              </td>
                            ) : (
                              <td></td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
              <div className="card flex-fill"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Userhome;
