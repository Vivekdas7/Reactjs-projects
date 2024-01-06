import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 const[length,setlength]=useState(8)
 const[numberAllowed,setnumberAllowed]=useState(false)
 const[charAllowed,setcharAllowed]=useState(false)
 const[password,setpassword]=useState("")
 //use ref
 const passref=useRef(null)
 const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="!@#$%^&*"
for (let i = 1; i <= length; i++) {
 let char=Math.floor(Math.random()*str.length+1)
 pass +=str.charAt(char)
  
}
setpassword(pass)

 },[length,numberAllowed,charAllowed,setpassword])

const copypass=useCallback(
  ()=>{
    passref.current?.select();
    // passref.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password)
  },[password]
)

 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-4'>
<h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='passsword'
          readOnly
          ref={passref}
           />
           <button onClick={copypass} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label>Charcters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
