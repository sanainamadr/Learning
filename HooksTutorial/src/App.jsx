import { useState } from 'react'
import './App.css'

function App() {
  let [color,setcolor] =useState("Blue")
let [count,setCount] = useState(10)

  return (
    <>
    <h1>{count}</h1>
      <h1>My favourate Color is {color} </h1>
      <button onClick={()=>{
        setCount(--count)
      }}>increse</button>
    </>
  )
}

export default App
