import React from "react";

const Donate = () => {
  return (
    <section className="donate-section">
      <div className="container">
        <h2 className="donate-heading text-center">Donate to Our Church</h2>
        <form className="donate-form" action="submit_donation.php" method="post">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="amount" className="form-label">Donation Amount ($):</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-input"
              min="1"
              step="any"
              required
            />
          </div>

          <div className="form-group">
         <label htmlFor="payment_method" className="form-label">Payment Method:</label>
              <select id="payment_method" name="payment_method" className="form-input" required>
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
              <option value="cash">Cash</option>
            </select> 
          </div>

          <button type="submit" className="donate-button">Donate Now</button>
        </form>
      </div>
    </section>
  );
};

export default Donate;
