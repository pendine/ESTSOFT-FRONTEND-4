import React, {useState, useEffect} from 'react';

/*
useEffect
주로 관리하는 예시
1. 데이터 가져오기시 사용
2. DOM direct update
3. timer

useEffect 기본 작성 양식
useEffect( ()=> {
  // 언제나 렌더링 될 때 실행되는 코드
})


useEffect는 모든 렌더링에서 실행됨 
  => 다른컴포넌트가 렌더링 될때도?

useEffect는 실행의 기준을 개발자가 잡아줄 필요가 있음
ex) 마운트가 될때만 실행되거나, 마운트 업데이트만 실행시키거나

useEffect 실행 제어방법
1. 빈 배열 선언 
useEffect( ()=> {
  // 처음만 실행
}, [])

2. 상태값 추가
useEffect( ()=> {
  처음 렌더링시 실행되고
  값이 변경될 때 마다 실행.
}, [])
*/

// function Timer(){
//   const [count, setCount] = useState(0);
//   useEffect(()=> {
//     setTimeout( () =>{ // JS에서 무한증가 하려면
//                        // setInterval 사용
//       setCount( (count) => count + 1);
//     }, 1000);
//   }, [])
//   return (
//     <h1>죠죠!!!! 킷사마노 이노치가 코노 슌칸! 오와리다!!
//        {count}초 경과</h1>
//   )
// }
// export default Timer;
//=====================================================
// 상태값까지 추가하여 useEffect 제어
// function Counter(){
//   const [count, setCount] = useState(0);
//   const [cal, setCal] = useState(0);

//   // 마운트, 업데이트시 실행
//   useEffect(()=>{
//     setCal(()=> count * 2);
//     console.log("useEffect 확인"); //사용자의 화면에선 한번만 변경되지만
//                                   // 실제 동작은 누적되서 반복함

//     // 컴포넌트 언마운트를 제어할 수 도 있음
//     return () =>{
//       console.log("계산완료");
//     }
//   }, [count]) // 상태 변화를 관찰할 변수를 배열에 삽입

//   // return : 컴포넌트가 사라질때 실행.
//   return (
//     <>
//       <p>count : {count}</p>
//       <button onClick={() => setCount((c)=> c+1)}> Click </button>
//       <p>count*2 : {cal}</p>
//     </>
//   )

// /*
// `setCount((c) => c + 1)`에서 상태가 초기화되지 않고 계속 증가하는 이유를 설명해드리겠습니다.

// 1. 함수형 업데이트:
// React의 `setState` (여기서는 `setCount`)는 함수형 업데이트를 지원합니다 . 이 방식에서 `c`는 현재의 상태 값을 나타냅니다.
// 2. 클로저(Closure):
// `(c) => c + 1`은 클로저를 생성합니다. 이 클로저는 현재의 `count` 값에 접근할 수 있습니다 .
// 3. 상태 업데이트 과정:
// React는 이 함수를 호출할 때 현재의 `count` 값을 `c`로 전달합니다. 따라서 `c + 1`은 항상 현재 값에 1을 더한 결과가 됩니다 .
// 4. 장점:
// 이 방식은 여러 번의 업데이트가 동시에 일어날 때 더 안전합니다. 항상 최신의 상태를 기반으로 업데이트하기 때문입니다 .
// */
// }
// export default Counter;

//=====================================================
// 데이터 요청하여 응답 받은 후 처리할때 effect를 활용
// 강사님이 작성한 답안
function UserData(){

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUser(){
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();

        setUsers(Array.isArray(data) ? data : [] );

      }catch(error){
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {user.id}
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
    </div>
  );
}

export default UserData;


// 내가 작성한 내용 . 오류
// 불러와서 표출할때만 오류였는지
// 여튼 반복표출시 jsx 문법 위반으로 인해 표출 오류.
// array 내용 표출시 키값 필요 html 속성에 key={값} 으로 지정해야함
/*
function App(){
  const [userArr, SetUserArr] = useState([]);

  useEffect (async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const userList = await response.json();

    let users = userList.map( (ele) => {
      return{ id:ele.id , name:ele.name, email:ele.email };
    });

    SetUserArr(users);
  })

  return (
    <>
    {userArr.map( function (ele){
      <p> id : {ele.id}</p>
      <p> name : {ele.name}</p>
      <p> email : {ele.email}</p>
    }) } 
    </>
    
  );
}

export default App;
 */