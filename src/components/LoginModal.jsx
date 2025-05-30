import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

import axiosInstance from '../api/axiosInstance';

function LoginModal({ onClose }) {
  const { login } = useAuth();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axiosInstance.post('/login', { email, password });
      const userData = res.data;
      login(userData);
      onClose();
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent bg-opacity-30 backdrop-blur-sm">
      <div className="bg-green-500 w-[400px] p-6 rounded-md flex flex-col justify-center items-center space-y-5">
       
        <div className="w-full flex justify-end text-xl font-bold">
          <button
            className="hover:text-red-600 cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>

       
        <div className="text-3xl text-white font-bold antialiased">Sign In</div>

       
        <form
          onSubmit={handleForm}
          className="flex flex-col justify-center items-center space-y-4 w-full"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 rounded-md bg-slate-50 w-full"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="border p-2 rounded-md bg-slate-50 w-full"
          />

          <button
            type="submit"
            className="p-3 w-full rounded-md bg-blue-500 cursor-pointer hover:bg-green-800 hover:text-white"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

       
        {error && (
          <div className="text-red-600 font-semibold mt-2">{error}</div>
        )}
      </div>
    </div>
  );
}

export default LoginModal;