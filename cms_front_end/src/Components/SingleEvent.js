import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDetails } from "../actions/eventDetailAction";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const SingleEvent = () => {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const eventDetail = useSelector((state) => state.eventDetail);
  const { error, loading, event } = eventDetail;

  useEffect(() => {
    dispatch(eventDetails(eventId));
  }, [dispatch,eventId]);

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p className="alert alert-primary" role="alert">Error: {error}</p>;
  }

  return (
    <>
    
     <Navbar />
    
    <div className="container singleEvent-mt">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            {event.image ? (
              <img
                src={`http://localhost:8000${event.image}`}
                className="card-img-top"
                height="300"
                alt={event.title}
              />
            ) : (
              <div className="card-img-top placeholder-image">
                No Image Available
              </div>
            )}
            <div className="card-body">
              <h1 className="card-title">{event.Title}</h1>
              <p className="card-text">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleEvent;
