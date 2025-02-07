import React, {useState, useEffect}  from 'react';
import useFetch from './cs';
/*
커스텀 훅
 상태로직을 재사용 할 수 있도록 하는 기능
 함수 이름을 정의해놓고 useState, useEffect 등을 사용하여 구현

 커스텀훅 = 컴포넌트 재사용성의 궁극의 정수
  - 기존 컴포넌트 구성코드의 중복도 줄일수 있다는 장점
  - API 호출, 폼데이터 관리, 중복되는 애니메이션 기능들을
    커스텀 훅으로 만들어서 사용
 
리액트 프로젝트의 일반적 폴더구조
추후 : typescript + react = tsx

src 
 - component(UI 컴포넌트 저장 폴터)
 - hooks(커스텀 훅 저장 폴터)
 - utils(유틸리티 함수 저장 폴더)
 - pages(페이지 이동과 관련된 컴포넌트)
 - styles(css or scss)
 - assets(이미지, 폰트등의 정적 파일)
 - context (리액트 컨텍스트 저장 폴더)
app.js (mainComponent)

폴더구조에서 커스텀훅과 유틸을 나눈 이유
커스텀훅은 react훅을 활용하여 공통적 코드를 처리
 - 컴포넌트의 상태, 라이프사이클영향을 많이 받음
유틸은 리액트와 무관한 코드들, 어디서나 호출되면서 컴포넌트에 종속되지 않음
 - 단순한 js


커스텀훅의 특징
 재사용성, 캡슐화 (코드 보안, 유지보수성), 모듈성

*/

function LoadData(){

  // const [data, setData] = useState(null);

  // 이 부분을 커스텀 훅으로 변경
  // 요청은 이파일에서 진행
  // 커스텀훅을 따로 분리해서 그 다음 붙이기
  // 요청은 이파일 요청에 대한 처리는 커스텀 훅에서 진행
  
  
  const [data] = useFetch( "https://jsonplaceholder.typicode.com/todos" );
  
  // "https://jsonplaceholder.typicode.com/todos"
  // useEffect(() => {
  //   fetch()
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}


export default LoadData;