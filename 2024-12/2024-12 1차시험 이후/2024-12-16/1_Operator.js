/*
값을 표현하는 방식, 조합
-> 표현식

표현식 : 리터럴, 함수 호출등의 조합
-> 사칙연산등을 통해 값의 조합을 출력
키워드(예약어) : 이미 기능이 있는 문자
-> 키워드는 변수명이나 함수명으로 만들 수 없음.(만들어선 안됨)

변수 test1을 선언하고 문자 '1234'를 값으로 할당
따옴표로 둘러쌓여지면 무조건 문자로 인식
*/

var test1 = '1234';

/*
연산 예시
1. 문자 연산(JS는 기본적으로 덧셈만 가능)
console.log('aaaa'+'bbbb');

연산자 종류
1. 산술연산자
 - 사칙연산자, %(mod)
 ++, -- : 전위 후위 연산자는 자바와 동일
 
2. 할당연산자
 =, +=, -=, *=, /=, %=

3. 비교연산자
자바스크립트가 다른언어읃ㄹ보다 이 연산자의 개념이 특별함
 - 자바스크립트는 값도 중요하지만 타입이 개방형(open object형태)이기 때문에
   타입을 구분하는 척도로 잘 써야함
 - 조건식 등의 논리형 식에 주로 사용됨
 - 좌,우항을 비교하는 연사자
 자바스크립트는 개발자의 의도와 상관없이 암묵적으로 타입이 자동 변환되기도함
(묵시적 형변환)
 == 동등 연산자
    (타입을 일치시키고 값이 동일한지 비교)
 != 부등 연산자
console.log(97==97); // true
console.log(97=='97'); // true
console.log(97==='97'); // false

 === 일치연산자
    타입과 값이 동일해야 true 출력
 !==
 NaN
 비교시 주의
 - JS에서 NaN은 자신과 일치하지 않는 유일한값
 NaN를 검칠하는 식 자체를 UI 개발자는 고려해야할때가 있음.
let test = NaN;
console.log(test==NaN);  // false
console.log(test==-NaN); // false
console.log( isNaN(test)); // true

4. 논리연산자 : >,<, >=, <=, &&(AND), ||(OR), !(NOT)

5. 삼항연산자 

6. typeof : 데이터 타입을 체크하는 함수
privmitive 타입 6개
object(객체), function 타입을 구분할 수 있음.
console.log(typeof "9724"); // string

typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof { }             // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"

7.기타 연산자
 - 쉼표 연산자
   연산자들 실행순서결정
   마지막 피연산자의 결과가 끝나면 그 결과를 리턴
let a, b, c;
console.log(a=1,b=2,c=3); // 1 2 3

 - 그룹 연산자
 그룹내의 표현식을 최우선으로 평가.


자바스크립트에서 이벤트르 구현할때 가장먼저 해야하는것.
-> 어떤 요소가 어떤 이벤트에 적용되는지를 최우선으로 고민해야함
   요소를 불러올때 1개를 불러올지 여러개를 불러올지 선택을 잘해야함

클릭이벤트를 구현할때는 우선 클릭한 상황부터 구현하는것이 편함


   */

