import {
  FETCH_DONATION_REQUEST,
  FETCH_DONATION_SUCCESS,
  FETCH_DONATION_FAIL,
  PROCESS_DONATION_REQUEST,
  PROCESS_DONATION_SUCCESS,
  PROCESS_DONATION_FAILURE,
  DONATION_REQUEST_INITIAL,
  DONATION_REQUEST_SUCCESS,
  DONATION_REQUEST_FAILURE,
} from "../constants/donationConstanta";

  const initialState = {
    loading: false,
    donations: [],
    error: null,
  };
  
  export const donationReducers = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DONATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DONATION_SUCCESS:
        return {
          ...state,
          loading: false,
          donations: action.payload,
        };
      case FETCH_DONATION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case PROCESS_DONATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PROCESS_DONATION_SUCCESS:
        return {
          ...state,
          loading: false,
          donations: state.donations.map((donation) =>
            donation.id === action.payload.id ? action.payload : donation
          ),
        };
      case PROCESS_DONATION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case DONATION_REQUEST_INITIAL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case DONATION_REQUEST_SUCCESS:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case DONATION_REQUEST_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
      default:
        return state;
    }
  };
  