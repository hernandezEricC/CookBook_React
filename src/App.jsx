import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * @description The main App component that renders the application
 * It contains a counter and links to Vite and React documentation
 * @returns {JSX.Element}
 */
function App() {
  const [count, setCount] = useState(0);
  const copyrightYear = new Date().getFullYear();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
      </div>
      
      <h1>My Cook Book</h1>
      
      <div className="card">
        
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      </div>
      
      <p className="copyright">
        Copyright © {copyrightYear} <a href="https://github.com/hernandezEricC">Eric Hernandez</a>. All rights reserved.
      </p>
    
    </>
  )
}

export default App
