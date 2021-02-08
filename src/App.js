import './App.css'
import React, { useState, useEffect } from 'react'

const MIN = 2
const MAX = 12

const randomNumber = () => {
  const min = Math.ceil(MIN)
  const max = Math.floor(MAX)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

const generateMathProblem = () => {
  const num1 = randomNumber()
  const num2 = randomNumber()
  const answer = num1 * num2
  return `${num1} x ${num2} = ${answer}`
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiplication Problems</h1>
        <h2>{generateMathProblem()}</h2>
        <h2>{generateMathProblem()}</h2>
        <h2>{generateMathProblem()}</h2>
        <h2>{generateMathProblem()}</h2>
        <h2>{generateMathProblem()}</h2>
      </header>
    </div>
  )
}

export default App
