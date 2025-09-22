import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-2xl mb-5'>Tailwind test</h1>
      <Card/>
      <Card price={2.65}/>
    </>
  )
}

export default App
