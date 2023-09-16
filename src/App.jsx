import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='main'>
      <h1>{count}</h1>
      <div id='btn'>
        <button onClick={() => {setCount(count+1)}}>Increment</button>
        <button onClick={() => {setCount(count-1)}}>Decrement</button>
      </div>
     
    </div>
  )
}

export default App
