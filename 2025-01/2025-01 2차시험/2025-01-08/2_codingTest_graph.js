/*
그래프
정점과(vertex, node) 간선(edge)으로 이루어진 자료 구조

지하철 노선 최단경로, 최단 도로 찾기등에 사용할 수 있음

트리 자체가 그래프의 일종
 -> 규칙있는 그래프가 트리
 -> 그래프는 트리와 다르게 정점마다 간선이 존재하지 않을수도 있음(직접연결x)
 -> 부모 자식 개념이 아님x (부모 자식 노드 개념자체가 없음.)

그래프는 용어 정리
  정점(vertex, node) : 데이터를 저장하는 위치
  간선(Edge) : 정점을 연결하는선, 링크나 브랜치 라고도 부름
  인접정점(adjacent vertex) : 간선에 의해 직접 연결된 정점
  -> 직접 붙은게 아니면 인접정점 아님.
  단순경로(simple path) : 경로중에서 반복되는 정점이 없는 경우
  -> 같은 간선을 지나가지 않는 경우
  차수(degree) : 하나의 노드(정점)에 인접한 숫자
  진출차수(in-degree) : 방향 그래프에서 외부로 향하는 간선의 수
  진입차수(out-degree) : 방향 그래프에서 외부에서 들어오는 간선의 수
  경로길이(path length) : 경로를 구성하는데 사용된 간선의 수
  사이클(cycle) : 단순 경로의 시작 정점과 종료 정점이 동일한 경우

그래프 종류
  1. 무방향 그래프
    간선에 방향이 없는 그래프
  2. 방향 그래프
    간선에 방향이 있는 그래프
  3. 가중치 그래프
    두 정점을 이동할때 비용이 적혀있는 그래프
  4. 완전그래프
    모든 정점이 간선으로 연결돼있는 그래프


그래프 구현 방법
  2차원 그래프
  해시테이블 자료구조
  인접리스트(hash / key:val), 인접행렬



    경우의 수를 확인하는 경우의 케이스가 DFS or BFS 를 사용하는 경우
    최소 경로, 경우의 수는 BFS
    모든 경로, 경우의 수는 DFS

*/

// 인접리스트 표현식
let 인접리스트표현식 = {
  0:[1,3],
  1:[2],
  2:[],
  3:[1,4],
  4:[1],
  5:[]
}

// 인접행렬 표현식
let 인접행렬표현식 = [
  [0,1,0,1,0], // 0번정점
  [0,0,2,0,0], // 1번정점
  [0,0,0,0,0], // 2번정점
  [0,1,0,1,0], // 3번정점
  [0,1,0,0,0]  // 4번정점
  [0,0,0,0,0]  // 5번정점
];

/*
그래프 탐색
DFS : depth first search
  루트(임의)노드 시작 - 다음분기로 넘어가기전 해당분기를 완벽히 탐색
  넓게보기전 깊게
  모든 노드에 접근이 필요한 경우 사용
  구현이 간단
  재귀호출을 활용 (스택으로 구현 가능)
방문한곳을 저장할 수 있어야함.
set이라는 객체를 활용하면 중복된값을 허용하지 않음
*/

// let graph = {
//   'A': ['B', 'C'],
//   'B': ['A', 'D', 'E'],
//   'C': ['A', 'F'],
//   'D': ['B'],
//   'E': ['B', 'F'],
//   'F': ['C', 'E']
// }
// const visited = new Set(); // 방문한 정점을 저장
// function dfs(visited, graph, node) {
//   if (!visited.has(node)) { // 종료 조건
//       console.log(node); // 현재 노드 출력
//       visited.add(node); // 현재 노드를 방문 처리
//       for (const neighbor of graph[node]) { // 인접 노드 순회
//           dfs(visited, graph, neighbor); // 재귀 호출
//       }
//   }
// }
// // DFS 호출
// dfs(visited, graph, 'A');

// 경우의 수를 확인하는 경우의 케이스가 DFS or BFS 를 사용하는 경우
// 최소 경로, 경우의 수는 BFS
// 모든 경로, 경우의 수는 DFS
// 코딩테스트
// https://school.programmers.co.kr/learn/courses/30/lessons/43165
// function solution( numbers , target){
//   let result = 0;

//   function dfs(index, curSum){
//     if(index === numbers.length){ // 배열을 끝까지 탐색
//       if(curSum === target){
//         result++;
//       }
//       return;
//     }

//     // 현재 숫자를 더하거나 빼는 두가지의 경우로 분기를 줌
//     // 설명듣다가 이거보고 이해됐네
//     // 이야 교수님 존에 잠깐 들어왔다 이 시간이 끝나면 다시 이해가 안돼겠지...
//     // 대체 첫번째 요소는 어떻게 +/- 하는거지? 했다가 
//     // index 연산자를 잘 못 보고 있었다는 걸 너무 늦게 알았다...
//     dfs(index +1, curSum + numbers[index]);
//     dfs(index +1, curSum - numbers[index]);
//   }

//   dfs(0,0);
//   return result;
// }

// console.log( solution( [1, 1, 1, 1, 1] , 3) ) //5
// console.log( solution( [4, 1, 2, 1] , 4) ) //2

/*
BFS : breadth first search
  루트(임의)노드 시작 - 인접한 노드를 우선하여 탐색
  깊게 탐색전 넓게 탐색하는것
  일정한 노드의 최단경로 혹은 임의의 경로를 찾고싶을때 사용
  큐를 활용


최단거리 및 탈출 가능 경로 유무 확인
게임 맵 최단거리
https://school.programmers.co.kr/learn/courses/30/lessons/1844
*/

function solution(maps){
  const dx = [ 0, 0, -1, 1]; //x축 이동방향 (방향벡터)
  const dy = [ -1, 1, 0, 0]; //y축 이동방향
  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0]]; // 큐를 통해 탐색. 시작점 지정
  // 방문한곳은 숫자 2로 변경

  maps[0][0] = 2; // 시작지점이라 방문처리해도 문제 없음

  while(queue.length > 0){
    const [x,y] = queue.shift(); // 해당 배열에서 첫번째 요소를 제거하고 
    //큐에서 현재 노드를 꺼냄       // 제거된 요소를 리턴
    
    // console.log("test");
    for(let i=0; i<4; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      // console.log("nx :"+nx);
      // console.log("ny :"+ny);
      // console.log("test2");

      // 맵 범위를 벗어나지 않고 방문하지 않은 경우
      if( 0<=nx && nx < n && 0 <= ny && ny < m && maps[nx][ny]===1 ){
        maps[nx][ny] = maps[x][y] + 1; // 거리 갱신
        // console.log("거리 갱신");
        queue.push([nx, ny]);
      }else{
        // console.log( `maps[${nx}][${ny}] 거부`);
      }
    }

  }

  const answer = maps[n-1][m-1];
  return answer > 2 ? answer - 1 : -1;
}

console.log( solution( [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]] ) ); // 11
console.log( solution( [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]] ) ) // -1
