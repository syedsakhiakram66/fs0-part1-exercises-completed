import React from 'react'
import {useState} from 'react'
import Statistics from './components/Statistics'



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (type) => {
    if (type === 'good') {
      setGood(good + 1)
      setBad(bad + 0)
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
    } else if (type === 'bad') {
      setBad(bad + 1)
    }
  }


  return (
    <>
    <h1>give feedback</h1>
  <button onClick={() => increment('good')}>good</button>
  <button onClick={() => increment('neutral')}>neutral</button>
  <button onClick={() => increment('bad')}>bad</button>

    <Statistics good={good} neutral={neutral} bad={bad}/>

  </>
  )
}

export default App