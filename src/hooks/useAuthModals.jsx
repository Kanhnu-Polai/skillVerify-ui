import { useState } from "react";

const useAuthModals = () => {
    
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [viewProfile,setViewProfile] = useState(false)

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleViewProfile = ()=>setViewProfile(true)
  const handleCloseViewProfile = ()=> setViewProfile(false);


  return {
    showSignUp,
    showLogin,
    viewProfile,
    handleCloseLogin,
    handleCloseSignUp,
    handleOpenLogin,
    handleOpenSignUp,
    handleViewProfile,
    handleCloseViewProfile

  };
};

export default useAuthModals;
