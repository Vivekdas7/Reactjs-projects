
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'


function App() {
  const [themeMode,setthememode]=useState("light")
  const lightTheme=()=>{
    setthememode("light")
  }
  const darkTheme=()=>{
    setthememode("dark")
  }
  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
   
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/> 
              </div>

              <div className="w-full max-w-sm mx-auto">
               
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App