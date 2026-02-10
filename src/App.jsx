import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConnectWallet from './components/ConnectWallet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ConnectWallet/>
  )
}

export default App
