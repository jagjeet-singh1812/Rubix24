import Navigation from "./components/Nav/Nav";
import HomeScreen from "./pages/Home";
import Home from "./pages/Home/Home";
import Room from "./pages/Room";
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
