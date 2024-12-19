import axios from "axios";
import {
  FETCH_FINANCIAL_REPORT_REQUEST,
  FETCH_FINANCIAL_REPORT_SUCCESS,
  FETCH_FINANCIAL_REPORT_FAILURE,
} from "../constants/reportConstants";

export const fetchFinancialReport = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_FINANCIAL_REPORT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    if (!userInfo || !userInfo.token) {
      throw new Error("Not authenticated");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:8000/info/financial-report/",
      config
    );

    dispatch({
      type: FETCH_FINANCIAL_REPORT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Unauthorized access, user might need to log in again
      dispatch({
        type: FETCH_FINANCIAL_REPORT_FAILURE,
        payload: "Unauthorized access, please log in again.",
      });
    } else if (error.response) {
      // Server responded with an error status code
      dispatch({
        type: FETCH_FINANCIAL_REPORT_FAILURE,
        payload: error.response.data.detail || error.message,
      });
    } else {
      // Network error or other errors
      dispatch({
        type: FETCH_FINANCIAL_REPORT_FAILURE,
        payload: error.message,
      });
    }
  }
};
