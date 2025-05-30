import React, { useState } from 'react'
import About from '../components/profile/About'
import Analysis from '../components/profile/Analysis'
import Account from '../components/profile/Account'

const Profile = () => {


  const[activeSession,setActiveSession] = useState("analysis")

  const renderContent = ()=>{
    switch(activeSession){
      case "analysis":
        return <Analysis></Analysis>
      case "account":
        return <Account></Account>
      
    }
  }
  return (
    <div className='flex'>
      <About setActiveSession = {setActiveSession}></About>
      <div>
        {renderContent()}
      </div>

      
    </div>
  )
}

export default Profile