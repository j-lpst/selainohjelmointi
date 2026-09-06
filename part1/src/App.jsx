import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const total = (props.good + props.neutral + props.bad)
  const average = (props.good - props.bad) / total
  const positive = (props.good)

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {average}</p>
      <p>positive {positive / total}</p>
    </div>
   )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodOne = () => { setGood(good + 1); setAll(all + 1) }
  const neutralOne = () => { setNeutral(neutral + 1); setAll(all + 1) }
  const badOne = () => { setBad(bad + 1), setAll(all + 1) }

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
      bad={bad}
      all={all}
      />

    </div>
  )
}

export default App
