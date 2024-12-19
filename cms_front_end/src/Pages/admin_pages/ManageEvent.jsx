import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaUsers, FaBackward , FaBars, FaUser,FaCalendarAlt, FaEdit, FaTrash} from "react-icons/fa";
import { Collapse } from "bootstrap"; // Import Collapse component from Bootstrap
import { UserData, deleteUser, GetUserData } from "../../actions/userActions";
import Spinner from "../../Components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { ListEvents } from "../../actions/eventActions";

const ManageEvent = () => {

  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { error, loading, events } = eventList;

  useEffect(() => {
  dispatch(ListEvents())
  }, [dispatch]);

  useEffect(() => {
    if (events) {
      console.log("Announcement data:", events);
    }
  }, [events]);

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
        if (window.confirm("Are you sure you want to delete this user?")) {
          dispatch(deleteUser(id)).then(() => dispatch(UserData())); // Refresh data after deletion
        }
      };

      const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "..."; // Append ellipsis for truncated text
        } else {
          return text;
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
                <FaCalendarAlt className="mr-2" /> View Events
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
              <section id="staff-table">
            <h2>Events Records</h2>
            {loading && <Spinner />}
            {error && (
              <p className="alert alert-primary" role="alert">
                {error}
              </p>
            )}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Expire Date</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {events &&
                  events.map((event, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{ <img
                    src={`http://localhost:8000${event.image}`}
                    className="card-img-top image-fluid"
                    height="200"
                    alt={event.title}
                  />}</td>
                      <td>{event.Title}</td>
                      <td>{truncateText(event.description, 90)}</td>
                      <td>{event.end_date}</td>
                      <td>
                        <div className="container">
                          <div className="row">
                            <Link
                              className="col-md-4"
                              to={`/edit-event/${event.id}`}
                            >
                              <FaEdit />
                            </Link>
                            <Link
                              className="col-md-4"
                              style={{ color: "red" }}
                              to="#"
                              onClick={() => handleDelete(event.id)}
                            >
                              <FaTrash />
                            </Link>
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
 
export default ManageEvent;