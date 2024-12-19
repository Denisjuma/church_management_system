import { useEffect } from "react";
import { Link } from "react-router-dom";
import { listAnnouncements } from "../actions/announceActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

const Announcement = () => {
 
  const dispatch = useDispatch();
  const announcementList = useSelector((state) => state.announcementList);
  const { error, loading, announcements } = announcementList;
  useEffect(() => {
    dispatch(listAnnouncements());
  }, [dispatch]);
  console.log(announcements);

  const truncateText = (text, maxLength) => {
    if ( text && text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Append ellipsis for truncated text
    } else {
      return text;
    }
  };

  return (
    <>
    <Navbar />
    
   
    <section className="bg-light" id="Announcement announcement-mt">
      <h1 className="text-center my-5 ">Church Announcement</h1>
      <div className="container">
      
         {loading && <Spinner/> } 
        
          {error && <p className="alert alert-primary" role="alert">{error}</p>}
        
          <div className="row">
            {announcements && announcements.map((item) => (
              <div className="col-md-4 col-12" key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {truncateText(item.content, 60)}
                    </p>
                    <p>{item.publication_date}</p>
                    <Link
                      to={`/getAnnouncement/${item.id}`}
                      className="btn btn-primary"
                    >
                      
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>

    </>
  );
};

export default Announcement;
