import {Link} from 'react-router-dom'
import React from "react";

const Carousel = () => {
  return (
    <section className="container-fluid bg-image text-center">
      <div className="row">
        <div className="col-md-12">
          <h2 className="home-title text-white">Welcome to Our Church</h2>
          <p className="home-description text-white">
            Come worship with us and experience God love
          </p>
          <Link to = "/about">
          <button className="btn btn-primary btn-bottom btn-lg">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
