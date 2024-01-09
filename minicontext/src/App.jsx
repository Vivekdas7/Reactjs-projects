import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UsercontextProvider>
 <h1>Context Or StateMangement</h1>
 <Login/>
 <Profile/>
    </UsercontextProvider>
  )
}

export default App
