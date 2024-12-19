import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaBackward, FaBars, FaUser } from "react-icons/fa";
import { Collapse } from "bootstrap";
import { submitDonationRequest } from '../../actions/donationAction'; // Ensure correct import path

const Member_Donate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    donor: '',
    amount: '',
    date: '',
    description: '',
    contact_info: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData); // Debug log
    try {
      await dispatch(submitDonationRequest(formData));
      navigate('/thank-you');
    } catch (err) {
      console.error("Error submitting donation:", err); // Debug log
    }
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
    const collapseElement = document.getElementById("collapseWidthExample");
    if (collapseElement) {
      const collapse = Collapse.getInstance(collapseElement);
      collapse.toggle();
    }
  };

  return (
    <div id="wrapper" className={sidebarOpen ? "toggled" : ""}>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Member Dashboard</h3>
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
            <p className="text-secondary"><FaUser /> hamadi</p>
          </div>
        </nav>
        <div className="donation-form-container">
          <h2>Donate Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="donor">Donor Name:</label>
              <input
                type="text"
                id="donor"
                className="form-control"
                value={formData.donor}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contact_info">Contact Info:</label>
              <input
                type="text"
                id="contact_info"
                className="form-control"
                value={formData.contact_info}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Donation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Member_Donate;
