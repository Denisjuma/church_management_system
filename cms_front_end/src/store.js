import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { announcementListReducers } from "./reducers/announceReducers";
import { eventDetailReducer, UpdateEventReducer} from "./reducers/eventDetailReducers";
import { eventListReducers } from "./reducers/eventReducers";
import { announcementDetailsReducer, UpdateAnnouncementReducer } from "./reducers/announceDetailReducer";
import { userLoginReducer, userSignupReducer } from "./reducers/userReducers";
import { financialReducer } from "./reducers/financialReducers";
import { incomeReducer } from "./reducers/incomeReducers";
import { reportReducers } from "./reducers/reportReducer";
import {
  fetchExpensesReducer,
  addExpenseReducers,
} from "../src/reducers/expenseReducer";
import { budgetReducer } from "../../cms_front_end/src/reducers/budgetReducers";
import { UserDataReducer } from "../../cms_front_end/src/reducers/userReducers";
import { UpdateUserDataReducer } from "../../cms_front_end/src/reducers/userReducers";
import { userDetailsReducer } from "../../cms_front_end/src/reducers/userReducers";
import {donationReducers} from '../src/reducers/donationReducers';


const reducer = combineReducers({
  announcementList: announcementListReducers,
  eventList: eventListReducers,
  eventDetail: eventDetailReducer,
  announcementDetail: announcementDetailsReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  financial: financialReducer,
  income: incomeReducer,
  reports: reportReducers,
  fetchExpenses: fetchExpensesReducer,
  addExpense: addExpenseReducers,
  budget: budgetReducer,
  userList: UserDataReducer,
  updateUser: UpdateUserDataReducer,
  userDetails: userDetailsReducer,
  updateAnnouncement: UpdateAnnouncementReducer,
  updateEvents: UpdateEventReducer,
  donationData: donationReducers,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
