import React from 'react'
import {useState} from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increment = (type) => {
 
  if (type === good) {
    setGood(good + 1);
  }else if (type === neutral) { 
    setNeutral(neutral + 1);
  } else if (type === bad) {
    setBad(bad + 1);
  }
   }
  return (
    <>
    <h1>give feedback</h1>
    <button onClick={() => increment(good)}>good</button>
    <button onClick={() => increment(neutral)}>neutral</button>
    <button onClick={() => increment(bad)}>bad</button>

    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>  
  </>
  )
}

export default App