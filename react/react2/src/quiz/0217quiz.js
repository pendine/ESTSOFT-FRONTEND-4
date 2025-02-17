import { useState } from "react";

function Quiz(){

  const [count , setCount] = useState(50);

  function minus(e){
    if(count <= 1){
      setCount(1);
      return;
    }
    
    setCount( prev => ( prev - 1))
  }
  
  function plus(e){
    if(count >= 100){
      setCount(100);
      return;
    }
    
    setCount( prev => ( prev + 1))
  }
  
  return (
    <>
      <div className='counterDiv'>
        <button type='button' onClick={(e)=>{minus(e)}}>-</button>
        <button type='button' onClick={(e)=>{plus(e)}}>+</button>
      </div>
      <div className="counterPrint">
        <p>{count}</p>
      </div>
    </>
  );

}

export default Quiz;