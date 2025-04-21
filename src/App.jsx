import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Cards></Cards>
    </>
  )
}

export default App
