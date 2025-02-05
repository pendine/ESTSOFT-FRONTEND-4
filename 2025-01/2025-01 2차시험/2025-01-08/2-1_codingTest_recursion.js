// x를 n제곱하는 함수를 직접 구현
// superpower
// console.log(superpower(2,3)) // 8
// console.log(superpower(2,5)) // 32

function superpower( x, n ){
  if( n === 0 ){
    return 1;
  }
  else{
    return x * superpower( x, n-1 );
  }
}

console.log(superpower(2,3));
console.log(superpower(2,5));

/*
재귀호출 장단첨
장점 
  1. 변수 선언 최소화
  2. 코드 간결화

단점
  1. 일반적인 반복문대비 메모리 사용량 증대
    - 꼬리재귀법을 활용하면 되지만 장점이 무색해짐
  2. 
*/

function fibo(x){
  if(x === 1){
    return 1;
  }else if( x<=0 ){
    return 0;
  }
  return fibo(x-1) + fibo(x-2);
}

console.log( fibo(10) );

// ------------------------------------

let company = {
  sales: [
    {
    name: 'John',
    salary: 1000
    },
    {
    name: 'Alice',
    salary: 1600
    }
  ],
  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000
      },
      {
        name: 'Alex',
        salary: 1800
      }
    ],
    internals: [
      {
        name: 'Jack',
        salary: 1300
      }
    ]
  }
};

// 모든 부서의 급여 합 구하기
// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if (Array.isArray(department)) { // 첫 번째 경우
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}
