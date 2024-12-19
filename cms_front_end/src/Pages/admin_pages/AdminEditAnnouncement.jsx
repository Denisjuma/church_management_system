import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { announcementDetails, updateAnnouncements } from "../../actions/announceDetailAction";
import { FaUsers, FaBackward, FaBars, FaUser } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Spinner from "../../Components/Spinner";

const AdminEditAnnouncement = () => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    publication_date: "",
    expiration_date: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { AnnouncementId } = useParams();

  const announcementDetail = useSelector((state) => state.announcementDetail);
  const { error, loading, announcement } = announcementDetail;

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
    if (!announcement || announcement.id !== parseInt(AnnouncementId)) {
      dispatch(announcementDetails(AnnouncementId));
    }
  }, [dispatch, AnnouncementId]);

  useEffect(() => {
    if (announcement && announcement.id === parseInt(AnnouncementId)) {
      setInputs({
        title: announcement.title || "",
        content: announcement.content || "",
        publication_date: announcement.publication_date || "",
        expiration_date: announcement.expiration_date || "",
      });
    }
  }, [announcement, AnnouncementId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateAnnouncements(AnnouncementId, inputs, () => {
      // Callback function after update
      dispatch(announcementDetails(AnnouncementId));
      navigate("/manage-announcement");
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
                <FaUsers className="mr-2" /> Update Announcement
              </Link>
            </li>
            <li>
              <Link to="/manage-announcement">
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
                    name="title"
                    id="title"
                    value={inputs.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="content."
                    name="content"
                    value={inputs.content}
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
                    name="publication_date"
                    id="publication_date"
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
                    name="expiration_date"
                    id="expiration_date"
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
};

export default AdminEditAnnouncement;
