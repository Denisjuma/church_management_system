import {
    ADD_EXPENSE_REQUEST,
    ADD_EXPENSE_SUCCESS,
    ADD_EXPENSE_FAIL,
    FETCH_EXPENSE_REQUEST,
    FETCH_EXPENSE_SUCCESS,
    FETCH_EXPENSE_FAIL,
} from "../constants/expenseConstants";

const initialFetchState = {
    loading: false,
    expenses: [],
    error: null,
};

export const fetchExpensesReducer = (state = initialFetchState, action) => {
    switch (action.type) {
        case FETCH_EXPENSE_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_EXPENSE_SUCCESS:
            return { ...state, loading: false, expenses: action.payload };
        case FETCH_EXPENSE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const initialAddState = {
    loading: false,
    addExpenses: [],
    error: null,
};

export const addExpenseReducers = (state = initialAddState, action) => {
    switch (action.type) {
        case ADD_EXPENSE_REQUEST:
            return { ...state, loading: true, error: null };
        case ADD_EXPENSE_SUCCESS:
            return { ...state, loading: false, addExpenses: action.payload };
        case ADD_EXPENSE_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
