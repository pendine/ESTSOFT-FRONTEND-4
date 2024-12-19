/*
let i=1;

while(i<51){
  if(i%6==0) console.log(i);

  i++;
}
*/
// while
// do ~ while
// for : for ~in, for ~of, 
//       forEach() - 내장함수


function quiz1(){
  let answer = 0;
  for(let i=1; i<=10; i++){
    answer+=i;
  }
  console.log("1~ 10 = " + answer);
}

function quiz2(){
  for(let i=1; i<10; i++){
    console.log( "4 * " + i + " = " + (4*i));
  }
}


function quiz3(){
  for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
      console.log( i +" * " + j + " = " + (i*j));
    }  
  }
}

// quiz1();
// quiz2();
// quiz3();
// ----------------------------------
/*
for ~ of
-----
순서가 있는 객체(이터러블 객체)를 순회할때 사용

let emoticon=['a','b','c'];
for( let imti of emoticon){
  console.log(imti);
}

for ~ in
객체 내부의 값을 순회함
----
const forIn = {
  name : 'test',
  age : 3,
  dType : 'Type',
  job : 'Job'
}

for(let key in forIn){
  console.log(`${key} : ${forIn[key]}`);
}


forEach
배열의 각 요소를 순회하며 콜백함수를 실행하는 배열함수

Array.forEach((요소, 인덱스, 배열자체) =>
  각 요소에 실행할 코드
  - 요소만 작성해도 입력해도 돼고, 안해도 됌.
)

forEach 메서드의 기본 구조
javascript
array.forEach(callback(currentValue[, index[, array]])[, thisArg])
여기서 주요 부분을 살펴보겠습니다:
callback: 각 요소에 대해 실행할 함수입니다. 필수 인자입니다.
currentValue: 처리할 현재 요소입니다. 필수 매개변수입니다.
index: 처리할 현재 요소의 인덱스입니다. 선택적 매개변수입니다.
array: forEach를 호출한 배열입니다. 선택적 매개변수입니다.
thisArg: callback을 실행할 때 this로 사용할 값입니다. 선택적 인자입니다.
실제 사용 예시
1. 기본 사용법
javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
이 예제에서는 callback 함수가 currentValue만 사용합니다.
2. 인덱스 사용
javascript
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit, index) {
  console.log(`${index}: ${fruit}`);
});
여기서는 callback 함수가 currentValue와 index를 사용합니다.
3. 배열 자체 참조
javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, array) {
  console.log(`${number} is at index ${index} in array ${array}`);
});
이 예제에서는 callback 함수가 모든 매개변수를 사용합니다.
4. thisArg 사용
javascript
const object = { multiplier: 2 };

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * this.multiplier);
}, object);
여기서는 thisArg를 사용하여 callback 함수 내에서 this의 값을 지정합니다.
주의사항
forEach는 배열을 변경하지 않습니다. 단순히 각 요소에 대해 함수를 실행할 뿐입니다.
forEach는 중간에 멈출 수 없습니다. 모든 요소를 순회합니다.
빈 요소는 처리하지 않습니다.
이렇게 forEach의 인자값을 다양하게 활용할 수 있습니다. 상황에 따라 필요한 매개변수만 사용하면 됩니다

*/
Array.forEach( (요소, 인덱스, 배열자체) =>{
  // 각 요소에 실행할 코드
});

