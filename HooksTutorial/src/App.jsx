import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [count,setCount1] = useState(0)
  let [count2,setCount2]=useState(0)
  useEffect(()=>{
    
    console.log("Count2 render")
  },[count])

  return (
    <>
    <h1>{count1}</h1>
    <h1>{count2}</h1>
    <button onClick={()=>setCount1(++count1)}>count 1 Btn</button>
    <button onClick={()=>setCount2(++count2)}>count 2 Btn</button>
      
       
    </>
  )
}

export default App
