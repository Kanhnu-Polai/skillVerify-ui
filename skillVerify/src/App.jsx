import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example1 from './Components/Example1'
import TodoApp from './Components/TodoApp'
import Profile from './Components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Example1></Example1>
    <TodoApp></TodoApp>
    <Profile></Profile>
   
    </>
  )
}

export default App
