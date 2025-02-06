import React, {useState, useEffect} from 'react';
/**
useState의 경우는 익숙치 않아서 처음에는 어색한 느낌이 들음
컴포넌트의 변수값 관리라고 이해

클래스를 만들때
필드 + 메서드를 만들었음
useState를 통해서 이부분을 요약해서 진행

*/

function State(){
  // State는 필요한만큼 선언해서 컴포넌트 내부의 변수값을 컨트롤
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hobby, setHobby] = useState('');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="나이를 입력하세요"
      />
    </div>
  );
}


export default State;