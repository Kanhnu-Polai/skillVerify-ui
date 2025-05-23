import React, { useState } from 'react'

const Example1 = () => {

    const[counter,setCounter] = useState(0);

    const updateCounter = ()=>{
        setCounter(prev=>prev+1)
    }

  return (
    <div className='border-2 border-amber-800 text-center p-2 m-1'>
        <h1 className='text-4xl'>Counter App</h1>
        <h2 className='text-3xl font-bold text-red-500'>{counter}</h2>
        <button className='bg-blue-600 p-3 rounded-md text-white font-bold ' onClick={updateCounter}>Click to increase</button>
    </div>
  )
}

export default Example1