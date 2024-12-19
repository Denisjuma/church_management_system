import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonations, processDonation } from "../../actions/donationAction";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useNavigation
import { FaTimes } from "react-icons/fa";
import "../../Pages/Dashboard_Pages/donationForm.css";

const DonationManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { error, loading, donations } = useSelector((state) => state.donationData);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    donationId: "",
    amount: "",
    date: "",
    donor: "",
    description: "",
    contact_info: "",
    category: "",
  });

  useEffect(() => {
    dispatch(fetchDonations());
  }, [dispatch]);

  const handleProcessClick = (donation) => {
    setFormData({
      donationId: donation.id,
      amount: donation.amount,
      date: new Date(donation.date).toISOString().split("T")[0],
      donor: donation.donor,
      description: donation.description,
      contact_info: donation.contact_info,
      category: donation.category,
    });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const adjustedFormData = { ...formData };

    await dispatch(processDonation(adjustedFormData));
    setShowForm(false);

    // Redirect to receipt page with params
    navigate(`/receipt/${formData.donor}/${formData.amount}/${encodeURIComponent(formData.description)}/${formData.contact_info}/${formData.category}/${formData.date}`);
  };

  const handleCancelClick = () => {
    setFormData({
      donationId: "",
      amount: "",
      date: "",
      donor: "",
      description: "",
      contact_info: "",
      category: "",
    });
    setShowForm(false);
  };

  return (
    <div className="donation-management">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Donation Management</h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="#Donation-Request">Donation Request</a>
          </li>
          <li>
            <Link to="/accountant-dashboard">Back</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h2 id="Donation-Request">Donation Request</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Donor</th>
              <th>Contact</th>
              <th>Description</th>
              <th>Status</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {donations &&
              donations.map((donation, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: donation.status === "complete" ? "lightgreen" : "white",
                  }}
                >
                  <td>{new Date(donation.date).toLocaleDateString()}</td>
                  <td>{donation.amount}</td>
                  <td>{donation.donor}</td>
                  <td>{donation.contact_info}</td>
                  <td>{donation.description}</td>
                  <td>{donation.status}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleProcessClick(donation)}
                    >
                      Process
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {showForm && (
          <div className="container-form">
            <div className="form-header">
              <h2>Process Donation Request</h2>
              <button
                className="btn btn-link cancel-icon"
                onClick={handleCancelClick}
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  className="form-control"
                  value={formData.amount}
                  onChange={handleFormChange}
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
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="donor">Donor:</label>
                <input
                  type="text"
                  id="donor"
                  className="form-control"
                  value={formData.donor}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleFormChange}
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
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input
                  type="text"
                  id="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationManagement;
