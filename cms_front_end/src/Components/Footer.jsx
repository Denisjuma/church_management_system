import React from "react";
import {Link, Outlet} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
        Welcome to our Seventh-day Adventist Church! We are a vibrant community
        of believers dedicated to following Jesus Christ and sharing His love
        with others. Our church family is committed to living out the values of
        the Bible and spreading the good news of salvation.
      </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <address>
              123 Main Street <br />
              City, State ZIP <br />
              Email: example@example.com <br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
      </div>
      <div className="container text-center mt-3">
        <p className="mb-0">&copy; 2024 CMS. All rights reserved.</p>
      </div>
    </footer>
    <Outlet />
    </>
  );
};

export default Footer;
