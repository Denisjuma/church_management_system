import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaCalendarAlt,
  FaSignOutAlt,
  FaComment,
} from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
import "./AdminDashboard.css"; // Import custom CSS for styling
import {
  FaUser,
  FaBullhorn,
  FaDonate,
  FaPray,
  FaBook,
  FaRing,
  FaTint,
} from "react-icons/fa";
import "./MemberDashboard.css"; // Import custom CSS for styling
import { logout } from '../actions/userActions';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Member_Dashboard = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize the Collapse component after the DOM is ready
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      new Collapse(collapseElement);
    }
  }, []);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      const collapse = Collapse.getInstance(collapseElement);
      collapse.toggle(); // Toggle the collapse element
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');  // Redirect to login page
  };

  return (
    <div id="wrapper" className={sidebarOpen ? "toggled" : ""}>
      {/* Sidebar */}
      <center>
        <nav id="sidebar">
          <div className="sidebar-header ">
            <h3>Member Dashboard</h3>
          </div>
          <hr />
          <ul className="list-unstyled components">
            <li>
              <Link to="/profile">
                <FaUser className="mr-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/donations">
                <FaDonate className="mr-2" /> Donations
              </Link>
            </li>
            <li>
              <Link to="/prayer-requests">
                <FaPray className="mr-2" /> Prayer Requests
              </Link>
            </li>
            <li>
              <Link to="/member-feedback">
                <FaComment className="mr-2" /> Feedback
              </Link>
            </li>
            <li>
            <button className="mr-2 btn btn-secondary" onClick={logoutHandler}>
                  <FaSignOutAlt /> Logout
                </button>
            </li>
          </ul>
        </nav>
      </center>

      {/* Page Content */}
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-info" // Change class name to match Bootstrap
              id="sidebarCollapse"
              type="button"
              onClick={handleSidebarToggle}
            >
              <FaBars />
            </button>
            <p className="text-secondary">
              <FaUser /> denis
            </p>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card bg-primary text-white mb-4">
                <div className="card-body">
                  <h3 className="card-title">Total Users</h3>
                  <p className="card-text">3</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-success text-white mb-4">
                <div className="card-body">
                  <h3 className="card-title">Total Announcements</h3>
                  <p className="card-text">3</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-info text-white mb-4">
                <div className="card-body">
                  <h3 className="card-title">Total Events</h3>
                  <p className="card-text">3</p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Member_Dashboard;
