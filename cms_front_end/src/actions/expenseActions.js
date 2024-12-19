// src/actions/expenseActions.js
import axios from "axios";
import {
  FETCH_EXPENSE_REQUEST,
  FETCH_EXPENSE_SUCCESS,
  FETCH_EXPENSE_FAIL,
  ADD_EXPENSE_REQUEST,
  ADD_EXPENSE_SUCCESS,
  ADD_EXPENSE_FAIL,
} from "../constants/expenseConstants";


export const fetchExpenses = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_EXPENSE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('http://localhost:8000/info/expenses', config);
    dispatch({ type: FETCH_EXPENSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_EXPENSE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const addExpense = (expense) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_EXPENSE_REQUEST });
    
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:8000/info/expenses/",
      expense,
      config
    );
    
    dispatch({ type: ADD_EXPENSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ 
      type: ADD_EXPENSE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};
