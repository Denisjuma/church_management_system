// Import necessary modules and constants
import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REFRESH_TOKEN,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "../constants/userConstants";

// Function to sanitize user input
const sanitizeInput = (input) => {
  return input ? input.replace(/<[^>]*>?/gm, "") : "";
};

const sanitizeUserData = (userData) => {
  const sanitizedData = {};
  for (const key in userData) {
    sanitizedData[key] = sanitizeInput(userData[key]);
  }
  return sanitizedData;
};

// User Signup Action
export const signup = (userData) => async (dispatch) => {
  try {
    const sanitizedUserData = sanitizeUserData(userData);

    dispatch({ type: USER_SIGNUP_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/users/register/',
      sanitizedUserData,
      config
    );

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// User Login Action
export const login = (userData) => async (dispatch) => {
  try {
    const sanitizedUserData = sanitizeUserData(userData);

    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      'http://127.0.0.1:8000/api/users/login/',
      sanitizedUserData,
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Refresh Token Action
export const refreshToken = (refreshToken) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/token/refresh/`,
      { refresh: refreshToken },
      config
    );

    dispatch({ type: USER_REFRESH_TOKEN, payload: data.access });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userInfo.token = data.access;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Logout Action
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem("userInfo");
  } catch (error) {
    console.error("Logout failed", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message,
    });
  }
};

// Fetch User Data Action
export const UserData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DATA_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('http://127.0.0.1:8000/api/users/', config);

    dispatch({ type: USER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};


// Fetch User Data Action
export const GetUserData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DATA_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('http://127.0.0.1:8000/api/users/roles/', config);

    dispatch({ type: USER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};



// Delete User Action
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`http://127.0.0.1:8000/api/users/${id}/delete/`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};

// Get User Details Action
export const getUserDetails = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/`, config);

    console.log("User Details:", data); // Log the response

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};



// Update User Action
export const updateUser = (userId, userData, callback) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`http://127.0.0.1:8000/api/users/${userId}/update/`, userData, config);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    if (callback) callback(); 
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    });
  }
};

export default { logout, login, signup, UserData, updateUser, getUserDetails};
