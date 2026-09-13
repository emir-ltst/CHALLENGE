import { useEffect, useState } from 'react'
import '../App.css'

function evaluateExpression(expression) {
  const tokens = expression.match(/\d*\.?\d+|[()+\-*/%]/g)
  if (!tokens || tokens.join('') !== expression.replace(/\s/g, '')) throw new Error('Invalid expression')

  let position = 0
  const peek = () => tokens[position]
  const consume = () => tokens[position++]

  function parseExpression() {
    let value = parseTerm()
    while (peek() === '+' || peek() === '-') {
      const operator = consume()
      const nextValue = parseTerm()
      value = operator === '+' ? value + nextValue : value - nextValue
    }
    return value
  }

  function parseTerm() {
    let value = parseFactor()
    while (peek() === '*' || peek() === '/') {
      const operator = consume()
      const nextValue = parseFactor()
      if (operator === '/' && nextValue === 0) throw new Error('Division by zero')
      value = operator === '*' ? value * nextValue : value / nextValue
    }
    return value
  }

  function parseFactor() {
    if (peek() === '+' || peek() === '-') {
      const sign = consume()
      const value = parseFactor()
      return sign === '-' ? -value : value
    }
    let value
    if (peek() === '(') {
      consume()
      value = parseExpression()
      if (consume() !== ')') throw new Error('Missing bracket')
    } else {
      value = Number(consume())
      if (!Number.isFinite(value)) throw new Error('Invalid number')
    }
    while (peek() === '%') {
      consume()
      value /= 100
    }
    return value
  }

  const value = parseExpression()
  if (position !== tokens.length || !Number.isFinite(value)) throw new Error('Invalid expression')
  return Number(value.toFixed(10)).toString()
}

const operators = ['+', '-', '*', '/']

export default function Claculate() {
  const [result, setResult] = useState('')
  const [error, setError] = useState(false)

  const append = (value) => {
    setError(false)
    setResult((current) => {
      if (current === 'Ошибка') return value
      const lastCharacter = current.at(-1)
      if (operators.includes(value) && operators.includes(lastCharacter)) return current.slice(0, -1) + value
      if (operators.includes(value) && !current && value !== '-') return current
      if (value === '.' && current.split(/[+\-*/()]/).at(-1).includes('.')) return current
      return current + value
    })
  }

  const calculate = () => {
    try {
      setResult((current) => evaluateExpression(current))
      setError(false)
    } catch {
      setResult('ERROR')
      setError(true)
    }
  }

  const clear = () => { setResult(''); setError(false) }
  const backspace = () => { setResult((current) => current.slice(0, -1)); setError(false) }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^[0-9.+\-*/%()]$/.test(event.key)) append(event.key)
      if (event.key === 'Enter' || event.key === '=') calculate()
      if (event.key === 'Backspace') backspace()
      if (event.key === 'Escape') clear()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return <div className={`calculator ${error ? 'has-error' : ''}`}>
    <div className="calculator-heading"><span>TM // CALC</span><small>ONLINE</small></div>
    <input className="calculator-display" type="text" value={result} placeholder="0" readOnly aria-label="Calculator display" />
    {error && <p className="calculator-error" role="alert">Invalid expression. Press C to reset.</p>}
    <section className="calculator-buttons">
      <button onClick={clear}>C</button><button onClick={backspace} aria-label="Backspace">DEL</button><button onClick={() => append('(')}>(</button><button onClick={() => append(')')}>)</button>
      <button onClick={() => append('7')}>7</button><button onClick={() => append('8')}>8</button><button onClick={() => append('9')}>9</button><button onClick={() => append('/')}>/</button>
      <button onClick={() => append('4')}>4</button><button onClick={() => append('5')}>5</button><button onClick={() => append('6')}>6</button><button onClick={() => append('*')}>*</button>
      <button onClick={() => append('1')}>1</button><button onClick={() => append('2')}>2</button><button onClick={() => append('3')}>3</button><button onClick={() => append('-')}>-</button>
      <button onClick={() => append('0')}>0</button><button onClick={() => append('.')}>.</button><button onClick={() => append('%')}>%</button><button onClick={() => append('+')}>+</button>
      <button className="calculator-equals" onClick={calculate}>=</button>
    </section>
  </div>
}