import { useState } from 'react'
import './App.css'
import ShowInfo from './components/ShowInfo'

function App() {
  return (
    <div className="App">
      <ShowInfo name="Hai" age={20}/>
    </div>
  )
}

export default App