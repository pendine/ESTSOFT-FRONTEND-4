// 실행단축키 ctnl+alt+n


// 1. 변수(variable) / 변하는 수
//  -> 값을 저장하고 저장된 값을 참조하기 위해 사용하는 개념.
//  -> 한번만 사용하는게 아니라 자주 사용되는 값들을 저장해뒀다가
//     필요할때 사용하려고 변수를 '선언'함
//  -> 변수는 위치를 기억하는 저장소(위치 = 주소)
//  -> 공학적으로 변수를 얘기하자면 메모리주소에 접근하기 위해
//     사람이 이해할수 있는 언어로 지정한 식별자.

var test = 'testtt';
console.log(test);

//리터럴 종류
// 리터럴 : 값을 구성하는 최소단위(분해할수 없는값.)
// 문자
// -> 문자 리터럴값을 표현할때 "", '' 둘 중 하나.
//    작은따옴표 큰따옴표를 입력하고싶다면
//  1. \를 사용
//  2. 작은따옴표 사용시 큰따옴표사용
//     큰따옴표 사용시 작은따옴표 사용
var smallQuote = '"큰따옴표';
var bigQuote = "'작은따옴표";

var list = [smallQuote,bigQuote];

list.forEach( 
    elem =>{
        console.log(elem);
    }
)


// 숫자
// boolean
// null
// undefined
// 객체
// 
// 원시타입
// 자바스크립트는 타입이 정의되어있지 않음. <= 오픈오브젝트라고 함.
// number
// JS에는 number 라는 타입 하나만 존재
// (자바스크립트 숫자타입 특징
//  - 모든 수를 실수로 처리. 정수로 표현된다 해도 사실은 실수임.)
// js는 일반적인 숫자 외 64비트 부동소수점 표현
// js 표현할 수 있는 숫자 범위는 -(2^53-1)~ 2^53-1
//   별도의 숫자타입
//   1. infinity
//   2. NaN
// string
// boolean
// null : 
// undefined : null과 비슷하지만 차이점이 있음.
//             null은 타입이 있음. undefined 타입이 없음.
//             선언만해둔 변수를 출력하거나 존재하지 않는 객체의 프로퍼티로 접근시 발생
//             JS엔진에 의해 초기화 된 값
//      주의사항: 개발자 마음대로 이 타입을 쓰지말것
//              값이 없는 것을 사용할때는 null

// var, let, const
// const : 상수 선언. 상수 선언시 동일한 변수명을 재선언.
//         선언된 변수에 값 재할당 불가능.
// let : 재선언만 불가. 변수가 필요할때 사용.
//          변수의 값이 바뀌어야하면 사용.
// var : 잘 안쓰이는 추세.

// symbol(ES6)

// 객체타입
// Object
