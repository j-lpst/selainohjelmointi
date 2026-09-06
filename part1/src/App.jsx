import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodOne = () => setGood(good + 1)
  const neutralOne = () => setNeutral(neutral + 1)
  const badOne = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={goodOne} text='good' />
      <Button onClick={neutralOne} text='neutral' />
      <Button onClick={badOne} text='bad' />

      <h1>statistics</h1>

      <Statistics
      good={good}
      neutral={neutral}
      bad={bad} />
    </div>
  )
}

export default App
