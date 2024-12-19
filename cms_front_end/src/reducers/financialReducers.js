// src/reducers/financialReducers.js
import {
    FETCH_FINANCIAL_DATA_REQUEST,
    FETCH_FINANCIAL_DATA_SUCCESS,
    FETCH_FINANCIAL_DATA_FAILURE,
  } from '../constants/financialConstants';
  
  const initialState = {
    loading: false,
    financialData: {},
    error: '',
  };
  
  export const financialReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_FINANCIAL_DATA_REQUEST:
        return { ...state, loading: true };
      case FETCH_FINANCIAL_DATA_SUCCESS:
        return { loading: false, financialData: action.payload, error: '' };
      case FETCH_FINANCIAL_DATA_FAILURE:
        return { loading: false, financialData: {}, error: action.payload };
      default:
        return state;
    }
  };
  