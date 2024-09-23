
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import {  Route, Routes } from "react-router-dom";
import CreatePage from "./components/Createpage";
import Loginpage from "./components/Loginpage";
import Register from "./components/Register";
import { Toaster } from "@/components/ui/toaster"

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Toaster />
      {/* <div className="bg-[#08090A] h-[100vh] "> THis is H!</div> */}
    </>
  );
}

export default App;
