import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { FaSpinner } from 'react-icons/fa';



const SignUpModal = ({ onClose , onLoginClick }) => {

  const[loading , setLoading] = useState(false);
  const[e,setE] = useState('')
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const fetchData = async (userData) => {
    setLoading(true)
    try {
      const response = await axiosInstance.post("signup", userData);
      console.log(response.data); // or show toast/alert
      onClose();
      onLoginClick();
    
    } catch (error) {
      console.error("Error during signup:", error);
      setE("User alredy exist")
    }
    finally{
      setLoading(false)
     
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
    fetchData(user);
  
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent bg-opacity-30 backdrop-blur-sm">
      <div className='bg-blue-500 w-xl p-3 rounded-md flex flex-col justify-center items-center space-y-5'>
        <div className='w-full flex justify-end font-bold text-xl'>
          <button className='cursor-pointer hover:text-red-600' onClick={onClose}>X</button>
        </div>
        <div className='text-3xl font-bold antialiased text-white'>
          Sign Up
        </div>
        <form onSubmit={formHandle}>
          <div className='flex flex-col justify-center space-y-3'>
            <input
              type="text"
              name='name'
              placeholder='Enter Your Full Name'
              value={user.name}
              required
              onChange={handleInput}
              className='border p-2 rounded-md bg-slate-50 w-96'
            />
            <input
              type="email"
              name='email'
              placeholder='Enter Your Email Id'
              value={user.email}
              required
              onChange={handleInput}
              className='border p-2 rounded-md bg-slate-50'
            />
            <input
              type="password"
              name='password'
              placeholder='Enter Your Password'
              value={user.password}
              required
              onChange={handleInput}
              className='border p-2 rounded-md bg-slate-50'
            />
            <select
              name='role'
              value={user.role}
              onChange={handleInput}
              className='border p-2 rounded-md bg-slate-50'
            >
              <option value="">Select Your Role</option>
              <option value="JOB_POSTER">JOB_POSTER</option>
              <option value="JOB_SEEKER">JOB_SEEKER</option>
            </select>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <button
              className='border p-3 rounded-md bg-green-500 cursor-pointer hover:bg-green-800 hover:text-white'
              type='submit'
              disabled={loading}

            >
             {loading ? (
    <span className="flex items-center gap-2">
      <FaSpinner className="animate-spin text-white" />
      Signing Up...
    </span>
  ) : (
    "Sign Up"
  )}
            </button>
          </div>
        </form>

        
          {
            e && (  <div className="text-red-600 font-semibold mt-2">{e}</div>

            )
          }
       
      </div>
    </div>
  );
};

export default SignUpModal;