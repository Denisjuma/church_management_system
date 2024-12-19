import axios from "axios";
import {
  ANNOUNCEMENT_DETAILS_FAIL,
  ANNOUNCEMENT_DETAILS_SUCCESS,
  ANNOUNCEMENT_DETAILS_REQUEST,
  ANNOUNCEMENT_UPDATE_FAIL,
  ANNOUNCEMENT_UPDATE_SUCCESS,
  ANNOUNCEMENT_UPDATE_REQUEST,
} from "../constants/announceDetailsConstants";

export const announcementDetails = (AnnouncementId) => async(dispatch) =>{
    try{
        dispatch({type: ANNOUNCEMENT_DETAILS_REQUEST})
        const data = await axios.get(`http://localhost:8000/api/getAnnouncement/${AnnouncementId}/`);

        dispatch({type:ANNOUNCEMENT_DETAILS_SUCCESS, payload: data.data })
    }
    catch(error){
        dispatch({
            type: ANNOUNCEMENT_DETAILS_FAIL,
            payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
        });
    }
}

//update announcement
export const updateAnnouncements = (AnnouncementId, userData, callback) => async (dispatch, getState) => {
  try {
    dispatch({ type:  ANNOUNCEMENT_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://127.0.0.1:8000/api/announcement/${AnnouncementId}/update/`, userData, config);

    dispatch({ type: ANNOUNCEMENT_UPDATE_SUCCESS, payload: data });
    if (callback) callback(); 
  } catch (error) {
    dispatch({
      type:  ANNOUNCEMENT_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};
