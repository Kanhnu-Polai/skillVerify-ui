import React from "react";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/ Home";
import useAuthModals from "./hooks/useAuthModals";


import SignUpModal from "./components/SignUpModal";

import LoginModal from "./components/LoginModal";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const {
    showSignUp,
    showLogin,
    viewProfile,
    handleOpenSignUp,
    handleCloseSignUp,
    handleOpenLogin,
    handleCloseLogin,
    handleCloseViewProfile,
    handleViewProfile     
  } = useAuthModals();
  return (
    <div className="border-2 min-h-screen bg-slate-300">
      <Navbar
        onSignUpClick={handleOpenSignUp}
        onLoginClick={handleOpenLogin}
        onView = {handleViewProfile}
      ></Navbar>
      {showSignUp &&  <SignUpModal onClose={handleCloseSignUp} onLoginClick={handleOpenLogin} /> }

      {showLogin && <LoginModal onClose = {handleCloseLogin}></LoginModal> }

      {viewProfile && <Profile onClose = {handleCloseViewProfile}></Profile>}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/profile" element ={<ProtectedRoute>
          <Profile></Profile>
        </ProtectedRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
