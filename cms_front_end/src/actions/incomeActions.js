// src/actions/incomeActions.js
import axios from "axios";
import {
  FETCH_INCOME_REQUEST,
  FETCH_INCOME_SUCCESS,
  FETCH_INCOME_FAILURE,
  ADD_INCOME_REQUEST,
  ADD_INCOME_SUCCESS,
  ADD_INCOME_FAILURE,
} from "../constants/incomeConstants";

export const fetchIncomes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_INCOME_REQUEST });
    
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const data = await axios.get("http://localhost:8000/info/incomes/", config); // Replace with your API endpoint
    dispatch({ type: FETCH_INCOME_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: FETCH_INCOME_FAILURE,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addIncome = (incomeData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_INCOME_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.post(
      "http://localhost:8000/info/incomes/",
      incomeData,
      config
    ); // Replace with your API endpoint
    dispatch({ type: ADD_INCOME_SUCCESS, payload: response.data });
    dispatch(fetchIncomes()); // Refetch incomes after adding a new one
  } catch (error) {
    dispatch({
      type: ADD_INCOME_FAILURE,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
