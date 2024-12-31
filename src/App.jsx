import React from 'react'
import Tictoe from './Components/Tictoe'

const App = () => {
  return (
    <div className='max-sm:px-5 max-sm:py-10 px-20 py-10 bg-blue-300 min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl mb-2 text-center font-bold'>TicToe <span className='text-white'>Game</span>✅</h1>
      <Tictoe/>
      
    </div>
  )
}

export default App
