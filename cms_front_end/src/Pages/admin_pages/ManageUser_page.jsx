import { Link  } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUsers, FaBackward , FaBars, FaUser, FaEdit, FaTrash } from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
import {UserData,deleteUser,GetUserData} from '../../actions/userActions';
import Spinner from "../../Components/Spinner";

const ManageUser = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.userList);
  const{error, loading, users} = userList;
 

  useEffect(()=>{
 dispatch(UserData());
  },[dispatch]);

  useEffect(() => {
    if (users) {
      console.log('User data:', users);
    }
  }, [users]);


    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
        const collapseElement = document.getElementById("collapseWidthExample");
        if (collapseElement) {
          const collapse = Collapse.getInstance(collapseElement);
          collapse.toggle(); // Toggle the collapse element
        }
      };


      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
          dispatch(deleteUser(id)).then(() => dispatch(UserData())); // Refresh data after deletion
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
                <FaUsers className="mr-2" /> View Users
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
          <h2>Users Records</h2>
          {loading && <Spinner/> } 
          {error && <p className="alert alert-primary" role="alert">{error}</p>}
        <table class="table">
  <thead>
   
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Usertype</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    
  {users && users.map((user, index)=>(
    
    <tr>
      <th scope="row">{index +1 }</th>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>{user.roles.join(', ')}</td>
      <td>
      <div className="container">
      <div className="row">
      <Link className='col-md-4' to={`/edit-user/${user.id}`}><FaEdit /></Link>
      <Link className='col-md-4' style={{ color: 'red' }} to='#' onClick={() => handleDelete(user.id)}><FaTrash /></Link>
      </div>
      </div>
      </td>
    </tr>
     ))}
  </tbody>
</table>
</section>
      
        </div>
      </div>

        </div>
      );
}
 
export default ManageUser;