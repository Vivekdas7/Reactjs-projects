import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
 

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl mb-2'>Taliwind Test</h1>
  <Card username="Akash"btnText='Click me'/>
  <Card/>

    </>
  )
}

export default App
