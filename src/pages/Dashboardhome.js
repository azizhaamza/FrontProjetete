import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboardhome() {
  const accepteDemande = (itemId) => {
    // Replace '/api/your-endpoint/' with your actual Django API endpoint
    axios
      .post(`http://127.0.0.1:8000/accept_demand/${itemId}`, {})
      .then((response) => {
        // Handle the response from the server if needed
        console.log("Request successful:", response.data);

        // Reload the page
        window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending request:", error);
      });
  };

  const refusedemande = (itemId) => {
    // Replace '/api/your-endpoint/' with your actual Django API endpoint
    axios
      .post(`http://127.0.0.1:8000/refuse_demand/${itemId}`, {})
      .then((response) => {
        // Handle the response from the server if needed

        // Reload the page
        window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending request:", error);
      });
  };
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    // Make a GET request to the Django API endpoint
    axios
      .get("http://127.0.0.1:8000/print")
      .then((response) => {
        setDemandes(response.data.demandes);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <>
      <h1 className="h3 mb-3">
        <strong>Dashboard</strong> Ddemande de Missions
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
                      <th></th>
                      <th>Nom</th>
                      <th>prenom</th>
                      <th className="d-none d-xl-table-cell">date Aller</th>
                      <th className="d-none d-xl-table-cell">Date Retour</th>
                      <th>Statut</th>
                      <th className="d-none d-md-table-cell">Sujet</th>
                      <th className="d-none d-md-table-cell">Plan</th>
                      <th>Accompagnant</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandes.map((item) => (
                      <tr>
                        <td></td>
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

                        <td className="d-none d-md-table-cell">{item.plan}</td>
                        <td className="d-none d-md-table-cell">
                          {item.accompagnant}
                        </td>
                        {item.reponse_admin === "true" ? (
                          <>
                            <td>
                              <Link
                                to={`/dashboard/demande/${item.id}`}
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                Consulter
                              </Link>
                            </td>
                            <td></td>
                          </> // Don't render the button if item.reponse_admin is true
                        ) : item.reponse_admin === "false" ? (
                          // Render the button if item.reponse_admin is not true
                          <>
                            <td>
                              {" "}
                              <Link
                                to={`/dashboard/demande/${item.id}`}
                                type="button"
                                class="btn btn-primary btn-sm"
                              >
                                Consulter
                              </Link>
                            </td>
                            <td></td>
                          </>
                        ) : (
                          <>
                            <td>
                              <button
                                type="button"
                                class="btn btn-danger"
                                onClick={() => refusedemande(item.id)}
                              >
                                Refuser
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => accepteDemande(item.id)}
                              >
                                Accepter
                              </button>
                            </td>
                          </>
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
    </>
  );
}

export default Dashboardhome;
