import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import Selectlang from './components/Selectlang.jsx'
import Level from './components/Level.jsx'
import SidebarThree from './components/SidebarThree.jsx'
import Card from './components/Card.jsx'
import Alpha from './components/Alpha.jsx'
function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
   
    {/* <Nav/>
    <div className=" justify-center flex gap-12">
    <Selectlang/>
    <Selectlang/>
    <Selectlang/>
    <Selectlang/>
    </div>
    <div className=" justify-center flex gap-12">
    <Selectlang/>
    <Selectlang/>
    </div> */}
    
    <Alpha/>
    {/* <Level/> */}
    
    
    </>
  )
}

export default App
