import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {announcementDetails} from "../actions/announceDetailAction"
import Spinner from "./Spinner";
import Navbar from './Navbar';

const SingleAnnouncement = () => {
  const { AnnouncementId } = useParams();
  const dispatch = useDispatch();
  const announcementDetail = useSelector((state) => state.announcementDetail);
  const { error, loading, announcement } = announcementDetail;

  useEffect(() => {
    dispatch(announcementDetails(AnnouncementId))
  }, [dispatch,AnnouncementId]);

  console.log(announcementDetails)

  if (loading) {
    return <Spinner/>;
  }

  if (error) {
    return <p className='alert alert-primary" role="alert'>Error: {error}</p>;
  }

  return (
    <>
    
    <Navbar />

   
    <div className="container section-mt">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {announcement &&(
            <div className="card">
              {announcement.image && (
                <img
                  src={announcement.image}
                  className="card-img-top"
                  alt={announcement.title}
                />
              )}
              <div className="card-body">
                <h1 className="card-title">{announcement.title}</h1>
                <p className="card-text">{announcement.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleAnnouncement;
