// src/reducers/reportReducer.js
import {
  FETCH_FINANCIAL_REPORT_REQUEST,
  FETCH_FINANCIAL_REPORT_SUCCESS,
  FETCH_FINANCIAL_REPORT_FAILURE,
} from "../constants/reportConstants";

export const reportReducers = (state = { report: [] }, action) => {
  switch (action.type) {
    case FETCH_FINANCIAL_REPORT_REQUEST:
      return { loading: true, report: [] };
    case FETCH_FINANCIAL_REPORT_SUCCESS:
      return { loading: false, report: action.payload };
    case FETCH_FINANCIAL_REPORT_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
