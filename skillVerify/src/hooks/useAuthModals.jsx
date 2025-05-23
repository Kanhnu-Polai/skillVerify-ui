import { useState } from "react";

const useAuthModals = () => {
    
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenSignUp = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);


  return {
    showSignUp,
    showLogin,
    handleCloseLogin,
    handleCloseSignUp,
    handleOpenLogin,
    handleOpenSignUp

  };
};

export default useAuthModals;
