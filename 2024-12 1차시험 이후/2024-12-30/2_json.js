var test = {
  이름 : '홍길동'
  , 성별 : "남자"
  , 직업 : ["한국전통닌자"]
  , 나이 : 30
  , 인종 : "토종순혈조선인"
}

console.log(test);

// object -> json
const result = JSON.stringify(test);
console.log(typeof result +" : "+ result);
// json은 순수텍스트이기 때문에
// js에서는 String으로 인식

const resultParse = JSON.parse(result);
console.log(resultParse);
console.log(typeof resultParse +" : "+ resultParse);
resultParse.성별 = '여자';
console.log(resultParse);

/*
const는 흔히 "상수"를 선언하는 키워드로 알려져 있지만, 
이는 정확한 설명이 아닙니다.
const의 실제 동작 방식을 이해하면 객체의 내용이 변경 가능한 이유를 알 수 있습니다.

const의 실제 의미
  const는 변수에 대한 재할당을 금지하는 키워드입니다. 
  즉, const로 선언된 변수는 다른 값으로 재할당될 수 없습니다
  하지만 이는 변수가 가리키는 메모리 주소가 변경될 수 없다는 의미이며,
  그 주소에 저장된 값 자체의 변경을 막는 것은 아닙니다.

객체와 const
  객체는 참조 타입이므로, const로 선언된 객체 변수는
  객체의 참조(메모리 주소)를 저장합니다
  이 참조는 변경할 수 없지만, 
  참조가 가리키는 객체의 내용은 변경할 수 있습니다.

javascript
  const obj = { name: "John" };
  obj.name = "Jane"; // 가능
  obj = { name: "Jane" }; // 오류: 재할당 불가
const의 특성
  참조 고정: const는 변수의 참조를 고정합니다. 객체나 배열의 경우, 내부 속성이나 요소는 변경 가능합니다13.
  블록 스코프: const는 let과 마찬가지로 블록 스코프를 가집니다8.
  초기화 필수: const로 선언된 변수는 선언과 동시에 초기화해야 합니다6.
결론
  const가 객체의 내용 변경을 허용하는 것은 
  "문제"가 아니라 JavaScript의 설계된 동작 방식입니다. 
  const는 변수의 재할당을 방지하여 코드의 안정성을 높이지만,
   객체나 배열과 같은 참조 타입의 내부 변경은 허용합니다.
  이는 유연성을 제공하면서도 변수의 참조 자체는
  보호하는 균형 잡힌 접근 방식입니다
*/