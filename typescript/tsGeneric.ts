/*
자바같은 언어들은 타입이 정적임

TS에서는 타입이 정적으로 이용되기때문에 ts에서는 generic을 출시

제네릭 : 클래스를 정의하는 시점에 파라미터나 리턴값 타입이 필수
 - 코드를 짜다보면 타입 지정이 어려울수도 있음
 - TS에는 any라는 타입이 있긴함 -> any? 그냥 모든 타입인듯
   (any는 상황에 따라 에러가 발생 가능)
 - TS에서 다양한 타입을 지원해야하는 경우 제네릭을 사용

*/

// class Queue {
//   // any를 사용하면 어떤 데이터든 저장 할 수 있음.

//   protected data: any[] = [];

//   push(item: any) {
//     this.data.push(item);
//   }

//   pop() {
//     return this.data.shift();
//   }
// }
/*
위의 queue클래스를 상속받아 아래의 코드가 문제없이 동작할 수 있도록
number Queue 클래스를 작성
*/

class NumberQueue extends Queue{
  push( item:number ){
    super.push(item);
  }

  // pop(){ //내가 작성한부분
  pop():number{
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1

queue.push('1'); // 의도하지 않은 실수!

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // Runtime error

// 제네릭 사용 Queue 클래스 정의
class Queue<T> {
  data: Array<T> = [];

  push(item: T){
    this.data.push(item);
  }

  pop(): T| undefined{
    return this.data.shift();
  }
}




// number 전용 Queue
const numberQueue = new Queue<number>(); 

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

// ?. => optional chaining
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
console.log(numberQueue.pop()?.toFixed()); // 0
console.log(numberQueue.pop()?.toFixed()); // 1
console.log(numberQueue.pop()?.toFixed()); // undefined

// string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop()?.toUpperCase()); // HELLO
console.log(stringQueue.pop()?.toUpperCase()); // WORLD
console.log(stringQueue.pop()?.toUpperCase()); // 
// 커스텀 객체 전용 Queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});
console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // undefined