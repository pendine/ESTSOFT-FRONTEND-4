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
  1. 하나씩 비교
*/

let a = [4,5];
let b = [5,6];


let targets = [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]];

// function solution(targets) {
//   var answer = 0;
//   targets.sort();
//   console.log(targets);
//   while(true){
//       let changed = 0;
//       let base = 0;
//       for(let i = 0 ; i < targets.length; i++){
//           if(targets[i] ===-1){
//               continue;
//           }
//           if(base ===0){
//               base = targets[i];
//               targets[i]= -1;
//               answer++;
//               changed ++;
//               console.log("base 바뀜 : " + base + " index : " + i + " 내용 : " + targets[i]);
//               continue;
//           }
          
//           if( (base[0] >= targets[i][0] && base[0] <= targets[i][1] )
//               || (base[0] >= targets[i][0] && base[1]<=targets[i][1])
//               || (base[0] <= targets[i][0] && base[1]>=targets[i][1])
//               || (base[1] > targets[i][0] && base[1]<=targets[i][1])
//           ){

//               console.log("base 값 : " + base + " 조건에 맞음 : " + targets[i]);
//               targets[i]= -1;
//           }
//       }
//       if(changed === 0){
//           break;
//       }
//   }
//   return answer;
// }

function solution(targets) {
  // 끝 지점 기준으로 정렬
  targets.sort((a, b) => a[1] - b[1]);

  let answer = 0;
  let lastIntercept = -1;

  for (let [start, end] of targets) {
      // 현재 미사일이 겹치지 않는 경우 새로운 요격 미사일 발사
      if (lastIntercept < start) {
          answer++;
          lastIntercept = end - 0.5; // 실수 값으로 끝점을 설정하여 개구간 처리
      }
  }

  return answer;
}

console.log( solution(targets) );