import React from "react"
import { useState } from "react"

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}
const Display = ({ text }) => {
  return <h1>{text}</h1>
}
const Statistics = ({ stat, text }) => {
  return (
    <div>
      {text} {stat}
    </div>
  )
}
const Total = ({ total, all, average, pos }) => {
  const sum = total.reduce((a, b) => a + b, 0)
  const [good, neutral, bad] = total
  const avg = sum > 0 ? ((good - bad) / sum).toFixed(2) : 0
  const positive = sum > 0 ? ((good / sum) * 100).toFixed(2) : 0
  if (sum === 0) {
    return <div>No feedback given</div>
  }

  return (
    <div>
      <div>
        {all} {sum}
      </div>
      <div>
        {average} {avg}
      </div>
      <div>
        {pos} {positive}
      </div>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text={"give feedback"} />
      <div>
        <Button handleClick={() => setGood(good + 1)} text={"good"} />
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
        <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      </div>

      <div>
        <Display text={"statistics"} />
        <Statistics text={"good"} stat={good} />
        <Statistics text={"neutral"} stat={neutral} />
        <Statistics text={"bad"} stat={bad} />
        <Total
          all={"all"}
          average={"average"}
          pos={"positive"}
          total={[good, neutral, bad]}
        />
      </div>
    </div>
  )
}

export default App
