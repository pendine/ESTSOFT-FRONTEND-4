import React, {useState} from 'react';

// 클릭한 버튼에 따라 숫자 증감 적용
// 숫자 상황에 따라 숫자 폰트의 색상 변경

// 강사님 답안
function App() {
  const [count, setCount] = useState(0);

  const getColor = () => {
    if( count === 0){
      return ('black');
    }else if(count > 0){
      return ('blue');
    }else{
      return ('red');
    }
  }

  return (
    <>
      <button onClick={ () => setCount(count - 1)}>-</button>
      <span style={{ color: getColor(), 
                     margin:'0 10px',
                     fontSize:'40px' }}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

// 내가 해본것
/*
function App2() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  
  const plusCount = (e) => {
    e.preventDefault();
    setCount( count + 1);

    
    getCount(e);
  }

  const minusCount = (e) => {
    e.preventDefault();
    setCount( count - 1);

    
    getCount(e);
  }

  const getColor = (e) => {
    if( count === 0){
      setColor('black');
    }else if(count > 0){
      setColor('blue');
    }else{
      setColor('red');
    }
    e.target.style.color = color;
  }

  const getCount = (e) => {
    let pTag = document.querySelector('p');
    if(count === 0 ){
      pTag.style.color='black';
    }else if(count > 0 ){
      pTag.style.color='blue';
    }else {
      pTag.style.color='red';
    }
  }

  return (
    <>
      <button type='button' onClick={plusCount}>+</button>
      <button type='button' onClick={minusCount}>-</button>
      <p onChange={getColor}>{count}</p>
    </>
  );
}
*/

export default App;