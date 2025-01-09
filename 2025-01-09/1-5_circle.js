// 모듈 만들기
// const PI = Math.PI;
// console.log(Math.PI);
const {PI} = Math;


// exports 키워드가 없다면 외부 호출 불가능
// 자바의 public 제한자 라고 생각하면 될 듯
      // export 객체는 프로퍼티나 메서드를
      // 여러개 정의 가능
// exports.area = (r) => r * r * PI;
// exports.circum = (r) => 2 * r * PI;

// 모듈객체의 export에 전부 붙여넣는 방식은
// 리턴을 무조건 1개씩하지만
// 객체로 묶어서 처리가능
//  이라고 설명을 하시긴 하는데..

// 이렇게하면 초기값 r을 사용하게되면
// 모든 반환값이 r에 기반해서 반환된다는거네
module.exports = function (r){
  return{
    area () { return r * r * PI },
    circum () { return 2 * r * PI }
  }
  
  // exports.area = (r) => r * r * PI;
  // exports.circum = (r) => 2 * r * PI;

}