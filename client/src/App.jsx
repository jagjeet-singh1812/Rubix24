import HomeScreen from "./pages/Home";
import MentorPage from "./pages/MentorPage";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/room" element={<Room />} />
        <Route path="/mentorform" element={<MentorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
