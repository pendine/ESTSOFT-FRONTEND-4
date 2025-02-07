import React, {useState, useRef} from 'react';

function Quiz4(){

    const boxRef = useRef();
  
    const tinckle = () =>{
      // 전역 e.target 과 유사함?
      boxRef.current.focus();
    }


  return (
    <>
      <input ref={boxRef}/>
      <button onClick={tinckle}>빤짝</button>
    </>
  );
}


export default Quiz4;