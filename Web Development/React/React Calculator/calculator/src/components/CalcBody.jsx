import {
    useState,
    useRef
  } from "react"; 
  import "../assets/App.css";
  
  function CalcBody() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }; 
   
    function minus(e) { 
        // Add the code for the minus function 
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value)) 
    };
   
    function times(e) { 
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value)) 
    }; 
   
    function divide(e) { 
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value)) 
    };
   
    function resetInput(e) { 
      e.preventDefault();
      inputRef.current.value=null;
    }; 
   
    function resetResult(e) { 
        e.preventDefault();
        setResult((result) => result=null )
    }; 
   
    return ( 
      <div className="CalcBody"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result}
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>Subtract</button> 
          <button onClick={times}>Multiply</button>  
          <button onClick={divide}>Divide</button> 
          <button onClick={resetInput}>Reset Input</button> 
          <button onClick={resetResult}>Reset Result</button> 
        </form> 
      
      </div> 
      
    ); 
  } 
   
  export default CalcBody; 
  