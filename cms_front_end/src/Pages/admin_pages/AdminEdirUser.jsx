import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getUserDetails, updateUser } from '../../actions/userActions';
import { FaUsers, FaBackward, FaBars, FaUser } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Spinner from "../../Components/Spinner";

const AdminEditUser = () => {
  const [inputs, setInputs] = useState({
    roles: "", 
    first_name: "",
    last_name: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      const collapse = Collapse.getInstance(collapseElement);
      collapse.toggle(); // Toggle the collapse element
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  useEffect(() => {
    if (!user || user.id !== parseInt(userId)) {
      dispatch(getUserDetails(userId));
    }
  }, [dispatch, userId, user]);

  useEffect(() => {
    if (user && user.id === parseInt(userId)) {
      setInputs({
        roles: user.roles || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(userId, inputs, () => {
      // Callback function after update
      dispatch(getUserDetails(userId));  // Fetch updated user details
      navigate("/manage-user");
    }));
  };

  return (
    <div id="wrapper" className={sidebarOpen ? "toggled" : ""}>
      <center>
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Admin Dashboard</h3>
          </div>
          <hr />
          <ul className="list-unstyled components">
            <li>
              <Link to="#">
                <FaUsers className="mr-2" /> Update Users
              </Link>
            </li>
            <li>
              <Link to="/manage-user">
                <FaBackward className="mr-2" /> Back
              </Link>
            </li>
          </ul>
        </nav>
      </center>
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-info"
              id="sidebarCollapse"
              type="button"
              onClick={handleSidebarToggle}
            >
              <FaBars />
            </button>
            <p className="text-secondary">
              <FaUser /> Programmer
            </p>
          </div>
        </nav>
        <div className="container-fluid">
          <section>
            <h2>Update User Records</h2>
            {loading ? (
              <Spinner />
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    value={inputs.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    value={inputs.last_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    User Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="roles"
                    id="role"
                    value={inputs.roles}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-success">Update</button>
                </div>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminEditUser;
