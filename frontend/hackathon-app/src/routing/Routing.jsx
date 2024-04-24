import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Error from "../pages/Error.jsx";
import Forgotpassword from "../pages/Forgot.jsx";
import Home from "../pages/Home.jsx";
import Profile1 from "../pages/Profile1.jsx";
import Profile2 from "../pages/Profile2.jsx";
import Profile3 from "../pages/Profile3.jsx";
import Profile4 from "../pages/Profile4.jsx";
import Profile5 from "../pages/Profile5.jsx";
import HomeScreen from "../pages/HomeScreen.jsx";
import Chatbot from "../pages/Chatbot.jsx"
import Custom from "../components/Custom.jsx"

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/profile1" element={<Profile1 />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/profile3" element={<Profile3 />} />
          <Route path="/profile4" element={<Profile4 />} />
          <Route path="/profile5" element={<Profile5 />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/landingpage" element={<HomeScreen />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default Routing;
