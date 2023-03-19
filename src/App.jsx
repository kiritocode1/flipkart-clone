import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import next_js_logo from './assets/next-js.svg'
import MainNavBar from './MainNavBar.jsx'
import CategoryBar from './CategoryBar'; 
import ButtonGroupCategories from './ButtonGroupCategories'


// import EasyComponent from './Components/EasyComponent'
import { Navbar, Text, Button, Image, Spacer } from '@nextui-org/react'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <MainNavBar />
      <Spacer y={ 2 } />
      <Text color="$gray800" size={ "$4xl" } weight="light" i
      
        css={ {
          textAlign: 'start',
        }}
      
      >Shop By categories</Text>
      <Spacer y={ 2 } />
      
      <ButtonGroupCategories />
      <Spacer y={ 2 } />

      <CategoryBar/>
      hello world 
    </div>
  )
}

export default App
