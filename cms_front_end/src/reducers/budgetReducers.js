// src/reducers/incomeReducers.js
  import {
    FETCH_BUDGET_REQUEST,
    FETCH_BUDGET_SUCCESS,
    FETCH_BUDGET_FAILURE,
    ADD_BUDGET_REQUEST,
    ADD_BUDGET_SUCCESS,
    ADD_BUDGET_FAILURE,
    SET_NEW_BUDGET,
    RESET_NEW_BUDGET,
  } from "../constants/budgetConstants";
  
  const initialState = {
    loading: false,
    budgets: [],
    error: '',
    addBudgetLoading: false,
    addBudgetError: '',
    newBudget: {
      date: '',
      amount: '',
      category: '',
      description: ''
    },
  };
  
  export const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BUDGET_REQUEST:
        return { ...state, loading: true };
      case FETCH_BUDGET_SUCCESS:
        return { ...state, loading: false, budgets: action.payload, error: '' };
      case FETCH_BUDGET_FAILURE:
        return { ...state, loading: false, budgets: [], error: action.payload };
      case ADD_BUDGET_REQUEST:
        return { ...state, addBudgetLoading: true };
      case ADD_BUDGET_SUCCESS:
        return { ...state, addBudgetLoading: false, addBudgetError: '' };
      case ADD_BUDGET_FAILURE:
        return { ...state, addBudgetLoading: false, addBudgetError: action.payload };
      case SET_NEW_BUDGET:
        return { 
          ...state, 
          newBudget: { 
            ...state.newBudget, 
            ...action.payload 
          } 
        };
      case RESET_NEW_BUDGET:
        return { 
          ...state, 
          newBudget: initialState.newBudget 
        };
      default:
        return state;
    }
  };
  