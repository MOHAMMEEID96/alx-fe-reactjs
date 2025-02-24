import { useState } from 'react'
import WelcomeMessage from './WelcomeMessage'
import Header from './Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <WelcomeMessage/>
  <Header/>
  <MainContent/>
</div>
  )
}

export default App
