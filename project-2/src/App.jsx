import { useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  //ref

  const PasswordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) str += "0123456789"
    if(characters) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass)


  }, [length, number, characters, setPassword])


  const copyToClipboard = useCallback(() => {
    PasswordRef.current?.select()
    PasswordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Your Password'
          readOnly
          ref={PasswordRef}
          />
          <button 
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            checked={number}
            onChange={(e) => {setNumber(e.target.checked)}}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            checked={characters}
            onChange={(e) => {setCharacters(e.target.checked)}}
            />
            <label>Symbols</label>
          </div>
        </div>
        <button 
          onClick={generatePassword}
          className='w-full bg-blue-700 text-white py-2 my-2 rounded-lg cursor-pointer'
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
