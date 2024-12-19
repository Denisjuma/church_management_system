import axios from "axios";
import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
  EVENT_UPDATE_FAIL,
  EVENT_UPDATE_SUCCESS,
  EVENT_UPDATE_REQUEST,
} from "../constants/eventDetailsConstant";

export const eventDetails = (eventId) => async (dispatch) => {
  try {
    dispatch({ type: EVENT_DETAILS_REQUEST });
    const data = await axios.get(
      `http://localhost:8000/api/getEvent/${eventId}/`
    );
    dispatch({ type: EVENT_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: EVENT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

//update Events
export const updateEvents = (eventId, userData, callback) => async (dispatch, getState) => {
  try {
    dispatch({ type:  EVENT_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://127.0.0.1:8000/api/event/${eventId}/update/`, userData, config);

    dispatch({ type: EVENT_UPDATE_SUCCESS, payload: data });
    if (callback) callback(); 
  } catch (error) {
    dispatch({
      type:   EVENT_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};

