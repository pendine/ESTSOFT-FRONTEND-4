//배열 : 이름과 인덱스로 참조되는 정렬된 값의 집합.

let test = 1234;
console.log(test);

test = 'asdf'
console.log(test);

test= [1,"4",3,2,5];
console.log(test);
test.sort();
console.log(test);
// --------------------
/*
자바스크립트 배열
주의사항 : js는 타입지정을 하지 않기때문에
          배열에 다른타입을 담아둘때 주의해야함.
          ex) NaN 유발할 수 있음.
*/

test = [1234, "1234" , true, false, NaN, null];
test.forEach( e =>{
  console.log(e + " type : " + typeof e);
})
/*
메모리 영역은
콜스택, 메모리 힙 
콜스택 : 함수 를 불러올때 사용
메모리 힙 영역 : 모든 메모리에 저장

스택 메모리 (Stack Memory) = 콜스택
스택 메모리는 정적 메모리 할당에 사용되며 다음과 같은 특징을 가집니다:
  원시 타입 저장: 숫자, 문자열, 불리언 등의 원시 타입 데이터가 저장됩니다
  고정 크기: 컴파일 시점에 크기가 결정되는 정적 데이터를 저장합니다
  LIFO 구조: Last In, First Out 방식으로 데이터가 관리됩니다
  빠른 접근: 메모리 접근 속도가 빠릅니다
  함수 호출 스택: 함수 호출 정보와 지역 변수가 저장됩니다

힙 메모리 (Heap Memory)
힙 메모리는 동적 메모리 할당에 사용되며 다음과 같은 특징을 가집니다:
  참조 타입 저장: 객체, 배열, 함수 등의 참조 타입 데이터가 저장됩니다
  가변 크기: 런타임에 크기가 변할 수 있는 동적 데이터를 저장합니다
  구조화되지 않음: 데이터가 무작위로 저장됩니다
  느린 접근: 스택에 비해 메모리 접근 속도가 상대적으로 느립니다
  가비지 컬렉션: 사용하지 않는 객체를 자동으로 메모리에서 해제합니다

  배열 만들기
1. [] <= 배열 리터럴
2. let arr = Array(요소1, 요소2) = 객체를 활용한 방법
3. let arr = new Array(요소1, 요소2) = new 연산자 활용

배열 객체 선언시 길이 정의시 
let arr = new Array(10);
배역 삭제시 delete 연산자 활용 
delete arr[9]; <- 요소만 삭제됨.

배열 길이를 초과하는 인덱스에 요소를 입력해도
배열길이가 자동으로 늘어남.
늘어난 길이는 요소를 삭제해도 줄어들지 않음
*/

let arr = new Array(1);
arr[8] = true;
ouputArrayInfo(arr);
delete arr[8];
arr[9] = 'tmp';
delete arr[9];
console.log('------------------------');
ouputArrayInfo(arr);
function ouputArrayInfo(arr){
  for(let i =0; i<arr.length; i++){
    console.log("index : " + i 
                  + " : type : " + typeof arr[i] 
                  + " value : " + arr[i]);
  }
}

let arrOrigin = [1,2,3,4,5];
let arrCopy = [];
// 배열 복사방법
// arrCopy[i] = arrOrigin[i];
// arrCopy.push(arrOrigin[i]);
for(let i = 0 ; i < arrOrigin.length; i++){
  // arrCopy[i] = arrOrigin[i];
  if( arrOrigin[i] %2 ===0)
    arrCopy.push(arrOrigin[i]);

}
ouputArrayInfo(arrCopy);

/*
다차원 배열
예 ) 2차원 배열
와 자바스크립트의 특징이라 이따위로 배열 선언도 가능하네
링크드리스트도 아니고 캬 미쳤다 진짜. 꼬라지 봐라
let testArray = [1,2,[11,22,33,44,55],4,5];
*/