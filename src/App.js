import { useState, useRef, React } from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // Addition Function
  function plus(e){
    e.preventDefault();
    setResult((result) => result+ Number(inputRef.current.value));
  }


  // Subtraction Function
  function minus(e){
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }


  // Multiplication Function
  function times(e){
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  // Division Function
  function divide(e){
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }


  // reseting the input
  function resetInput(e){
    e.preventDefault();
    inputRef.current.value = "";
    
  }


  // Reseting the result
  function resetResult(e){
    e.preventDefault();
    setResult(0);
  }
  

  return (
      <>
        <div className="App" >
          <h1>Simplest Working Calculator</h1>
      
          <hr />
        

        <form>
          <h3 ref= {resultRef} > Your Answer is : {result} </h3>
          <input type="number"
          placeholder="Type a Number"
          pattern= "[0-9] "
          ref={inputRef} />

          <button onClick={plus}>add</button>
          <button onClick={minus}>subtract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>reset input</button>
          <button onClick={resetResult}>reset result</button>

        </form>
        </div>
      </>
  );
}

export default App;
