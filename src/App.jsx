import { useState } from 'react'

import './App.css'
import AnalogClock from './DigitalClock'

function App() {
  const [count, setCount] = useState({hours:new Date().getHours(),minutes:new Date().getMinutes(),seconds:new Date().getSeconds()})

  return (
    <>
      <AnalogClock setCount={setCount} count ={count}/>
    </>
  );
}

export default App
