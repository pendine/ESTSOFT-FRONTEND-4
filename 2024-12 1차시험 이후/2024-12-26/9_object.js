/*
자바스크립트에서의 객체
프로토타입 기반
자바스크립트의 객체지향이 타 언어와 구별되는 점

 - 자바는 클래스 기반의 객체지향
 - 자바스크립트는 프로토타입 기반의 객체지향


 개발자가 만드는 오브젝트 => host Object
 html노드및 기정의되있는 오브젝트 => builtin Object


 객체의 구성
 key: value 형태로 하나의 프로퍼티를 구성
 key : value 형태의 핵심은 key값을 통해 value를 가져옴
 객체 자체를 반복으로 내용을 가져올시 for in 사용 권장
 (배열을 for of)
 for( asdf in fdsa) -> for in
  
 key,value 작성시 주의사항
 - 변수명에 예약어 작성 금지 = 당연한건데
   키값에 예약어 작성 가능, 이게 왜됌 진짜? 미친건가?
   진짜 기가 맥히다


 객체의 종류
 1. 객체 리터럴 타입
    let data = {}; //<-- 빈객체 생성 가능
    // 데이터를 받아올준비
// 객체 예시
let usr = {
  name:"킴아무개"
  , age: 30
  , sayhi : function(){
    console.log("hi~");
  }
}

 2. object 생성자 함수 constructor
    let test = new Object();
  생성된 함수를 통해 생성된 객체를 인스턴스라 부름
  -> String, Number, Array, Date, RegExp등의 내장 생성자 함수를 제공.
  -> 이런 내장 생성자 함수들은(내장 객체) 첫글자는 무조건 대문자

 3. 생성자 함수(typeScript 에서 클래스와 유사한 형태)
 생성자 함수를 통해 인스턴스를 찍어내는느낌
   => ? 팩토리 패턴??
*/
function Test33(name, age){
  this.name= name;
  this.age = age
}
// 아니 리턴값도 변수도 따로 선언 안했는데??
let ins1 = new Test33("a" , 10);
let ins2 = new Test33("b" , 20);

// 클래스가 아니라서?
// 

/*
객체에 접근하는 방법 정리
선언하고 할당하는것도 중요하지만 사용하는것도 중요함
핵심은 key값으로 어떻게 접근하느냐
key값으로 접근시 주의사항. + 접근하는 표기법 2가지

대괄호 표기법, 마침표 표기법
주의사항 1. 키가 '-'(하이픈) 을 포함한다면 대괄호 표기법 사용필요
주의사항 2. 숫자 또한 대괄호 표기법을 사용해야함
        - 아니 에초에 숫자를 쓰면 안되는거 아님?
주의사항 3. 
*/

let info ={
  'dog-type' : '육구시타리아'
   , name : '누렁이'
   , 1: 3
}
console.log( info);
//ReferenceError: dog is not defined 오류. 
// console.log( info['dog-type']); 
console.log( info["dog-type"]); //육구시타리아 : 기댓값 반환
console.log(info[1]); // 묵시적 형변환
console.log(info['1']); //
console.log(info.name); //문제 X
// console.log(info[name]); //문제 ReferenceError
console.log(info['name']); //문제 X

/*자바스크립트의 객체에 정보를 저장할때 이렇게 할수있다라고 
  배우고있는데 실제로 이렇게 쓰면 싸다귀 맞지 않을까?
  변수명을 숫자로쓰고, 문자열로 쓰면 멱살 잡혀서 그대로 로드롤러로 뺨따구 왕복으로 10번은 맞을것같은데
*/

//객체 반복
for( let i in info){
  console.log( i + " : " + info[i]);
}

/*
어.. 그러면 자바스크립트에서 어떤 변수를 선언하던 
기본적으로 프로토타입에서 상속받는거야?
프로토타입이란걸 사용하기 때문에 
오픈오브젝트 타입인거고, 저렇게 생성자 함수를 이용해도 
let이나 var나 const를 사용해서 변수를 선언하는순간 자바나 c, c#에서 알고있는 일반적인 변수가 아닌 프로토타입을 사용하면서, 저장할수있는것같은데
 
*/

console.log(typeof info);

info = 3;
console.log(typeof info);


