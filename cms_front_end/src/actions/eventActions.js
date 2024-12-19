import axios from "axios";
import {
  EVENT_LIST_FAIL,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_REQUEST,
} from "../constants/eventConstants";

export const ListEvents = () => async (dispatch)=>{
        try{
          dispatch({type: EVENT_LIST_REQUEST});
          const data = await axios.get("http://localhost:8000/api/getEvents/");

          dispatch({type: EVENT_LIST_SUCCESS, payload: data.data})
        }
        catch(error){
            dispatch({
              type: EVENT_LIST_FAIL, 
              payload:
              error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
            })
        }
}