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

--------------------------------------
*/
console.log( Math.floor(Math.random()*10) );

// 와... 클래스를 따로 생성 안하고 배열로 바꿔서 전달해도 
// 이게 돼네 미쳤다 진짜;
function quiz(){
  let a = Math.floor (Math.random() *150 )+2;
  return a % 3 ===0 ? [a,true] : [a,false];
}
for( let i = 0 ; i < 3; i++){
  console.log(quiz());
}
;