/*
Q.
자바스크립트에서 let, var, const 변수에 객체나 원시타입, 함수를 구분해서 저장할 필요가 없는건 오픈 오브젝트 타입이라 덕분에 라는걸 이해했고.

function Test33(name, age){
  this.name= name;
  this.age = age
}
// 아니 리턴값도 변수도 따로 선언 안했는데??
let ins1 = new Test33("a" , 10);
let ins2 = new Test33("b" , 20);
이렇게 함수 Test33을 만들어서 나이와 이름을 저장하겠다 했을때 문제 없이 저장할수있는것도 오픈오브젝트를 상속받아서 라는것도 이해를 했는데.

지금 궁금한건, 원시타입을 저장한 변수들도 오픈 오브젝트 타입일텐데 어떻게 구분하는거야?\


A.
자바스크립트에서 원시타입(primitive type)과 객체(object type)는 명확히 구분되며, 그 차이를 이해하면 질문에 대한 답이 명확해집니다. 자바스크립트는 원시타입과 객체 타입을 처리하는 방식에서 몇 가지 중요한 차이를 가지고 있습니다.

1. 원시타입과 객체 타입
원시타입 (Primitive Type)
원시값은 객체가 아니며, 오픈 오브젝트 타입을 상속받지 않습니다.
원시타입에는 다음이 포함됩니다:
            number
            string
            boolean
            undefined
            null
            bigint
            symbol
객체 타입 (Object Type)
객체는 키-값 쌍으로 데이터를 저장하며, 오픈 오브젝트 타입(즉, Object.prototype)을 상속받습니다.
예: 객체({}), 배열([]), 함수(function), new로 생성된 인스턴스 등.


2. 원시타입과 객체를 구분하는 기준
자바스크립트는 원시값과 객체를 저장하고 처리할 때 서로 다른 방식으로 동작합니다:

원시값의 특징
  불변성: 원시값은 변경할 수 없습니다. 
      (새로운 값을 할당하면 기존 값을 대체)
  
  값 자체 저장: 원시값은 변수에 저장될 때 메모리에 값 자체가 저장됩니다.
  
  오브젝트처럼 보이는 동작: 메서드 호출 시 임시 객체가 생성됩니다.

예: "hello".toUpperCase()에서 "hello"는 원시값이지만, 메서드를 호출하면 임시 객체가 생성되어 메서드를 실행 후 파괴됩니다.

객체의 특징
  참조 타입: 객체는 메모리에서 값이 아닌 **참조(주소)**를 저장합니다.
  
  변경 가능성: 객체는 속성을 추가하거나 제거할 수 있어 가변적입니다.
  
  오픈 오브젝트 타입 상속: 객체는 항상 Object.prototype을 상속받아 메서드(toString, valueOf 등)를 사용할 수 있습니다.


3. 원시값과 객체를 구분하는 동작 예시
  1) 변수에 원시값 저장
    let num = 10;       // 원시값 저장
    let str = "hello";  // 원시값 저장
    console.log(num.toFixed(2)); // 임시 객체 생성 후 메서드 호출
    console.log(str.toUpperCase()); // 임시 객체 생성 후 메서드 호출
  위의 num.toFixed(2)와 str.toUpperCase()는 원시값이지만, 자바스크립트 엔진이 내부적으로 임시 객체를 생성하여 메서드를 호출한 뒤, 객체를 삭제합니다.

  2) 변수에 객체 저장
    let obj = { key: "value" }; // 객체 저장
    obj.newKey = "newValue";    // 속성 추가 (변경 가능)
    console.log(obj.toString()); // Object.prototype 메서드 사용 가능
  여기서 obj는 참조값을 저장하며, 속성을 동적으로 추가하거나 삭제할 수 있습니다.

  3) 원시값과 객체의 동작 차이
    let a = 10;           // 원시값
    let b = a;            // 값 복사 (새로운 복사본 생성)
    b = 20;
    console.log(a);       // 10 (a는 영향을 받지 않음)

    let obj1 = { x: 10 }; // 객체
    let obj2 = obj1;      // 참조 복사 (같은 객체를 참조)
    obj2.x = 20;
    console.log(obj1.x);  // 20 (obj1도 영향을 받음)


4. 원시값이 오픈 오브젝트 타입처럼 동작하는 이유
  원시값이 오픈 오브젝트처럼 보이는 이유는 임시 객체 때문입니다:

  원시값에 대해 객체 메서드를 호출하려고 하면, 자바스크립트 엔진은 래퍼 객체를 생성합니다.
  이 래퍼 객체는 메서드 실행 후 즉시 파괴됩니다.

  예제
    let str = "hello";
    console.log(str.toUpperCase()); // "HELLO"

    // 내부 동작
    // 1. new String("hello") 임시 객체 생성
    // 2. String.prototype.toUpperCase 호출
    // 3. 임시 객체 파괴


5. 원시값과 객체 구분하는 방법
  1) typeof 연산자
    typeof는 원시값과 객체를 구분하는 기본 도구입니다:

      console.log(typeof 10);           // "number" (원시값)
      console.log(typeof "hello");      // "string" (원시값)
      console.log(typeof { key: 1 });   // "object" (객체)
      console.log(typeof null);         // "object" (예외적인 동작)
      console.log(typeof undefined);    // "undefined"
      console.log(typeof function(){}); // "function" (함수도 객체)

  2) Object.prototype.toString.call()
  이 방법은 정확하게 타입을 구분할 수 있습니다:

      console.log(Object.prototype.toString.call(10));       // "[object Number]"
      console.log(Object.prototype.toString.call("hello"));  // "[object String]"
      console.log(Object.prototype.toString.call({ key: 1 })); // "[object Object]"
      console.log(Object.prototype.toString.call(null));     // "[object Null]"
      console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"


6. 결론
자바스크립트에서 원시값은 객체가 아니지만, 임시 객체를 생성하여 객체처럼 보이는 동작을 수행합니다.
원시값과 객체는 메모리에서 저장되는 방식(값 저장 vs 참조 저장)과 가변성(불변 vs 가변)이 다릅니다.
원시값과 객체를 구분하려면 typeof나 Object.prototype.toString 같은 도구를 사용하면 됩니다.

요약: 원시값과 객체는 처리 방식이 다르며,
    자바스크립트 엔진이 원시값에 대해 객체처럼 동작하도록 임시 객체를 생성하기 때문에 겉보기엔 오픈 오브젝트 타입처럼 보일 뿐입니다.
*/