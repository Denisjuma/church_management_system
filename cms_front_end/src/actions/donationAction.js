import axios from "axios";
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
} from '../constants/donationConstanta';


export const fetchDonations = () => async (dispatch, getState)=>{
  try{
    dispatch({type:   FETCH_DONATION_REQUEST});
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const data = await axios.get("http://localhost:8000/api/donation/",config);

    dispatch({type: FETCH_DONATION_SUCCESS, payload: data.data})
  }
  catch(error){
      dispatch({
        type: FETCH_DONATION_FAIL, 
        payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
      })
  }

}



// Action to process donation
export const processDonation = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROCESS_DONATION_REQUEST });

    // Get userInfo from getState
    const {
      userLogin: { userInfo },
    } = getState();

    // Configure headers with authorization token
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };

    // Post the income data
    const incomeResponse = await fetch("http://localhost:8000/info/incomes/", {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(formData),
    });

    if (!incomeResponse.ok) {
      throw new Error("Failed to post income data");
    }

    const incomeData = await incomeResponse.json();

    // Ensure formData has donationId before using it
    if (!formData.donationId) {
      throw new Error("Donation ID is not provided in formData");
    }

    // Update the donation status
    const updatedDonation = {
      ...formData,
      status: "complete",
    };

    // Update donation status with PUT request using donationId
    const updateResponse = await fetch(
      `http://localhost:8000/api/donation/${formData.donationId}/`,
      {
        method: "PUT",
        headers: config.headers,
        body: JSON.stringify(updatedDonation),
      }
    );

    if (!updateResponse.ok) {
      throw new Error("Failed to update donation status");
    }

    const updatedData = await updateResponse.json();

    // Dispatch success action and fetch updated donations
    dispatch({ type: PROCESS_DONATION_SUCCESS, payload: updatedData });
    dispatch(fetchDonations()); // Refresh the donations list
  } catch (error) {
    dispatch({ type: PROCESS_DONATION_FAILURE, payload: error.message });
  }
};



export const submitDonationRequest = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: DONATION_REQUEST_INITIAL });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log('Submitting donation with data:', formData); // Debug log
    const response = await axios.post('http://localhost:8000/api/donation/', formData, config);
    
    console.log('API response:', response); // Debug log

    const { data } = response; // Ensure response structure
    dispatch({
      type: DONATION_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error('Error response:', error.response); // Debug log
    dispatch({
      type: DONATION_REQUEST_FAILURE,
      payload: error.response && error.response.data && error.response.data.message 
        ? error.response.data.message 
        : error.message,
    });
  }
};