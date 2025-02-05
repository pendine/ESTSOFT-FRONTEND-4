// JSON 기반 트리 데이터
const treeData = {
  value: "Root",
  children: [
      {
          value: "Child 1",
          children: [
              { value: "Grandchild 1", children: [] },
              { value: "Grandchild 2", children: [] },
          ],
      },
      {
          value: "Child 2",
          children: [
              { value: "Grandchild 3", children: [] },
          ],
      },
  ],
};

// 깊이 우선 탐색 (DFS)
function traverseDFS(node) {
  console.log(node.value); // 현재 노드 출력
  for (let child of node.children) {
      traverseDFS(child); // 재귀적으로 자식 탐색
  }
}

// 너비 우선 탐색 (BFS)
function traverseBFS(tree) {
  const queue = [tree]; // 큐 초기화 (루트부터 시작)
  while (queue.length > 0) {
      const currentNode = queue.shift(); // 큐에서 첫 번째 요소 제거
      console.log(currentNode.value); // 현재 노드 출력
      queue.push(...currentNode.children); // 자식들을 큐에 추가
  }
}

// 탐색 실행
console.log("DFS:");
traverseDFS(treeData); // 출력: Root -> Child 1 -> Grandchild 1 -> Grandchild 2 -> Child 2 -> Grandchild 3

console.log("\nBFS:");
traverseBFS(treeData); // 출력: Root -> Child 1 -> Child 2 -> Grandchild 1 -> Grandchild 2 -> Grandchild 3

