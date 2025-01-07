/*
레벨 4,5는 불가
레벨 1,2,3에 대해서 질문들어온건 하루정도 시간내서 같이 풀 예정

문제풀이 후 주의사항
1. 개선 사항이 있다면 개선할것
2. 다른사람의 코드 풀이 반드시 참조


알고리즘 기본지식
1. 스택, 큐
2. 트리, 그래프
3. 정렬

심화 지식
1. 탐욕법 -> DP
2. BFS/DFS  너비우선/깊이우선 탐색

스택 활용
 웹 브라우저 뒤로가기, 실행취소, 문자열역순출력

스택
 top : 스택의 맨 위 요소 확인
 push : 스택에 아이템 적재
 pop : 스택의 맨 위 요소 적출
 contains : 해당 아이탬이 스택에 존재하는지 확인
 size : 현재 스택 크기 확인
---------------------------------------------------
const stack = []; // 스택을 저장할 배열

// 요소 추가 (push)
function push(item) {
    stack.push(item);
}

// 요소 제거 (pop)
function pop() {
    if (stack.length === 0) {
        console.log("Stack is empty");
        return null;
    }
    return stack.pop();
}

// 스택의 맨 위 요소 확인 (peek)
function peek() {
    if (stack.length === 0) {
        console.log("Stack is empty");
        return null;
    }
    return stack[stack.length - 1];
}

// 스택이 비어있는지 확인
function isEmpty() {
    return stack.length === 0;
}

// 스택 크기 반환
function size() {
    return stack.length;
}

// 예제 실행
push(1);
push(2);
push(3);
console.log( stack.contains(2));
console.log(peek()); // 출력: 3
console.log(pop());  // 출력: 3
console.log(size()); // 출력: 2
---------------------------------------------------




큐 활용
 BFS, 고객대기시간

큐
 first : 큐 의 맨 앞 요소를 확인
 dequeue : 큐의 맨 앞 요소를 적출
 enqueue : 큐에 요소 적재
 contains : 해당 요소가 큐에 존재하는지 확인
 size : 현재 큐 크기 확인

 
 여기에서 디버깅 돌릴때 html 파일을 이용해서 크롬에서 디버깅함




배열.includes( 파라미터 ) : 리턴값 T/F

filter() 메서드 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  filter는 배열의 각 요소를 순차적으로 검사하고, 
  조건을 만족하는 요소만 포함하는 새로운 배열을 반환

array.filter((element, index, array) => {
    // 조건을 작성 (true일 경우 해당 element가 결과 배열에 포함됨)
});


간단한 예제
javascript
코드 복사
let numbers = [1, 2, 3, 4, 5];

// 짝수만 필터링
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

차주일정
오전 이벤트
 - 비동기 전송방식,http,콜백
오후 코딩테스트
 - 트리구조, 스코프, 객체, 메서드 정리
*/

let arr = [1, '1'];
console.log( arr[0] == arr[1] );
console.log( arr[0] === arr[1] );