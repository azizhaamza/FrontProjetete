import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

function Formissions() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateretour, setSelectedDateretour] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [message, setMessage] = useState("");
  const [sujet, setSujet] = useState("");
  const [accompagnant, setAccompagnant] = useState("");
  const [plan, setPlan] = useState("");
  const user = localStorage.getItem("id_user");
  console.log(user);
  const dateActuelle = new Date();

  function submitLogin(e) {
    e.preventDefault();
    const data = {
      id_user: user,
      nom: nom,
      prenom: prenom,
      date_aller: selectedDate.toISOString().slice(0, 10),
      date_retour: selectedDateretour.toISOString().slice(0, 10),
      sujet_mission: sujet,
      plan: plan,
      accompagnant: accompagnant,
      reponse_admin: "En cours",
      date_submit: dateActuelle,
    };
    axios
      .post("http://127.0.0.1:8000/dem", data)
      .then((response) => {
        setMessage(response.data.message);
        setCurrentUser(true);
        console.log(data);
        console.log("hamdoulh ");
        window.location.href = "/dashboard/home";
      })
      .catch((error) => {
        setMessage("Failed send demand"); // Display an error message
        console.error("Demand error:", error);
      });
  }

  return (
    <div style={{ marginTop: 0 }}>
      <form method="post" onSubmit={(e) => submitLogin(e)}>
        <div className="wrapper">
          <div className="main">
            <main className="content">
              <div className="container-fluid p-0">
                <div className="mb-3">
                  <h1 className="h3 d-inline align-middle">Forms</h1>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">nom</h5>
                      </div>
                      <div className="card-body">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nom"
                          value={nom}
                          onChange={(e) => setNom(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">date Aller</h5>
                      </div>
                      <div className="card-body">
                        <DatePicker
                          className="form-control"
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          dateFormat="dd/MM/yyyy" // Customize the date format
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Accompagnant</h5>
                      </div>
                      <div className="card-body">
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Textarea"
                          value={accompagnant}
                          onChange={(e) => setAccompagnant(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Poste</h5>
                      </div>
                      <div className="card-body">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Input"
                          value={plan}
                          onChange={(e) => setPlan(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Prenom</h5>
                      </div>
                      <div className="card-body">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Input"
                          value={prenom}
                          onChange={(e) => setPrenom(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Date Retour</h5>
                      </div>
                      <div className="card-body">
                        <DatePicker
                          className="form-control"
                          selected={selectedDateretour}
                          onChange={(date) => setSelectedDateretour(date)}
                          dateFormat="dd/MM/yyyy" // Customize the date format
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-2">Sujet de mission </h5>
                      </div>
                      <div className="card-body">
                        <textarea
                          className="form-control"
                          rows="2"
                          placeholder="Textarea"
                          value={sujet}
                          onChange={(e) => setSujet(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Formissions;
