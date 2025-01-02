// 중위순회 구현
function inOrderTraversal(tree, result = []) {
  if (tree !== null) {
      inOrderTraversal(tree.left, result); // 왼쪽 서브트리 탐색
      result.push(tree.value);            // 현재 노드 값 추가
      inOrderTraversal(tree.right, result); // 오른쪽 서브트리 탐색
  }
  return result;
}


// 이진탐색트리 삽입함수
function insertNode(tree, value){
  // 이진 탐색트리 만들기

  // 트리가 비어있는지 확인
  if(tree === undefined || tree === null){
    return {
      value , left:null, right:null
    };
  }

  if(value < tree.value){
    tree.left = insertNode(tree.left, value);
  }else{
    tree.right = insertNode(tree.right, value);
  }

  return tree;
}

function solution(array,commands){
  var answer = [];

  // 2차원 배열을 순환
  for( let[i,j,k] of commands ){
    console.log( i , j , k);

    const subArr = array.slice(i-1, j);
    console.log(subArr);

    let tree = null;

    for(let num of subArr){
      tree = insertNode(tree , num);
    }

    // 중위 순회로 정렬된 배열 얻기
    const sort = inOrderTraversal(tree);
    
    answer.push(sort[k-1]);
  }

  return answer;
}	


const array = [1, 5, 2, 6, 3, 7, 4]	
const command = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
// return = [5, 6, 3];

console.log(solution( array , command));