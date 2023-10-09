import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://kars.bio" target="_blank">
          <img src='https://media.kars.bio/assets/pfp.gif' className="logo" alt="Kars" />
        </a>
      </div>
      <h1>Kars</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Template Code
        </p>
      </div>
    </>
  )
}

export default App
