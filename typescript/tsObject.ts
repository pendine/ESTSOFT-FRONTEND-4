let obj1 = {

}
/*
js객체는 사실 유형(타입) 자체를 추론하는 형식으로
데이터를 받아와서 처리
ts의 경우는 미리 타입을 정해서 받아오는것이 가능
js, ts의 차이는 타입선점이라고 봐도 무방함

*/

// ts식 객체 선언
// test? 의 의미
// ? : 선택적 속성 선언. 안써도 되지만 추가 가능
const car:{type: string, test?:number} ={
  type:"현대 제네시스",
};
car.test=3500;
console.log(car.type , car.test);
