import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_REFRESH_TOKEN,
  USER_DATA_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_REFRESH_TOKEN:
      return { ...state, userInfo: { ...state.userInfo, token: action.payload } };
      case USER_LOGOUT:
        return {};
    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


export const userLogoutReducer = (state = {}, action) => {
  switch (action.type) {
      case USER_LOGOUT:
          return {};
      default:
          return state;
  }
};

//User Data Reducer
export const UserDataReducer =(state = { users:[]}, action)=>{
  switch(action.type){
    case USER_DATA_REQUEST:
      return { loading: true, users:[]};
    case USER_DATA_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


//userDetails Reducer
export const userDetailsReducer = (state = { loading: true, user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



//User UpdateUser Reducer
export const UpdateUserDataReducer =(state = { users:[]}, action)=>{
  switch(action.type){
    case USER_UPDATE_REQUEST:
      return { loading: true, users:[]};
    case USER_UPDATE_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

