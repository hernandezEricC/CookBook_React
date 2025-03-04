import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

/**
 * @description
 * The main App component of the application.
 * It contains the main logic and UI of the application.
 * It uses the useState hook to manage the state of the count variable.
 * @returns JSX.Element
 */
function App() {
  const [count, setCount] = useState(0)
  const copyrightYear = new Date().getFullYear()

  return (
    <>
      {/* This stuff should really be placed into a separate component. Right? */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      <h1>My Cook Book</h1>

      <div className="card">
        {/* Remove count stuff once we start working on user authentication */}
        <button onClick={() => setCount((count) => count + 1)}>
          Login
        </button>

        <p>
          {/* Remove count stuff once we start working on user authentication */}
          Login Attempts: {count}
        </p>
      </div>

      <p className="copyright">
        Copyright © {copyrightYear} <a href='https://github.com/hernandezEricC'>Eric Hernandez</a>. All Rights Reserved
      </p>
    
    </>
  )
}

export default App
