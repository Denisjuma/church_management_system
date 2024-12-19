import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../actions/userActions';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { validPassword } from "../../Components/Regex";
import { FaUsers, FaBackward , FaBars, FaUser,FaEdit, FaTrash } from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
import {UserData,deleteUser,GetUserData} from '../../actions/userActions';
import Spinner from "../../Components/Spinner";

const ManageStaff = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [inputs, setInputs] = useState({
      role: "member", // Set a default role if needed
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password1: "",
      password2: "",
    });
  
    
    const [message, setMessage] = useState(null);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userSignup = useSelector((state) => state.userSignup);
    const { error, loading, userInfo } = userSignup;
    useEffect(() => {
      if (userInfo) {
        navigate("/");
      }
    }, [redirect, userInfo]);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const { password1, password2, first_name, role } = inputs;
  
      if (password1 !== password2) {
        setMessage("Passwords do not match");
      } else if (first_name.length < 3) {
        setMessage("Please enter a valid first name");
      } else if (!validPassword.test(password1) || !validPassword.test(password2)) {
        setMessage("Your password should contain uppercase and lowercase letters, and numbers");
      } else {
        dispatch(signup(inputs));
        setMessage("Signup is successful");
        navigate("/login");
      }
    };
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
        const collapseElement = document.getElementById("collapseWidthExample");
        if (collapseElement) {
          const collapse = Collapse.getInstance(collapseElement);
          collapse.toggle(); // Toggle the collapse element
        }
      };

      const userList = useSelector((state)=>state.userList);
      const{error:errorLoading, loading:dataLoadingg, users} = userList;

      useEffect(()=>{
        dispatch(GetUserData());
         },[dispatch]);
       
         useEffect(() => {
           if (users) {
             console.log('User data:', users);
           }
         }, [users]);
       
    
      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
          dispatch(deleteUser(id)).then(() => dispatch(GetUserData())); // Refresh data after deletion
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
          <br />
          <h2 id='add-stadff-form'>Add Staffs</h2>
      <div className="signUp_form_container1" >
        <div className="sign-up1">
          <form className="sign-up_form" onSubmit={handleSubmit}>
            <div>
              <img
                className="default_image"
                src="./sda_logo_update.png"
                alt="sda logo"
              />
            </div>
          
            <p>
              {message && <message className=" text-danger">{message}</message>}
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="userType">Select user type</label>
                    <select
                      id="userType"
                      name="role"
                      value={inputs.role}
                      onChange={handleChange}
                      required
                    >
                      <option desabled>--choose--</option>
                      <option value="accountant">Tressurer</option>
                      <option value="pastor">Pastor</option>
                      <option value="secretary">Secretary</option>
                      <option value="member">Member</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      className="input"
                      type="text"
                      name="first_name"
                      placeholder="Enter your first name"
                      value={inputs.first_name || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      className="input"
                      type="text"
                      name="last_name"
                      placeholder="Enter your last name"
                      value={inputs.last_name || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="email">Email</label>
                    <input
                      className="input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Email address"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="password">Password</label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      name="password1"
                      placeholder="Enter your password"
                      value={inputs.password1 || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-control1">
                    <label htmlFor="password">Comfirm Password</label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      name="password2"
                      placeholder="Enter your password"
                      value={inputs.password2 || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-control1">
              <button className="btn2" type="submit" name="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>


        {/* Table */}
        <section id='staff-table'>
          <h2>Users Records</h2>
          {loading && <Spinner/> } 
          {errorLoading && <p className="alert alert-primary" role="alert">{errorLoading}</p>}
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
      <Link className='col-md-4' to={`/edit-staff/${user.id}`}><FaEdit /></Link>
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
     );
}
 
export default ManageStaff;