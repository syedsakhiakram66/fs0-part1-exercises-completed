import React from 'react'
import {useState} from 'react'

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

    const total = good + neutral + bad;
    const average = total ? (good - bad) / total : 0
    const positive = total ? ((good / total) * 100).toFixed(1) : '0.0'
  return (
    <>
    <h1>give feedback</h1>
  <button onClick={() => increment('good')}>good</button>
  <button onClick={() => increment('neutral')}>neutral</button>
  <button onClick={() => increment('bad')}>bad</button>


    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>  
    <p>all {total}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>
  </>
  )
}

export default App