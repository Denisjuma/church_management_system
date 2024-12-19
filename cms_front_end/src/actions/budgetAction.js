// src/actions/incomeActions.js
import axios from "axios";
import {
  FETCH_BUDGET_REQUEST,
  FETCH_BUDGET_SUCCESS,
  FETCH_BUDGET_FAILURE,
  ADD_BUDGET_REQUEST,
  ADD_BUDGET_SUCCESS,
  ADD_BUDGET_FAILURE,
} from "../constants/budgetConstants";

export const fetchBudgets = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_BUDGET_REQUEST });
    
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const data = await axios.get("http://localhost:8000/info/budgets/", config); // Replace with your API endpoint
    dispatch({ type: FETCH_BUDGET_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: FETCH_BUDGET_FAILURE,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addBudget = (budgetData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_BUDGET_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.post(
      "http://localhost:8000/info/budgets/",
      budgetData,
      config
    ); // Replace with your API endpoint
    dispatch({ type: ADD_BUDGET_SUCCESS, payload: response.data });
    dispatch(fetchBudgets()); // Refetch incomes after adding a new one
  } catch (error) {
    dispatch({
      type: ADD_BUDGET_FAILURE,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
