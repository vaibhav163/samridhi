import { useState } from 'react'
// import Samridhi from './components/Samridhi'
import Samridhi from './components/SAMRIDHI1'
import Popup from './components/Popup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Samridhi />  
          <Popup /> 
    </>
  )
}

export default App
