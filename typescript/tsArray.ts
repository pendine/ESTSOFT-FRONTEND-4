// JS : let test = [1,2,3,4];

// ts의 JS와 배열 차이점
// 1. 배열에 타입을 지정하여 
//    해당타입만 배열에 할당 할 수 있도록 처리
// 아래의 코드는 결과자체는 나오지만 ts 문법에 맞지 않음
//  오류가 발생해야하지만 안나옴...

// let test1: string[] = ['t','e','s','t'];
// test1.push('test1');
// test1.push(111);
// console.log(test1);


// 배열에 키워드 readonly를 
// 사용하여 배열의 변경 자체를 방지할 수 있음.
//  -> readonly를 상수타입으로 선언하면 그만

// const name1: readonly string[] =  ['t','e','s','t'];
// name1.push("test");
// console.log(name1);

// 3. 유형화된 배열(튜플) 개념이 존재
//  -> 각 인덱스 별로 길이와 유형이 미리 정의된 형식화된 배열
//  -> 튜플은 배열의 각 요소가 알려진 유형의 값이 될 수 있다는게 유용
let tuple1: [number,boolean,string];
// 튜플에는 선언해둔 타입별로 값을 집어넣을수있음
// 다른 타입이 들어갈경우 에러 발생 
//    => ? 동작은 하지만 에러는 안나는데
// tuple1 = [111, false,'test'];
// console.log(tuple1);
tuple1 = [111, 'test2','test'];
console.log(tuple1);