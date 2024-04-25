import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/Navbar/Navbar";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";

function App() {
  return (
    <Router>
      {/* You should wrap your routes with <Routes> */}
      <Routes>
        {/* You can include your Navbar or any other components here */}
        {/* <NavBar /> */}
        {/* Define your routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
