import React from 'react'
import {useState} from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'


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
    <Button type='good' onClick={() => increment('good')}/>
    <Button type='neutral'onClick={() => increment('neutral')} />
    <Button type='bad' onClick={() => increment('bad')} />

    <Statistics good={good} neutral={neutral} bad={bad}/>

  </>
  )
}

export default App