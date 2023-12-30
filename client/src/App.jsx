import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  return (
    <div className='flex  items-center justify-center bg-black h-screen q-full '>
     <button className='px-2 py-4 h-40 w-40 rounded bg-slate-500' onClick={()=>setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
