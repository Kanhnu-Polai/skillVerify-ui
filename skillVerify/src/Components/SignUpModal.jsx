import React, { useState } from 'react'

const SignUpModal = ({onClose}) => {

  const[user,setUser] = useState({
    name:'',
    email:'',
    password:'',
    role:''
  });
 


  return (
    <div className= "fixed inset-0 flex justify-center items-center z-50 bg-transparent bg-opacity-30 backdrop-blur-sm">

      

      <div className='bg-blue-500 w-xl p-3 rounded-md flex flex-col justify-center items-center space-y-5'>
        <div className='w-full flex justify-end font-bold text-xl '>
          <button className='cursor-pointer hover:text-red-600' onClick={onClose}>X</button></div>
        <div className='text-3xl font-bold antialiased text-white'>
       Sign In
        </div>

        <div className='flex flex-col justify-center space-y-3'>
          <input type="name"
          name='name'
          placeholder='Enter Your Full Name' 
          value={user.name}
          required
          className='border p-2 rounded-md bg-slate-50 w-96'/>

           <input type="email"
          name='email'
          placeholder='Enter Your Email Id' 
          value={user.email}
          required
          className='border p-2 rounded-md bg-slate-50'/>

          <input type="password"
          name='password'
          placeholder='Enter Your Email Id' 
          value={user.password}
          required
          className='border p-2 rounded-md bg-slate-50'/>

          <select name='role'
          value={user.role}
          className='border p-2 rounded-md bg-slate-50'>
            <option value="">Select Your Role</option>
            <option value="JOB_POSTER">JOB_POSTER</option>
            <option value="JOB_SEEKER">JOB_SEEKER</option>
          </select>
        </div>

        <div className='flex items-center justify-center'>
          <button className='border p-3 rounded-md bg-green-500 cursor-pointer hover:bg-green-800 hover:text-white '>Sign In</button>
         
        </div>

      </div>

    </div>
  )
}

export default SignUpModal