import React from "react";
import Navbar from "./Navbar";

const Services = () => {
  return (
    <>
   <Navbar />
    <section className="bg-light" id="service">
      <div className="container py-5">
        <h1 className="text-center mb-5">Church Services</h1>
        <div className="row">
          <div className="col-md-3 col-12">
            <div className="card service-card">
              <div className="card-body">
                <i className="bx bxs-church service-icon"></i>
                <h5 className="card-title text-center">Worship Services</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="card service-card">
              <div className="card-body">
                <i className="bx bxs-shower service-icon"></i>
                <h5 className="card-title text-center">Baptism Services</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="card service-card">
              <div className="card-body">
                <i className="bx bx-icon bx-male-female service-icon"></i>
                <h5 className="card-title text-center">Marriage Services</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="card service-card">
              <div className="card-body">
                <i className="bx bxs-time-five service-icon"></i>
                <h5 className="card-title text-center">Prayer Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
