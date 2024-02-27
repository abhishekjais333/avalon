import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Selectlang from './components/Selectlang.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-red-900'></h1>
    <Nav/>
    <Selectlang/>
    </>
  )
}

export default App
