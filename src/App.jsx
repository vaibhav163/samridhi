import { useState } from 'react'
// import Samridhi from './components/Samridhi'
import Samridhi from './components/samridh.jsx'
import Popup from './components/popup.jsx'

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
