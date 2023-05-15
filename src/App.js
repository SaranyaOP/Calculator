import { useState } from "react";

function App() {
  const[calc,setCalc] = useState("");
  const[result, setResult] = useState("");

  const ops = ['/','*','+','-','.']; // operator values
  const updateCalc = value =>{ //this is the function it accets both digit value & operator
      if(
        ops.includes(value) && calc === '' || // this condition like '' +(any operators)
        ops.includes(value) && ops.includes(calc.slice(-1)) // this condition like + -(any operators)
         // it means conditions like empty value + or 2 value as operaors(+-) 
      ){
        return; // if in the above conditions any one is true, this function return as emty, that means nothing is happen
      }
      setCalc(calc+ value);//the above consitions are false then it execute and calculate the value as what given in input
      if(!ops.includes(value)){// this work like 5+6+7 the input like this then it compute and give to result
        //that result given in span value, it is not final calculation it is the computation what give the value yet
        setResult(eval(calc+value).toString()); // give to result
      }
  }

    const createDigits = () =>{
      const digits = []; //this array for creating buttons from 1 to 9
      for (let i = 1; i< 10 ; i++){ // we use for loop for printing array buttons 
          digits.push( // and also 
            <button
              onClick={()=> updateCalc(i.toString())} 
              key={i}>
              {i}
            </button>
          )
      }
        return digits;
    }

    const calculate = () =>{
      setCalc(eval(calc).toString())//this is the final calculation
    }
    const deleteLast = () =>{// this is back button or deleting last value
      if(calc == ''){
        return;// returnl; - this means the function return empty
      }
      const value = calc.slice(0, -1);// it removes last value 
        setCalc(value);
    }
    const Clear = () =>{ 
        setCalc("");
    }
  return (
    <div className="App">
        <div className="calculator">
          <div className="display">
              {result ? <span>({result})</span> : ''}
              &nbsp;
              {calc || "0"}
          </div> 
          <div className="operators">
              <button onClick={()=> updateCalc('/')}>/</button>
              <button onClick={()=> updateCalc('*')}>*</button>
              <button onClick={()=> updateCalc('+')}>+</button>
              <button onClick={()=> updateCalc('-')}>-</button>

              <button  onClick={deleteLast}>
                <i class="fa fa-step-backward" aria-hidden="true"></i>DEL</button>
              <button onClick={Clear}>C</button>
          </div>
          <div className="digits">
              {createDigits()}
              <button onClick={()=> updateCalc('0')}>0</button>
              <button onClick={()=> updateCalc('.')}>.</button>
              <button onClick={calculate}>=</button>
          </div>
        </div>
    </div>
  );
}

export default App;
