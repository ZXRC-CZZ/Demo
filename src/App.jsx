import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Test from './pages/Test'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Test/>
    </>
  )
}

export default App
