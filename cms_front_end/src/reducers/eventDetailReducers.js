import {
  EVENT_DETAILS_FAIL,
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_UPDATE_FAIL,
  EVENT_UPDATE_REQUEST,
  EVENT_UPDATE_SUCCESS,
} from "../constants/eventDetailsConstant";

export const eventDetailReducer = (state = {event:[]}, action) => {
    switch(action.type){
        case EVENT_DETAILS_REQUEST:
            return {loading: true, event:[]}
        case EVENT_DETAILS_SUCCESS:
            return {loading: false, event: action.payload}
        case EVENT_DETAILS_FAIL:
            return {loading: false, error:action.payload}

            default:
                    return state
    }
}

  //User UpdateUser Reducer
  export const UpdateEventReducer =(state = { events:[]}, action)=>{
    switch(action.type){
      case EVENT_UPDATE_REQUEST:
        return { loading: true, events:[]};
      case   EVENT_UPDATE_SUCCESS:
        return { loading: false, events: action.payload };
      case    EVENT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };