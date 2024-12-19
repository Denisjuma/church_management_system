import {
  ANNOUNCEMENT_LIST_FAIL,
  ANNOUNCEMENT_LIST_REQUEST,
  ANNOUNCEMENT_LIST_SUCCESS,
} from "../constants/announceConstants";

export const announcementListReducers = (state = {announcements:[]}, action)=>{
            switch(action.type){
                case  ANNOUNCEMENT_LIST_REQUEST:
                    return {loading: true, announcements:[]}
                case ANNOUNCEMENT_LIST_SUCCESS:
                    return {loading: false, announcements:action.payload}
                case ANNOUNCEMENT_LIST_FAIL:
                    return {loading: false, error:action.payload}

                    default:
                        return state
            }
}