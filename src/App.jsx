import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button.jsx';

const Main = styled.main`
  width: 198px;
  height: auto;
  margin: 100px auto;
  border: 4px solid var(--cor1);
  background-color: var(--cor1);
  border-radius: 4px;
  box-shadow: 4px -4px 6px -1px rgba(0, 0, 0, 0.183);
`;

const VisorContainer = styled.section`
  width: 190px;
  height: 80px;
  background-color: var(--cor1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Visor = styled.div`
  width: 180px;
  height: 50px;
  background-color: var(--cor4);
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.205), inset 2px 2px 3px rgba(0, 0, 0, 0.205),
    -2px -2px 3px rgba(0, 0, 0, 0.205);
  position: relative;
`;

const VisorInput = styled.input`
  width: 180px;
  position: absolute;
  inset: 0;
  background-color: var(--cor4);
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.205), inset 2px 2px 3px rgba(0, 0, 0, 0.205),
    -2px -2px 3px rgba(0, 0, 0, 0.205);
  padding: 10px;
  font-size: 25px;
  text-align: end;
  color: var(--cor2);
`;

const NumbersContainer = styled.section`
  width: 190px;
  height: 240px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--cor2);
  gap: 6px;
`;

const NumbersRow = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 6px;
  margin-block: 6px;
`;

const NumbersColumn = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
  float: right;
`;

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  font-size: 19px;
  background-color: var(--cor3);
  color: var(--cor4);
  box-shadow: 3px 3px 1px -2px rgba(0, 0, 0, 0.272);
  border-radius: 2px 2px;
  font-weight: bold;

  &:hover {
    background-color: rgb(96, 95, 96);
    font-size: 18px;
    transform: scale(0.98);
    transition: transform 0.1s linear;
    cursor: pointer;
  }
`;

const StyledResultButton = styled(StyledButton)`
  height: 86px;
  background-color: var(--cor5);

  &:hover {
    background-color: rgb(253, 56, 52) !important;
  }
`;

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');

  const addNumber = (num) => {
    setCurrentNumber((prev) => `${prev}${num}`);
  };

  const clearNumber = () => {
    setCurrentNumber('');
  };

  const clearNumber2 = () => {
    setCurrentNumber((prev) => {
      return prev.slice(0, -1);
    });
  };

  const somar = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      clearNumber();
      setOperator('+');
    } else {
      const somarNumbers = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(somarNumbers));
      setFirstNumber('');
      setOperator('');
    }
  };

  const subtrair = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      clearNumber();
      setOperator('-');
    } else {
      const subNumbers = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subNumbers));
      setFirstNumber('');
      setOperator('');
    }
  };

  const multiplicar = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      clearNumber();
      setOperator('*');
    } else {
      const multiplicarNumbers = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplicarNumbers));
      setFirstNumber('');
      setOperator('');
    }
  };

  const dividir = () => {
    if (firstNumber === '') {
      setFirstNumber(currentNumber);
      clearNumber();
      setOperator('/');
    } else {
      const dividirNumbers = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(dividirNumbers));
      setFirstNumber('');
      setOperator('');
    }
  };

  const resultado = () => {
    switch (operator) {
      case '+':
        somar();
        break;
      case '-':
        subtrair();
        break;
      case '*':
        multiplicar();
        break;
      case '/':
        dividir();
        break;
      default:
        break;
    }
  };

  return (
    <Main>
      <VisorContainer>
        <Visor>
          <VisorInput type="text" name="visorInput" id="visorInput" value={currentNumber} maxLength="10" disabled />
        </Visor>
      </VisorContainer>

      <NumbersContainer>
        <div>
          <NumbersRow>
            <StyledButton text="c" className="btnC" onClick={clearNumber} />
            <StyledButton text="ce" className="btnC2" onClick={clearNumber2} />
            <StyledButton text="/" className="btn btnOperator" onClick={dividir} />
          </NumbersRow>
          <NumbersRow>
            <StyledButton text={7} className="btn" onClick={() => { addNumber('7') }} />
            <StyledButton text={8} className="btn" onClick={() => { addNumber('8') }} />
            <StyledButton text={9} className="btn" onClick={() => { addNumber('9') }} />
          </NumbersRow>
          <NumbersRow>
            <StyledButton text={4} className="btn" onClick={() => { addNumber('4') }} />
            <StyledButton text={5} className="btn" onClick={() => { addNumber('5') }} />
            <StyledButton text={6} className="btn" onClick={() => { addNumber('6') }} />
          </NumbersRow>
          <NumbersRow>
            <StyledButton text={1} className="btn" onClick={() => { addNumber('1') }} />
            <StyledButton text={2} className="btn" onClick={() => { addNumber('2') }} />
            <StyledButton text={3} className="btn" onClick={() => { addNumber('3') }} />
          </NumbersRow>
          <NumbersRow>
            <StyledButton text="+/-" className="btn" />
            <StyledButton text={0} className="btn" onClick={() => { addNumber('0') }} />
            <StyledButton text="." className="btn" onClick={() => { addNumber('.') }} />
          </NumbersRow>
        </div>
        <div>
          <NumbersColumn>
            <StyledButton text="x" className="btn btnOperator" onClick={multiplicar} />
            <StyledButton text="-" className="btn btnOperator" onClick={subtrair} />
            <StyledButton text="+" className="btn btnOperator" onClick={somar} />
            <StyledResultButton text="=" className="btn btnResult" onClick={resultado} />
          </NumbersColumn>
        </div>
      </NumbersContainer>
    </Main>
  );
}

export default App;
