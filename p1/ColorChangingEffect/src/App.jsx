import { useState } from "react"


function App() {
 let [color,setcolor]=useState("olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2
    ">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>
        <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor:"green"}}
        >Green</button>
        <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button onClick={()=>setcolor("olive")} className="outline-none px-4 py-1 rounded-full shadow-lg "
        style={{backgroundColor:"olive"}}
        >olive</button>
      </div>

    </div>
   </div>
  )
}

export default App
