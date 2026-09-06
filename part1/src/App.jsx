import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  const total = (props.good + props.neutral + props.bad)
  const average = (props.good - props.bad) / total
  const positive = (props.good / total)

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
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
