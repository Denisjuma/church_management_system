import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../actions/userActions';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { validPassword } from "../../Components/Regex";
import { FaUsers, FaBackward , FaBars, FaUser,FaEdit, FaTrash } from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
import {UserData,deleteUser,GetUserData} from '../../actions/userActions';
import Spinner from "../../Components/Spinner";
const MemberFeedback = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
        const collapseElement = document.getElementById("collapseWidthExample");
        if (collapseElement) {
          const collapse = Collapse.getInstance(collapseElement);
          collapse.toggle(); // Toggle the collapse element
        }
      };
    return (
        
        <div id="wrapper" className={sidebarOpen ? "toggled" : ""}>
        {/* Sidebar */}
        <center>
        <nav id="sidebar">
          <div className="sidebar-header ">
            <h3>Admin Dashboard</h3>
          </div>
         <hr />
          <ul className="list-unstyled components">
            <li>
              <a href="#">
                <FaUser className="mr-2" /> Add Staffs
              </a>
            </li>
            <li>
              <a href="#staff-table">
                <FaUsers className="mr-2" /> View staff
              </a>
            </li>
            <li>
            <Link to="/member-dashboard">
              <FaBackward className="mr-2" /> Back
            </Link>
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
            <p className="text-secondary"><FaUser/>  Programmer</p>
          </div>
        </nav>

        </div>
        </div>
      );
}
 
export default MemberFeedback;