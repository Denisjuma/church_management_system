// src/actions/financialActions.js
import axios from "axios";
import {
  FETCH_FINANCIAL_DATA_REQUEST,
  FETCH_FINANCIAL_DATA_SUCCESS,
  FETCH_FINANCIAL_DATA_FAILURE,
} from "../constants/financialConstants";

export const fetchFinancialData = () => async (dispatch) => {
  dispatch({ type: FETCH_FINANCIAL_DATA_REQUEST });
  try {
    const response = await axios.get(
      "http://localhost:8000/info/financial-report/"
    ); // Replace with your API endpoint
    dispatch({ type: FETCH_FINANCIAL_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FINANCIAL_DATA_FAILURE, payload: error.message });
  }
};
