import './App.css'
import React from 'react'

var MIN = 2
var MAX = 12

function randomNumber() {
  var min = Math.ceil(MIN)
  var max = Math.floor(MAX)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function mathProblem() {
  var num1 = randomNumber()
  var num2 = randomNumber()
  var answer = num1 * num2
  return `${num1} x ${num2} = ${answer}`
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Let's do some multiplication!</h1>
      </header>
      <div>
        <h2>{mathProblem()}</h2>
        <h2>{mathProblem()}</h2>
        <h2>{mathProblem()}</h2>
        <h2>{mathProblem()}</h2>
        <h2>{mathProblem()}</h2>
      </div>
    </div>
  )
}

export default App
