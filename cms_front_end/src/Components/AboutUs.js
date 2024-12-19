import React from "react";
import {Link} from 'react-router-dom'
import Footer from  './Footer'

const AboutUs = () => {
  return (
    <>
   
    <div className="container cont-1">
    <Link to="/" className="btn btn-dark btn-small">Go Back</Link>
      <div className="about-us">
        <h2 className="section-title">
          About The Seventh-day Adventist Church
        </h2>
        <div className="content-2">
          <h3 className="subtitle">History</h3>
          <p>
            The Seventh-day Adventist Church traces its roots to the Millerite
            movement of the 19th century, led by William Miller. Miller
            predicted that Jesus Christ would return to Earth in 1844. When this
            event did not occur as expected, a group of Millerites, led by Ellen
            G. White and other pioneers, re-evaluated their beliefs and formed
            what would become the Seventh-day Adventist Church. The denomination
            officially organized in 1863 in Battle Creek, Michigan, United
            States.
          </p>
          <h3 className="subtitle">Beliefs</h3>
          <ul className="ul-class">
            <li>The authority of Scripture as the inspired Word of God.</li>
            <li>
              The doctrine of the Trinity—God the Father, God the Son (Jesus
              Christ), and God the Holy Spirit.
            </li>
            <li>
              The belief in the creation of the world by God in six literal
              days.
            </li>
            <li>
              The observance of the seventh-day Sabbath (Saturday) as a day of
              rest and worship.
            </li>
            <li>
              The second coming of Jesus Christ as the culmination of human
              history.
            </li>
            <li>
              The sanctuary doctrine, emphasizing Jesus Christ's ministry in
              heaven as our High Priest
            </li>
            <li>
              The doctrine of the investigative judgment, a pre-advent judgment
              of professed believers.
            </li>
            <li>
              The concept of healthful living, including abstaining from harmful
              substances like tobacco and alcohol, and promoting a vegetarian
              diet.
            </li>
            <li>
              The belief in the importance of evangelism and mission work to
              share the gospel with the world.
            </li>
            <li>
              The doctrine of the resurrection and eternal life for believers.
            </li>
          </ul>
          <h3 className="subtitle">Mission and Outreach</h3>
          <p>
            Seventh-day Adventists are known for their commitment to health,
            education, and humanitarian work. They operate a worldwide network
            of hospitals, clinics, schools, universities, and humanitarian
            organizations, aiming to address physical, mental, and spiritual
            needs. The church also engages in evangelistic efforts, Bible study
            programs, and community outreach initiatives to share the message of
            hope and salvation.
          </p>
          <h3 className="subtitle">Organization</h3>
          <p>
            The Seventh-day Adventist Church operates on a hierarchical
            organizational structure, with a General Conference at the global
            level overseeing divisions, unions, conferences, and local churches.
            Each level of organization has its own administrative
            responsibilities and functions, working together to advance the
            mission of the church.
          </p>
        </div>
      </div>
    </div>
    <Footer /> 
    </>
  );
};

export default AboutUs;
