import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'

function App() {

  let [currentNumber, setCurrentNumber] = useState('')
  let [firstNumber, setFirstNumber] = useState('')
  let [operator, setOperator] = useState('')

  let addNumber = (num) => {
    setCurrentNumber(prev => `${prev}${num}`)
  }

  const clearNumber = () => {
    setCurrentNumber('')
  }

  const clearNumber2 = () => {
    setCurrentNumber((prev) => {
      return prev.slice(0, -1)
    })
  }

  const somar = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber)
      clearNumber()
      setOperator('+')
    } else {
      const somarNumbers = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(somarNumbers))
      setFirstNumber('')
      setOperator('')
    }
  }

  const subtrair = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber)
      clearNumber()
      setOperator('-')
    } else {
      const subNumbers = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(subNumbers))
      setFirstNumber('')
      setOperator('')
    }
  }

  const multiplicar = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber)
      clearNumber()
      setOperator('*')
    } else {
      const multiplicarNumbers = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiplicarNumbers))
      setFirstNumber('')
      setOperator('')
    }
  }

  const dividir = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber)
      clearNumber()
      setOperator('/')
    } else {
      const dividirNumbers = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(dividirNumbers))
      setFirstNumber('')
      setOperator('')
    }
  }

  const resultado = () => {
    switch(operator) {
      case '+': 
        somar()
        break
      case '-': 
        subtrair()
        break
      case '*': 
        multiplicar()
        break
      case '/': 
        dividir()
        break
    }
  }
  

  return (
     <main>
        <section className="visorContainer">
            <div className="visor">
                <input type="text" name="visorInput" id="visorInput" value={currentNumber} maxLength="10" disabled />
            </div>
        </section>

        <section className="numbersContainer">
            <div>
              <div className="numbersRow">
                <Button text="c" className="btnC" onClick={clearNumber}/>
                <Button text="ce" className="btnC2" onClick={clearNumber2}/>
                <Button text="/" className="btn btnOperator" onClick={dividir}/> 
              </div>
              <div className="numbersRow">
                <Button text={7} className="btn" onClick={()=>{addNumber('7')}}/>
                <Button text={8} className="btn" onClick={()=>{addNumber('8')}}/>
                <Button text={9} className="btn" onClick={()=>{addNumber('9')}}/>          
              </div>
              <div className="numbersRow">
                <Button text={4} className="btn" onClick={()=>{addNumber('4')}}/>
                <Button text={5} className="btn" onClick={()=>{addNumber('5')}}/>
                <Button text={6} className="btn" onClick={()=>{addNumber('6')}}/>
              </div>
              <div className="numbersRow">
                <Button text={1} className="btn" onClick={()=>{addNumber('1')}}/>
                <Button text={2} className="btn" onClick={()=>{addNumber('2')}}/>
                <Button text={3} className="btn" onClick={()=>{addNumber('3')}}/>
              </div>
              <div className="numbersRow">
                <Button text="+/-" className="btn"/>
                <Button text={0} className="btn" onClick={()=>{addNumber('0')}}/>
                <Button text="." className="btn" onClick={()=>{addNumber('.')}}/>
              </div>
            </div>
            <div>
              <div className="numbersColumn">
                <Button text="x" className="btn btnOperator" onClick={multiplicar}/>
                <Button text="-" className="btn btnOperator" onClick={subtrair}/>
                <Button text="+" className="btn btnOperator" onClick={somar}/>
                <Button text="=" className="btn btnResult" onClick={resultado}/>
              </div>
            </div>
        </section>
     </main>
  )
}

export default App
