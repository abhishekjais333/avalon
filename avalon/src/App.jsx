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
    <div className=" justify-center flex gap-12">
    <Selectlang/>
    <Selectlang/>
    <Selectlang/>
    <Selectlang/>
    </div>
    <div className=" justify-center flex gap-12">
    <Selectlang/>
    <Selectlang/>
    </div>
    
    </>
  )
}

export default App
