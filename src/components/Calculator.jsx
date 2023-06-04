import React from 'react'
import { useState } from 'react'
import './Calculator.css'
export default function Calculator()
{
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const op = ['+', '-', '*', '/', '.'];

  const updateInput = (num) =>
  {
    if(op.includes(num) && (input ===''|| op.includes(input.slice(-1))))
    {
      return;
    }

    setInput(input+num);

    if(!op.includes(num))
    {
      setOutput(eval(input+num).toString());
    }
  }

  const calculate = () =>{
    setInput(eval(input).toString());
  }

  const del =() =>
  {
    if(input === '')
    {
      return ;
    }
    
    const num= output.slice(0,-1);
    const num1= input.slice(0,-1);

    setOutput(num);
    setInput(num1);
  }

return (
    <React.Fragment>
        <div className='calculator'>
          <div className='display'>
            {/* {output? <span></span> : null} */}
            {input || '0'}
          </div>

          <div className='op'>
            <button onClick={() => updateInput('/')}>/</button>
            <button onClick={() => updateInput('*')}>*</button>
            <button onClick={() => updateInput('-')}>-</button>
            <button onClick={() => updateInput('+')}>+</button>
            <button onClick={ del }>DEL</button>
          </div>

          <div className='number'>
          <button onClick={() => updateInput('1')}>1</button>
          <button onClick={() => updateInput('2')}>2</button>
          <button onClick={() => updateInput('3')}>3</button> <br />
          <button onClick={() => updateInput('4')}>4</button>
          <button onClick={() => updateInput('5')}>5</button>
          <button onClick={() => updateInput('6')}>6</button> <br />
          <button onClick={() => updateInput('7')}>7</button>
          <button onClick={() => updateInput('8')}>8</button>
          <button onClick={() => updateInput('9')}>9</button> <br />
          <button onClick={() => updateInput('0')}>0</button>
          <button onClick={() => updateInput('.')}>.</button>

          <button onClick={calculate}>=</button>
          </div>
        </div>
      
    </React.Fragment>
  )
}


