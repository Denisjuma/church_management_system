import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaUsers, FaBackward , FaBars, FaUser,FaComment, FaEdit, FaTrash} from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
const Feedback = () => {
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
              <Link to="#">
                <FaComment className="mr-2" /> View Feedback
              </Link>
            </li>
            <li>
            <Link to="/admin-dashboard">
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
        <div className="container-fluid">
              {/* Table */}
        <section id='staff-table'>
          <h2>FeedBack Records</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <div className="container">
      <div className="row">
       <Link className='col-md-4' to = '#'><FaEdit /></Link>
        <Link className='col-md-4' style={{color:'red'}}to = '#'><FaTrash /></Link>
      </div>
      </div>
   
     
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </section>
      
        </div>
      </div>

        </div>
     );
}
 
export default Feedback;