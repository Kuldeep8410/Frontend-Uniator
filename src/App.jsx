import { BrowserRouter, Routes, Route } from "react-router-dom";
import HashLoader from 'react-spinners/HashLoader';
import './App.css';
import Signup from './signup-login/Signup';
import Login from './signup-login/Login';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import UserHome from './user-pages/UserHome';
import Otpvarifiacation from "./signup-login/OtpVarification";
import QrScanner from "./QR/QR_Scanner";
import Qr_res from "./user-pages/Qr_res";
import QrGenerator from "./QR/QrGenerator";

import AdminHome from "./Teacher-pages/Admin_Home";
import AdminLogin from "./signup-login/AdminLogin";
import Create_class from "./Teacher-pages/Create_Class";
import All_Class_adm from "./Teacher-pages/All_Class_Ad";
import TodoHome from "./components/TodoHome";
import All_Class_Std from "./user-pages/All_class_std";
import All_Class from "./user-pages/All_Class";
import PopComponent from "./UiComponents/PopupComponent";
import AddEntryExitQr from "./Teacher-pages/AddEntryExitQr";
import EntriesLog from "./Teacher-pages/AllEntryExits";
import DeleteCourse from "./Teacher-pages/Delete_Class";
import HomeDiscussion from "./Discusion/HomeDiscussion";
import MakePost from "./Discusion/MakePost";
import ImageUpload from "./Discusion/ImageUploadComp";
import SuperUserHome from "./Adminstrator/Super_User_home";
import SUlogin from "./Adminstrator/AdminstratorLogin";
import FacultyDetails from "./Adminstrator/Faculty_Details";
import StudentAuthorise from "./Authorization/StudentAuthorise";
import AdminstratorAuth from "./Authorization/AdminstratorAuth";
import TeacherAuthorise from "./Authorization/TeacherAuthorise";
import CommunityNavbar from "./Discusion/CommunityNavbar";
import Footer from "./UiComponents/Footer";
import LandingPage from "./Landingpage/Landing_page";
import ClassDetailParticular from "./user-pages/ClassDetailParicular";
import StatsSection from "./Landingpage/Upstash";

import QrWorking from "./Documention/QrWorking";
import ClassCreate from './Documention/ClassCreate'
import Attendance from "./Documention/AttendanceMarking"
import GatePassWorking from "./Documention/GatePassWorking"
import AttendanceMarking from "./Documention/AttendanceMarking";
import Loader2 from "./Loader";



function App() {
  return (
    <BrowserRouter> {/* ✅ Wrap everything inside BrowserRouter */}
      <>
        <div className='fixed top-0 z-20 w-full'>
          <Navbar />
        </div>

        <div className='w-full h-screen bg-black/90 mt-16'>


          <Routes>
            <Route element={<AdminstratorAuth />}>
              <Route path="/qrgenerator" element={<QrGenerator />} />
              <Route path="/delete" element={<DeleteCourse />} />
              <Route path="/administrator" element={<SuperUserHome />} />
              <Route path="/qrrr" element={<AddEntryExitQr />} />

            </Route>




            {/* Teacher Routes */}
            <Route element={<TeacherAuthorise />}>
              <Route path='/admin-dashboard' element={<AdminHome />} />
              <Route path="/create-class" element={<Create_class />} />
              <Route path="/all-classes-adm" element={<All_Class_adm />} />
              
             
            </Route>


            {/* User Routes (Protected by StudentAuthorise) */}
            <Route element={<StudentAuthorise />}>
              <Route path="/user-home" element={<UserHome />} />
              <Route path="/todo-home" element={<TodoHome />} />
              
              <Route path="/qrscanner" element={<Qr_res />} />
              <Route path="/discussion" element={<HomeDiscussion />} />
              <Route path="/discussion/makepost" element={<MakePost />} />
              <Route path="/upload" element={<ImageUpload />} />
            </Route>





            <Route path="/popcomp" element={<PopComponent />} />
            <Route path="/qrscanner" element={<Qr_res />} />
            <Route path="/all-classes" element={<All_Class />} />
            <Route path="/all-classes-student" element={<All_Class_Std />} />


{/* Dynamic route for each course sending details with query params */}
            <Route path="/all-classes-student/:courseCode/:courseName/:Teacher" element={<ClassDetailParticular />} />

            <Route path="/otpvarification" element={<Otpvarifiacation />} />



            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otpvarification" element={<Otpvarifiacation />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path="/administrator-login" element={<SUlogin />} />

            <Route path="/makepost"element = {<MakePost />} />
            <Route path="/upstash" element = {<StatsSection />} />


            <Route path="/KnowQr-WORKING"element = {<QrWorking />} />
            <Route path="/KnowAttendanceMarking"element = {<AttendanceMarking />} />
            <Route path="/classCreateTeacher"element = {<ClassCreate />} />
            <Route path="/gatePassWorking"element = {<GatePassWorking />} />


          </Routes>


          {/* <HashLoader color='green' /> */}
          <div className="grid grid-cols-3 text-xl text-white bg-black z-20 p-5 ">
            <a href="/admin-dashboard">teacher-dashboard</a>
            <a href="/admin-login">Teacher-login</a>
            <a href="/administrator">Adminstrator Dashboard</a>
            <a href="/administrator-login">Administrator Login</a>
          </div>
          <Footer />
        </div>


        <ToastContainer />
      </>
    </BrowserRouter>
  );
}

export default App;
