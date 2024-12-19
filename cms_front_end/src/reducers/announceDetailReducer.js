import {
    ANNOUNCEMENT_DETAILS_FAIL,
    ANNOUNCEMENT_DETAILS_REQUEST,
    ANNOUNCEMENT_DETAILS_SUCCESS,
    ANNOUNCEMENT_UPDATE_FAIL,
    ANNOUNCEMENT_UPDATE_SUCCESS,
    ANNOUNCEMENT_UPDATE_REQUEST,
  } from "../constants/announceDetailsConstants";

  export const announcementDetailsReducer = (state = {announcement:[]}, action) => {
    switch(action.type){
        case  ANNOUNCEMENT_DETAILS_REQUEST:
            return {loading: true, announcement:[]}
        case ANNOUNCEMENT_DETAILS_SUCCESS:
            return {loading: false, announcement:action.payload}
        case ANNOUNCEMENT_DETAILS_FAIL:
            return {loading: false, error:action.payload}

            default:
                return state
    }
  }

  //User UpdateUser Reducer
export const UpdateAnnouncementReducer =(state = { announcements:[]}, action)=>{
    switch(action.type){
      case ANNOUNCEMENT_UPDATE_REQUEST:
        return { loading: true, announcements:[]};
      case  ANNOUNCEMENT_UPDATE_SUCCESS:
        return { loading: false, announcements: action.payload };
      case   ANNOUNCEMENT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };