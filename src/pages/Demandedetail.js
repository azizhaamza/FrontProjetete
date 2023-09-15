import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Demandedetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace '/api/your-endpoint/' with your actual Django API endpoint
    axios
      .get(`http://127.0.0.1:8000/edit/${id}`, {})
      .then((response) => {
        // Handle the response from the server if needed
        setData(response.data);

        // Reload the page
        //window.location.reload();
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending request:", error);
      });
  }, [id]);

  return (
    <div style={{ marginTop: 0 }}>
      <form>
        <div className="wrapper">
          <div className="main">
            <main className="content">
              <div className="container-fluid p-0">
                <div className="mb-3">
                  <h1 className="h3 d-inline align-middle">
                    Demande de missions Detail
                  </h1>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">nom</h5>
                      </div>
                      <div className="card-body">{data.nom}</div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">date Aller</h5>
                      </div>
                      <div className="card-body">{data.date_Aller}</div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Accompagnant</h5>
                      </div>
                      <div className="card-body">{data.accompagnant}</div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Poste</h5>
                      </div>
                      <div className="card-body">{data.plan}</div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Prenom</h5>
                      </div>
                      <div className="card-body">{data.prenom}</div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Date Retour</h5>
                      </div>
                      <div className="card-body">{data.date_retour}</div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-2">Sujet de mission </h5>
                      </div>
                      <div className="card-body">{data.sujet}</div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Demandedetail;
