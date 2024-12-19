import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { eventDetails, updateEvents } from "../../actions/eventDetailAction";
import { FaUsers, FaBackward, FaBars, FaUser } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Spinner from "../../Components/Spinner";
const AdminEditEvent = () => {
    const [inputs, setInputs] = useState({
        Title: "",
        description: "",
        start_date: "",
        end_date: "",
      });
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const { eventId } = useParams();
    
      const eventDetail = useSelector((state) => state.eventDetail);
      const { error, loading, event } = eventDetail;
    
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
        if (!event || event.id !== parseInt(eventId)) {
          dispatch(eventDetails(eventId));
        }
      }, [dispatch, eventId]);
    
      useEffect(() => {
        if (event && event.id === parseInt(eventId)) {
          setInputs({
            Title: event.Title || "",
            description: event.description || "",
            start_date: event.start_date || "",
            end_date: event.end_date || "",
          });
        }
      }, [event, eventId]);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateEvents(eventId, inputs, () => {
          // Callback function after update
          dispatch(eventDetails(eventId));
          navigate("/manage-event");
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
                  <FaUsers className="mr-2" /> Update Event
                </Link>
              </li>
              <li>
                <Link to="/manage-event">
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
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Title"
                      id="Title"
                      value={inputs.Title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={inputs.description}
                      onChange={handleChange}
                      rows="7"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="publication_date" className="form-label">
                      Publication Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="start_date"
                      id="start_date"
                      value={inputs.publication_date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="expiration_date" className="form-label">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="end_date"
                      id="end_date"
                      value={inputs.expiration_date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                  </div>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
      );
}
 
export default AdminEditEvent;