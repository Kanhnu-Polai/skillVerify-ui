import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const linkStyle = ({ isActive }) =>
  isActive
    ? 'text-blue-600 font-semibold transition duration-300'
    : 'text-gray-600 hover:text-blue-500 transition duration-300';

const Navbar = ({ onSignUpClick, onLoginClick,onView }) => {
  const { user, logout } = useAuth();

  const[viewProfile,setViewProfile] = useState(false);

  const handleViewProfile = ()=>{
    setViewProfile(true);
  }



  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-700 tracking-wide">
          SkillVerify
        </div>

        {/* Search bar */}
        <div className="w-full mt-2 sm:mt-0 sm:w-auto sm:flex-1 sm:px-4">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="w-full sm:w-80 px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* NavLinks and Auth/Profile */}
        <div className="flex flex-wrap items-center space-x-4 mt-2 sm:mt-0">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/job" className={linkStyle}>Jobs</NavLink>

          {!user ? (
            <>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                onClick={onLoginClick}
              >
                Sign In
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                onClick={onSignUpClick}
              >
                Sign Up
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <img
                src={user.profilePhoto || '/default-profile.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
                onClick={onView}
               
              />
              <span className="font-medium text-gray-700">{user.email || 'User'}</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;