import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('')
  const [kilo, setKilo] = useState('')
  const [calories, setCalories] = useState(null)
  
  const handleSubmit = () => {
    // Convert count and kilo to numbers and calculate calories
    const distance = parseFloat(count)
    const weight = parseFloat(kilo)
    
    if (!isNaN(distance) && !isNaN(weight)) {
      setCalories(distance * weight * 0.4536)
    } else {
      setCalories('Invalid input')
    }
  }
  
  return (
    <>
      <div>
        <h4>Fitness Tracker</h4>
        <input 
          type="number" 
          value={count} 
          placeholder='Enter Distance' 
          onChange={(e) => setCount(e.target.value)} 
        />
        <input 
          type="number" 
          value={kilo} 
          placeholder='Enter Weight' 
          onChange={(e) => setKilo(e.target.value)} 
        />
        <p>Calories burned <span>{calories !== null ? calories.toFixed(2) : ''}</span></p>
        <button type='button' onClick={handleSubmit}>Get Calories</button>
      </div>
    </>
  )
}

export default App
