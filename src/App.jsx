import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import next_js_logo from './assets/next-js.svg'
import MainNavBar from './MainNavBar.jsx'
// import EasyComponent from './Components/EasyComponent'
import { Navbar, Text, Button, Image } from '@nextui-org/react'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <MainNavBar/>
      <img src={next_js_logo} alt="hehe"  />
      hello world 
    </div>
  )
}

export default App
