import React, {useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ListEvents } from "../actions/eventActions";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const Events = () => {
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.eventList);
  const { error, loading, events } = eventList;
  useEffect(() => {
  dispatch(ListEvents())
  }, [dispatch]);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Append ellipsis for truncated text
    } else {
      return text;
    }
  };

  return (
    <>
     <Navbar />
    <section id="event">
      <h1 className="text-center my-5">Church Events</h1>
      {loading && <Spinner/> } 
      {error && <p className="alert alert-primary" role="alert">{error}</p>}
      <div className="row">
        {events &&
          events.map((event) => (
            <div className="col-md-3 col-12" key={event.id}>
              <div className="card">
                {event.image ? (
                  <img
                    src={`http://localhost:8000${event.image}`}
                    className="card-img-top image-fluid"
                    height="200"
                    alt={event.title}
                  />
                ) : (
                  <div className="placeholder-image">No Image Available</div>
                )}
                <div className="card-body">
                  <h6 className="card-text">Event: {event.Title}</h6>
                  <p className="card-text">
                    {truncateText(event.description, 90)}
                    <Link to={`/getEvent/${event.id}`}>...Read More</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
    </>
  );
};

export default Events;
