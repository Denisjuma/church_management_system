import axios from "axios";
import {
  ANNOUNCEMENT_LIST_FAIL,
  ANNOUNCEMENT_LIST_SUCCESS,
  ANNOUNCEMENT_LIST_REQUEST,
} from "../constants/announceConstants";

export const listAnnouncements = () => async (dispatch) => {
  try {
    dispatch({ type: ANNOUNCEMENT_LIST_REQUEST });
    const data = await axios.get("http://localhost:8000/api/getAnnouncements/");

    dispatch({ type: ANNOUNCEMENT_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: ANNOUNCEMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
