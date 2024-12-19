import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./Components/Home";
import RegisterForm from "./Pages/RegisterForm";
import Form from "./Pages/Form";
import SingleEvent from "./Components/SingleEvent";
import SingleAnnouncement from "./Components/SingleAnnouncement";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Events from "./Components/Events";
import Donate from "./Components/Donate";
import ContactUs from "./Components/ContactUs";
import Announcement from "./Components/Announcement";
import Register from "./Pages/Register";
import Admin_Dashboard from "./Pages/Admin_Dashboard";
import Member_Dashboard from "./Pages/Member_Dashboard";
import Accountant_Dashboard from "./Pages/Accountant_Dashboard";
import Secretary_Dashboard from "./Pages/Secretary_Dashboard";
import Pastor_Dashboard from "./Pages/Pastor_Dashboard";
import IncomeManagement from "./Pages/Dashboard_Pages/Income_Management";
import ExpenseManagement from "./Pages/Dashboard_Pages/ExpenseManagement";
import BudgetManagement from "./Pages/Dashboard_Pages/BudgetManagement";
import FinancialReport from "./Pages/Dashboard_Pages/FinancialReport";
import DonationManagement from "./Pages/Dashboard_Pages/DonationManagement";
import ManageStaff from "./Pages/admin_pages/ManageStaff";
import ManageUser from "./Pages/admin_pages/ManageUser_page";
import ManageAnnouncement from "./Pages/admin_pages/ManageAnnouncement";
import ManageEvent from "./Pages/admin_pages/ManageEvent";
import Feedback from "./Pages/admin_pages/Feedback";
import AdminEditUser from './Pages/admin_pages/AdminEdirUser';
import AdminEditStaff from "./Pages/admin_pages/AdminEditStaff";
import AdminEditAnnouncement from "./Pages/admin_pages/AdminEditAnnouncement";
import AdminEditEvent from "./Pages/admin_pages/AdminEditEvent";
import ReceiptPage from "./Pages/Dashboard_Pages/ReceiptPage";
import Member_Account_Page from "./Pages/member_pages/Member_Account";
import Member_Donate from "./Pages/member_pages/Member_Donate";
import Member_Request from "./Pages/member_pages/Member_Request";
import MemberFeedback from "./Pages/member_pages/MemberFeedback";
function App() {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <BrowserRouter>
            
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route exact  path="/getEvent/:eventId" element={<SingleEvent />} />
          <Route exact  path="/getAnnouncement/:AnnouncementId" element={<SingleAnnouncement />} />
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<Form />} />
          <Route exact path="/logout" element={<logout />} />
          <Route exact path="/reg" element={<Register />} />
          <Route exact path="/admin-dashboard" element={<Admin_Dashboard />} />
          <Route exact path="/member-dashboard" element={<Member_Dashboard />} />
          <Route exact path="/accountant-dashboard" element={<Accountant_Dashboard />} />
          <Route exact path="/secretary-dashboard" element={<Secretary_Dashboard />} />
          <Route exact path="/pastor-dashboard" element={<Pastor_Dashboard />} />
          <Route exact path="/income-management" element={<IncomeManagement />} />
          <Route exact path="/expense-management" element={<ExpenseManagement />} />
          <Route exact path="/budget-management" element={<BudgetManagement />} />
          <Route exact path="/financial-reports" element={<FinancialReport  />} />
          <Route exact path="/donation-management" element={<DonationManagement  />} />
          <Route exact path="/manage-staff" element={<ManageStaff  />} />
          <Route exact path="/manage-user" element={<ManageUser  />} />
          <Route exact path="/manage-announcement" element={<ManageAnnouncement  />} />
          <Route exact path="/manage-event" element={<ManageEvent />} />
          <Route exact path="/manage-feedback" element={<Feedback />} />
          <Route exact path="/edit-user/:userId" element={<AdminEditUser />} />
          <Route exact path="/edit-staff/:userId" element={<AdminEditStaff />} />
          <Route exact path="/edit-announcement/:AnnouncementId" element={<AdminEditAnnouncement />} />
          <Route exact path="/edit-event/:eventId" element={<AdminEditEvent />} />
          <Route path="/receipt/:donor/:amount/:description/:contact_info/:category/:date" element={<ReceiptPage />} /> {/* Define route for ReceiptPage */}
          <Route exact path="/profile" element={<Member_Account_Page />} />
          <Route exact path="/donations" element={<Member_Donate />} />
          <Route exact path="/prayer-requests" element={<Member_Request />} />
          <Route exact path="/member-feedback" element={<MemberFeedback />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
