/*
내장객체
코딩테스트를 하면서 유용하게 쓸수있는 객체들
1. Number
2. Math
3. Date
4. String
5. RexExp
6. Array
7. Error(예외처리)

객체들은 바로 사용 가능한 객체도 있지만
new 를 통해 생성후 사용해야할수 있음

--------------------------------------
Number 
 -> 숫자타입을 생성
 let a = new Number(123);
프로퍼티, 메서드

MAX_VALUE : JS에서 사용가능한 최대값
 => 표현 가능한 수를 벗어나서 undefined
MIN_VALUE : JS에서 사용가능한 최소값
    let a = new Number();
    let b = a.MAX_VALUE;
    c.toString(b.MAX_VALUE);
    console.log(b);
isInteger : 정수값인지 아닌지 검사하여 t/f로 반환
    Number.isInteger(var);
isNaN : 숫자인지 아닌지 검사
    Number.isNaN
toFixed : 지정된 소수점 자리를 반올림하여 문자열로 반환
    let a = 123.456;
    console.log(a.toFixed(2)); //123.46
    console.log(typeof a.toFixed(2)); //string
toString : 숫자를 문자열로 리턴
    console.log(a.toString()); 
--------------------------------------
연산함수(프로퍼티)
Math -> 난수
1.PI : 파이
  - Math.PI
2.abs() : 절대값 
  - Math.abs(-1223);
3.round : 반올림 (정수화)
  - Math.round(123.123)
4.ceil : 소수점 이하 올림
  - Math.ceil(123.123)
5.floor : 소수점 이하 내림
  - Math.floor(123.123);
6.sqrt : 인수의 제곱근 리턴
  - Math.sqrt(81);
7.random : 0~1 사이의 임의의 값
  - Math.random();

Max.max(...test) 배열 요소중 가장 큰수 리턴
Max.min(...test) 배열 요소중 가장 작은 수 리턴

--------------------------------------
Date
UTC 를 기점으로 경과한날짜와 시간을 가지는 개체를 리턴
KST -> (대한민국 GMT + 9)

프로퍼티
year
month
day
hour
minute
second
millisecond


Date 객체 
  사용할때 new 를 사용하지 않아야함
메서드
now : 1970 1월 1일 0시0분0초를 기점으로
 현재까지 경과한 밀리초를 숫자로 반환
 var test1 = Date.now();
 console.log(test1);  //1735863051398

getMonth(): 월을 나타내는 정수 리턴
  표기시 0~11
getDate() : 날짜를 나타내는 정수 리턴
  표기시 오차 없음
getDay() : 요일를 나타내는 정수 리턴
  표기시 0~6 일 ~ 토
getHours() : 시간을 나타내는 정수 리턴
  표기시 0~23
getSeconds() : 시간을 나타내는 정수 리턴


UTC 시간으로 한국시간 얻기
엔진따라 결과가 다르기도 함.
이 코드는 크롬 엔진에서 동작해야 
원하는 결과값을 확인할 수 있음
const now = new Date();
const utcResult = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);;
const koreadiff = 9 * 60 * 60 * 1000;
const koreaTime = new Date(utcResult + koreadiff);

console.log(koreaTime);

기본 날짜 형식
yyyy/mm/dd

let day = new Date();
console.log( day.getFullYear() );
day.setFullYear(2025,1,1); //크롬엔진에서는 1월1일 //vs코드에서는 2월1일
console.log(day);


--------------------------------------
String (primitive type)
  - Wrpper 객체
  - 변수 또는 객체 프로퍼티가 문자열을 값으로 가지고 있다면
    String을 별도로 선언하지 않아도 String 객체 자체를 사용할 수 있음
  - 객체 선언하면 Object
    선언하지 않고 사용하면 String으로 나옴

string은 유사배열타입

let test = 'string';
let testS = new String('string');
console.log( test ); //string
console.log( testS ); // [String: 'string']
console.log( typeof test ); // string
console.log( typeof testS ); // object

String 특징
 기본적으로는 '프로그램이 실행되는동안' 문자열은 변경 불가 = 불변
 메서드들을 활용하여 새로운 문자열을 리턴하는 식으로 변경


charAt
 한글자 추출 메서드. 인덱스 필요
지정 인덱스는 문자열의 범위를 벗어나도 됌 => 에러 안남
const test = 'abcdefg';
for(let i=0; i < test.length; i++){
  console.log(test.charAt(i));
}

concat
 문자열과 문자열 연결 메서드
 성능은 할당연산자가 더 좋음

indexof( '찾을 문자열' , 시작인덱스 )
 특정 문자나 문자열의 위치를 반환

replace(  '대상문자열' , '대체문자열');
  대상 문자열을 대체 문자열로 변경.
 정규표현식 사용 가능

split( '문자열' )
  문자열을 잘라 배열로 반환
  console.log( test .split( 'h' ) ); // [ 'asdfg', 'jkl' ]

subString 
slice( 시작 인덱스 , 끝인덱스 )
  끝인덱스 (옵션) - 기본값 : 문자열끝
  console.log( test.slice( 3 ) ); //fghjkl
  slice는 음수도 쓸수있음.
   뒤부터 자름

--------------------------------------

*/

const test = 'asdfghjkl';
console.log( test .replace( 'a' , 'b' ) );
console.log( test .split( 'h' ) ); // [ 'asdfg', 'jkl' ]
console.log( test.slice( 3 ) ); //fghjkl
