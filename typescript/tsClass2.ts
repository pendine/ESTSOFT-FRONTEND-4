/*
 접근제어자

 public, protected, private

protected : 상속한 클래스 내부... 
부모가 자식한테 접근 가능?? 반대가 아니라?

static : 정적메서드 만들때 사용

*/

// 추상클래스 만들어보기
// abstract class animal {

//   // 추상메서드
//   abstract howl(): void;

//   // 일반메서드
//   eat(): void{
//     console.log("먹기");
//   }
// }

// class Dog extends animal{
//   howl(): void {
//     console.log("울기");
//   }
// }

// const testDog = new Dog();

// testDog.eat();
// testDog.howl();



// // 인터페이스 
// interface Test3{
//   id: number;
//   contents: string;
//   completed: boolean;
// }

// // 변수 test123의 타입으로 Test3 인터페이스를 선언
// let test123: Test3;

// // 인터페이스 기반으로 탕ㅂ이 선언되면,
// // 해당 변수는 인터페이스에 맞게 내용들을 정의

// test123 = {id:123, contents:'test', completed:false };
// console.log(test123);
// // 인터페이스를 상속받을때는 extend가 아닌 implements 키워드 사용 필요
// // 인터페이스는 상속개념이 아닌 구현이라는 표현 사용필요.
// class test4 implements Test3{
//   id: number;
//   contents: string;
//   completed: boolean;

// }



// 타입 alias -> 새로운 타입을 정의할때 사용
// 객체를 선언하는 또다른 방법
//  재사용을 자주한다 => 인터페이스
//    확장성까지 잡고싶으면 인터페이스
// 재사용은 둘째치고 내용변경이 거의 안돼야한다면 : alias
type Person = {
  name:string,
  age:number
}

// 비어있는 객체에 Person 이라는 타입을 지정
const person1 = {} as Person;
