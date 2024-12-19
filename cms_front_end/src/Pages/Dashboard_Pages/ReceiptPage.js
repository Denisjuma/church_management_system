import React from "react";
import { useParams } from "react-router-dom";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { useReactToPrint } from "react-to-print";

const ReceiptPage = () => {
  const { donor, amount, description, contact_info, category, date } = useParams();

  const printComponentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => printComponentRef.current,
    documentTitle: 'Receipt',
    removeAfterPrint: true,
  });

  return (
    <div className="receipt-container">
      <div ref={printComponentRef} className="receipt-content">
        <h2>Receipt</h2>
        <p>
          <strong>Donor:</strong> {donor}<br />
          <strong>Amount:</strong> {amount}<br />
          <strong>Description:</strong> {description}<br />
          <strong>Contact Info:</strong> {contact_info}<br />
          <strong>Category:</strong> {category}<br />
          <strong>Date:</strong> {date}
        </p>
      </div>
      <div className="actions">
        <button className="btn btn-secondary" onClick={handlePrint}>
          Print Receipt
        </button>
        <WhatsappShareButton
          url={window.location.href} // Share current page URL
          title={`Donation Details:\nDonor: ${donor}\nAmount: ${amount}\nDescription: ${description}\nContact Info: ${contact_info}\nCategory: ${category}\nDate: ${date}`}
        >
          <WhatsappIcon size={32} round />
          Share via WhatsApp
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ReceiptPage;
