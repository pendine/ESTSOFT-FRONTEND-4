/*
트리구조

노드로 이루어진 자료구조

트리구조용어
노드
 - 트리를 구성하는 기본요소
// 루트 노드 : 최상위 노드(트리구조 내에서)
// 부모 노드 : 자식노드를 가진 노드
// 자식 노드 : 부모의 하위 노드
// 동등(Sibling) 노드 : 같은 부모, 같은 위치 노드
// 외부노드(단말노드, 리프노드) : 자식노드가 없는 노드
// 내부노드(비단말노드, 가지노드) : 자식 노드가 한개 이상 있는 노드


간선
 - 노드와 노드간의 연결선

깊이 : 루트에서 어떤 노드까지 간선수
높이 : 어떤 노드에서 리프까지의 간선수
레벨 : 루트에서 어떤 노드까지 간선수
차수 : 해당 노드의 자식수
경로 : 한 노드에서 다른 한 노드에 이르는 길
      사이에 노여진 노드들의 순서
size : 자신을 포함한 자식 노드의 수
order : 부모노드가 가질수있는 최대 자식수
degree : 차수

트리의 특징
 - 루트노드가 있어야함
 - 0개 이상의 노드
 - 비선형
 - 무방향 그래프 구조
 - 일정한 룰이 있어서 그것을 벗어나면 비슷하게 보여도 
 트리구조라 할 수 없는 경우도 발생함
 - 사이클이 형성되는 경우는 트리구조라 할 수 없음
   (사이클 : 자식노드가 겹치는 경우)

트리 종류 
 - skew 트리 편향트리 : 모든 노드들이 자식을 1개만 가짐
 - 이진트리(코딩테스트 대세 구조) : 응용이 많이 나와요~
    각 노드의 차수가 2이하
 - 이진 탐색 트리(BST) : 이진트리인데 순서화 돠면 이진 탐색트리
 - m원 탐색 트리 : 최대 m개의 서브 트리를 갖는 탐색 트리
     이진 탐색트리의 확장된 형태로 높이를 줄이기 위해 사용
 - 균형 트리 (B-tree) : 탐색트리에서 높이 균형을 유지하면 균형트리

 트리 사용예
  - 효율적인 CRUD
  - 계층 구조 생성시 (계층적 데이터 저장)
  - Heap
  - DB 인덱싱

이진트리
 - 이진 탐색트리 : 
 - 완전 이진트리 : 마지막 레벨은 꽉 차있지 않아도 되지만 노드는 왼쪽, 오른쪽노드순으로 차있어야함
 - 포화 이진트리 : 꽉찬 2진트리
 - 전 이진트리 : 모든노드가 자식이 없거나 2개의 자식노드가 있는경우

트리 순회(재귀)
 비선형 => 요소 접근방식이 다름


 전중후의 뜻은 루트를 언제 읽는지가 기준
 1. 왼쪽 2. 오른쪽이 기본순서, 거기서 루트를 언제 읽는지가 기준

전위순회(Preorder Traversal) / 깊이우선순회
 - 트리복사 및 전위표기법을 구할때
 - 루트 왼쪽 오른쪽순
중위순회(Inorder)
 - 왼쪽 루트 오른쪽순
후위순회(Postorder)
 - 왼쪽 오른쪽순 루트


 2023~2024 코테 단골 문제 (+DP)
 DFS, BFS 메모리 사용량이 많음.
다만 특정한 조건을 마족하는 경로를 찾거나
최단 경로를 찾을때 사용한다

 DFS (Depth First search) 깊이우선
 - 한 경로를 끝까지 탐색하고 다음경로 탐색
 - 스택과 유사
 특정 조건이 까다로운때 유리

  시작노드에서 출발 -> 한쪽으로만 갈수있을만큼깊게내려감
   -> 더이상 못가면 이전노드로 돌아가 다른경로 탐색
 BFS (Breadth first search) 너비우선
 - 시작노드에서 가까운 노드를 먼저 탐색한 후 점차 멀리있는 노드를 탐색
 - 큐
 짧을때 유리

 */

function binaryTree(){
  const tree = [];
  function insert(a){
    if (tree.length ===0) {
      tree.push(a);
      return 0;
    }
  }
}

// 이게 아마 2진 트리 구조의 객체로 나타낸 형태일거임
// 편향 제거를 위해서 다시 삽입시도를함.
// function Tree(value = null){
//   let data = value;
//   let left = new tree();
//   let right = new tree();

//   function insert(a){
//     if( data === null)
//       data = a;
//     else {
//       if (data < a)
//         if(right.getData()!==null){
//           if( a<right.getData()){
//               let tmp = data;
//               data=a;
//               insert( tmp );
//           }else{
//             right.insert(a);
//           }
//         }
//         else{
//           right = new Tree(data);
//         }
//       else if( a < data )
//         if(left.getData()!==null){
//           if( a<left.getData()){
//               let tmp = data;
//               data=a;
//               insert( tmp );
//           }else{
//             left.insert(a);
//           }
//         }
//         else{
//           left = Tree(a);
//         }
//     }
//   }

//   function getData(){
//     return data;
//   }
// }

// chatgpt < = 편향을 못고침
//  편향 제거하려면 하위노드들을 전부 회전시킴.
// class Tree {
//   constructor(value = null) {
//     this.data = null;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     if (this.data === null) {
//       this.data = value;
//     } else if (value < this.data) {
//       if (!this.left) this.left = new Tree(value);
//       else this.left.insert(value);
//     } else {
//       if (!this.right) this.right = new Tree(value);
//       else this.right.insert(value);
//     }
//   }

//   getData() {
//     return this.data;
//   }
//   getLeft(){
//     return this.left;
//   }
//   getRight(){
//     return this.right;
//   }
// }

const test = new Tree(); 
test.insert(3);
test.insert(4);
test.insert(5);

console.log(  test.getLeft().getData() );
console.log(  test.getData() );
console.log(  test.getRight().getData() );

let num