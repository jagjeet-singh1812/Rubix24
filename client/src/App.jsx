
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./pages/Home";
import Dashboard from "./pages/MentorDashboard/Dashboard";
import MentorPage from "./pages/MentorPage";
import QA from "./pages/QandA/QA";

import Navigation from "./components/Nav/Nav";
import Home from "./pages/Home/Home";

import Room from "./pages/Room";
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Terms from "./pages/Terms/Terms";
import Event from "./pages/Events/Event";

import FindMentor from "./pages/FindMentor/FindMentor";
// import Login from "./components/Login/Login";


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/find_mentor" element={<FindMentor/>}></Route>
        {/* <Route path="/Login" element={<Login/>}></Route> */}
        <Route path="/video" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/mentorform" element={<MentorPage />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/q&a" element={<QA />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/events" element={<Event />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
