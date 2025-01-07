/*
빅오 표기법
 알고리즘의 효율성을 비교하기위한 단위
 일반적인 사용자들의 PC성능은 가지각색
 
 코테 통과선
 O(1) : 스택)(push, pop)
 O(log n) : 이진트리
 O(n) : for문(중첩없음) 
 O(n log n) : 기본정렬이 아닌 정렬들
  - 가끔 탈락

 O(n^2) : 이중 for문(절대적인건 아님), 삽입, 거품, 선택정렬
  - 탈락

  정렬 : 여러개의 숫자들이 주어졌을때 
        기준에 따라 정렬하여 출력하는 알고리즘
  오름차순, 내림차순

  정렬의 종류
  1. 선택정렬
  2. 버블정렬
  3. 삽입정렬
  4. 병합정렬
  5. 퀵정렬
  6. 힙정렬

  정렬시 고려사항
  1. 안정성 -> 데이터 순서 제대로 바뀌는가
  2. 시간 복잡도  
  3. 메모리 사용량 

  선택정렬
  배열을 기준으로 가장 작은 값을 찾아 정렬하는 개념
  정렬의 방법

  
//let arr1 = [5,3,8,4,9,1,7]
//let len = arr1.length; // 불필요한 프로퍼티(함수 / 다른언어는 함수 호출임)
                       //  호출을 최소화하기위해 변수에 배열의 길이를 저장해두는방법
// for(let i=0; i<len-1; i++){
//     let min = i;
//     for(let j=i+1; j<len; j++){
//         if(arr1[j] < arr1[min]){
//             min = j;
//         }
//     }
//     // 제일 작은값과 해당 요소 위치 변경
//     [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
    
// }


  ----------2024-12-30-----------

  버블정렬
  배열 n요소와 n+1 요소를 비교하여 정렬
인접한 두 요소를 비교하여 순서가 잘못된경우(오름,내림차순 기준) 교환
이를 반복하여 가장 크거나 작은값을 뒤로 이동시키는 방식.
빠르면 O(n), 평균적으로 O(n^2)

첫번째 인덱스부터 시작하여 그 다음인덱스와 비교하거나
두번째 인덱스부터 시작하여 이전 인덱스와 비교하는 형식으로 진행.

비교후 큰 값을 뒤로 보내는 형식으로 연속된 배열값을 끝까지 비교
이를 (전체 배열크기 - 현재까지 순환한 수) 만큼 반복

let arr1 = [5,4,1,3,2]
let len = arr1.length;

for(let i=0; i<len-1; i++){// 버블의 회차별 출발지 설정

    for(let j=0; j<len-i-1; j++){// 버블정렬이 회차별로 완료되면 마지막 부터 하나씩 
                                 // 반복에 굳이 포함하지 않아도 되기때문에 하나씩 줄여가기 위한
                                 // 조건부 설정이 필요함.
        if(arr1[j] >arr1[j+1]){ 

            [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]]; //swap

        }
    }
}


  삽입정렬

let arr1 = [5,3,8,4,2];
let n = arr1.length;
for(let i=1; i <n; i++){
    let key = arr1[i];
    let j = i-1;
    while( j>=0 && arr1[j]>key){
      arr1[j+1] = arr1[j];
      j--;
    }

    arr1[j +1] = key;
}

console.log(arr1)

  
병합정렬
분할과 정복 방식으로 설계된 알고리즘
*/

let arr = [27,10,12,20,25,13,15,22,22];
function divide( arr ){
  
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = divide( arr.slice(0,mid) );
  const right = divide( arr.slice( mid ) );
  
  console.log("mide : "+  mid);
  console.log("left : "+ left);
  console.log("right : " + right);

  return merge(left, right);
}

function merge(left, right){
  const result = []; // <= 배열선언
  let i=0,j = 0;
  while(i<left.length && j<right.length){
    if(left[i] < right[j]){
      result.push(left[i++]);
    }else{
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
  // return [...result, ...left.slice(i), ...right.slice(i)] //스프레드 표현식
}

function mergeSorting(arr){
  return divide(arr);
}


console.log( mergeSorting(arr) );