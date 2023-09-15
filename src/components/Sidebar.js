import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
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
              <a className="sidebar-link" href="/dashboard/order">
                Dashboard Orders
              </a>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/dashboard/form">
                <i className="align-middle" data-feather="check-square"></i>{" "}
                <span className="align-middle">Forms</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
