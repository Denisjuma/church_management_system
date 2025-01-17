import {
  EVENT_LIST_FAIL,
  EVENT_LIST_SUCCESS,
  EVENT_LIST_REQUEST,
} from "../constants/eventConstants";

export const eventListReducers = (state = {events:[]},  action)=>{

        switch(action.type){
            case EVENT_LIST_REQUEST:
                return {loading: true, events:[]}
            case EVENT_LIST_SUCCESS:
                return {loading: false, events: action.payload}
            case EVENT_LIST_FAIL:
                return {loading: false, error:action.payload}

                default:
                        return state
        }
}


