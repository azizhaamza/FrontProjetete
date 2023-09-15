import React from "react";

function DashboardingorderMissions() {
  return (
    <>
      <h1 className="h3 mb-3">
        <strong>Orders</strong> Dashboard
      </h1>

      <div className="row">
        <div class="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
          <div class="card flex-fill w-100">
            <div class="card-header">
              <h5 class="card-title mb-0">les Orders de missions</h5>
            </div>
            <div class="card-body px-4">
              <div id="world_map" style={{ height: 350 }}>
                <table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th className="d-none d-xl-table-cell">Start Date</th>
                      <th className="d-none d-xl-table-cell">End Date</th>
                      <th>Status</th>
                      <th className="d-none d-md-table-cell">Assignee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Project Apollo</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                    </tr>
                    <tr>
                      <td>Project Fireball</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-danger">Cancelled</span>
                      </td>
                      <td className="d-none d-md-table-cell">William Harris</td>
                    </tr>
                    <tr>
                      <td>Project Hades</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td className="d-none d-md-table-cell">Sharon Lessman</td>
                    </tr>
                    <tr>
                      <td>Project Nitro</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-warning">In progress</span>
                      </td>
                      <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                    </tr>
                    <tr>
                      <td>Project Phoenix</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td className="d-none d-md-table-cell">William Harris</td>
                    </tr>
                    <tr>
                      <td>Project X</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td className="d-none d-md-table-cell">Sharon Lessman</td>
                    </tr>
                    <tr>
                      <td>Project Romeo</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-success">Done</span>
                      </td>
                      <td className="d-none d-md-table-cell">
                        Christina Mason
                      </td>
                    </tr>
                    <tr>
                      <td>Project Wombat</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td className="d-none d-xl-table-cell">31/06/2023</td>
                      <td>
                        <span className="badge bg-warning">In progress</span>
                      </td>
                      <td className="d-none d-md-table-cell">William Harris</td>
                    </tr>
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

export default DashboardingorderMissions;
