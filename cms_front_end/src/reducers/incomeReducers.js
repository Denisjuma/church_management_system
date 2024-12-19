// src/reducers/incomeReducers.js
import {
    FETCH_INCOME_REQUEST,
    FETCH_INCOME_SUCCESS,
    FETCH_INCOME_FAILURE,
    ADD_INCOME_REQUEST,
    ADD_INCOME_SUCCESS,
    ADD_INCOME_FAILURE,
    SET_NEW_INCOME,
    RESET_NEW_INCOME,
  } from '../constants/incomeConstants';
  
  const initialState = {
    loading: false,
    incomes: [],
    error: '',
    addIncomeLoading: false,
    addIncomeError: '',
    newIncome: {
      date: '',
      amount: '',
      category: '',
      description: ''
    },
  };
  
  export const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INCOME_REQUEST:
        return { ...state, loading: true };
      case FETCH_INCOME_SUCCESS:
        return { ...state, loading: false, incomes: action.payload, error: '' };
      case FETCH_INCOME_FAILURE:
        return { ...state, loading: false, incomes: [], error: action.payload };
      case ADD_INCOME_REQUEST:
        return { ...state, addIncomeLoading: true };
      case ADD_INCOME_SUCCESS:
        return { ...state, addIncomeLoading: false, addIncomeError: '' };
      case ADD_INCOME_FAILURE:
        return { ...state, addIncomeLoading: false, addIncomeError: action.payload };
      case SET_NEW_INCOME:
        return { 
          ...state, 
          newIncome: { 
            ...state.newIncome, 
            ...action.payload 
          } 
        };
      case RESET_NEW_INCOME:
        return { 
          ...state, 
          newIncome: initialState.newIncome 
        };
      default:
        return state;
    }
  };
  