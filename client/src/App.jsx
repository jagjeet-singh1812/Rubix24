import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./pages/Home";
import Dashboard from "./pages/MentorDashboard/Dashboard";
import MentorPage from "./pages/MentorPage";
import QA from "./pages/QandA/QA";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./pages/Terms/Terms";
import Event from "./pages/Events/Event";
import EmailVerify from "./pages/Verification/EmailVerify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/mentorform" element={<MentorPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/q&a" element={<QA />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/events" element={<Event />} />
        <Route path="/verifyforMentor/:id" element={<EmailVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
