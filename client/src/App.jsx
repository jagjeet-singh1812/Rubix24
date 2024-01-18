
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./pages/Home";
import MentorPage from "./pages/MentorPage";
import QA from "./pages/QandA/QA";

import Navigation from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

import Room from "./pages/Room";
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Terms from "./pages/Terms/Terms";
import Event from "./pages/Events/Event";
import EmailVerify from "./pages/Verification/EmailVerify";
import AnalyDash from "./pages/AnalyDash/AnalyDash";
import Dashboard from "./pages/MentorDashboard/Dashboard";
import FindMentor from "./pages/FindMentor/FindMentor";
import Contactus from "./components/Login/Login";
import Login from "./components/Login/Login";
import Login_form from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
// import Login from "./components/Login/Login";
import Profilementor from "./pages/MentorDashboard/Dashboard"

function App() {
  return (
    <BrowserRouter>
    {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/find_mentor" element={<FindMentor/>}></Route>
        <Route path="/Login" element={<Login_form/>}></Route>
        <Route path="/video" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/mentorform" element={<MentorPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/profilementor" element={<Profilementor />} />
        <Route path="/Profile" element={<Profile/>} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/q&a" element={<QA />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/events" element={<Event />} />
        <Route path="/verifyforMentor/:id" element={<EmailVerify />} />
        <Route path="/dash" element={<AnalyDash />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
