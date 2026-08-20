import { useState } from 'react'
// import Samridhi from './components/Samridhi'
import Samridhi from './components/samridh.jsx'
import Popup from './components/popup.jsx'
import Sam from './components/sam.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Samridhi />  
          {/* <Sam /> */}
          <Popup /> 
    </>
  )
}

export default App
