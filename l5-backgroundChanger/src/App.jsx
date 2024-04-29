// import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('grey')

  return (
      <div className="w-full h-screen duration-100" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-xl">
            <button onClick={() => { return setColor("red")} } className="outline-none px-3 py-2 rounded-xl" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-3 py-2 rounded-xl" style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-3 py-2 rounded-xl" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-3 py-2 rounded-xl" style={{ backgroundColor: "yellow" }}>Yellow</button>
          </div>
        </div>
      </div>
  )
}

export default App
