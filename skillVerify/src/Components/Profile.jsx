import React, { useState } from 'react'

const Profile = () => {
    const[profile,setProfile] = useState({
        name:"Kanhu Polai",
        age:"22"
    });

    const updateName = ()=>{

        setProfile((prev)=>({
            ...prev,
            name:name
        }));

        setName("")
    }

    const updateAge =()=>{
        setProfile((prev)=>({
            ...prev,
            age:age
        }))
        setAge("")
    }

    const[name,setName] = useState("")
    const[age,setAge] = useState("")
  return (
    <div className='border-2 border-amber-800 text-center p-2 m-1'>
        <h1>Profile</h1>
        <p>Name : {profile.name}</p>
        <p>Age : {profile.age}</p>
        <input 
        type="text"
        placeholder='Update Name'
        value={name} 
        onChange={event=>setName(event.target.value)}/>
        <button onClick={updateName}>UpdateName</button>

        <input 
        type="text"
        placeholder='Update Age'
        value={age}
        onChange={(event)=>setAge(event.target.value)} />
        <button onClick={updateAge}>Update Age</button>
    </div>
  )
}

export default Profile