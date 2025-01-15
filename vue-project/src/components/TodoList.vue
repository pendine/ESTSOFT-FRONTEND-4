<template>
  <div class="todo-container">
    <!-- 새로운 할일 입력받기 -->
    <div class="input-group">
      <input
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="할일 입력"
        class="todo-input"
      />
      <button @click="addTodo" class="add-btn">할일 추가</button>
    </div>

    <!-- 필터링 버튼 -->
    <div class="filter-group">
      <!--  -->
      <button
        v-for="filter in filters"
        :key="filter"
        @click="currentFilter = filter"
        :class="['filter-btn', { active: currentFilter === filter }]"
      >
        {{ filter }}
      </button>
    </div>

    <!-- 할일 목록 -->
    <ul class="todo-list">
      <li v-for="todo in filteredTodos" 
          :key="todo.id"
          :class="['todo-item' , {completed : todo.completed}]">
          <!-- 이 check box 는 완료여부를 체크하는데
           completed 속성과 양방향으로 바인딩을 체크 -->
         <input type="checkbox" 
                v-model="todo.completed"
                class="todo-checkbox">
        <span class="todo-text">{{ todo.text }}</span>
        <!-- // 삭제 버튼 클릭 시 해당 할 일 제거 -->
        <button 
        @click="removeTodo(todo.id)"  
        class="delete-btn"
        >❌
        </button>
      </li>
    </ul>
      <!-- 남은 할 일 개수 표시 -->
      <div class="todo-stats">
        남은 할 일: {{ remainingTodos }} 개  // 완료되지 않은 할 일 개수 표시
      </div>
  </div>
</template>

<script>
// vue 인스턴스로부터 갖고오는 프로퍼티
import { ref, computed } from "vue";

export default {
  name: "TodoList",
  setup() {
    // 상태 정의
    const todos = ref([]); // 할일의 목록 배열
    const newTodo = ref([]); // 새로운 할일 입력값
    const currentFilter = ref("전체"); // 현재 선택된 필터
    const filters = ["전체", "진행중", "완료"]; // 필터 옵션

    //할 일 추가 메서드
    // 바닐라 js 쓰 듯 처리
    const addTodo = () => {
      if (newTodo.value.trim()) {
        //입력값이 비어있는지 확인
        todos.value.push({
          id: Date.now(), // 현재 시간
          text: newTodo.value, // 입력된 할일
          completed: false, //초기 완료 상태 false
        });
        newTodo.value = ""; //입력창 초기화
      }
    };

    // 할 일 삭제 메서드
    const removeTodo = (id) => {
      // 선택된 아이디를 제외한 새 배열 생성
      todos.value = todos.value.filters((todo) => todo.id !== id);
    };

    // 필터링된 할 일 목록
    // filter 함수 : Arrays.filter()
    // 배열의 각 요소를 순회하면서 주어진 조건에 맞는 요소만을 모아서
    // 새로운 배열을 만들어내는 함수

    // splice : 빠르고 메모리 효율상 우수
    // filter : 원본유지 특히 객체 배열에서 조건별로 뽑아낼때 유리

    // 선택기준
    // 값이 단순 배열일수록 splice가 유리 : 성능 중시일경우 splice가 유리
    // 객체타입이거나 원본의 배열을 유지할경우 filter를 사용

    // refs : 배열을 반응형으로 조정
    //        (HTMLCollection 화 => 실시간으로 내용 반영)
    // scope : css 범위 조정
    //  -> css의 범위가 해당 컴포넌트를 벗어나지 못하도록 처리할때 사용하는 키워드
    //  -> react, vue 에서 자주 사용(컴포넌트 단위의 약점은 css가 겹치기 쉬움)
    const filteredTodos = computed(() => {
      switch (currentFilter.value) {
        case "진행중":
          return todos.value.filters((todo) => !todo.completed);
        case "완료":
          return todos.value.filters((todo) => todo.completed);
        default:
          return todos.value;
      }
    });

    // 남은 할일 개수 계산
    const remainInTodos = computed(() => {
      return todos.value.filters((todo) => !todo.completed).length;
    });

    return {
      todos,
      newTodo,
      currentFilter,
      filters,
      addTodo,
      removeTodo,
      filteredTodos,
      remainInTodos,
    };
  },
};
</script>

<style scoped>
.todo-container {
  padding: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.add-btn {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
}

.filter-btn.active {
  background-color: #42b983;
  color: white;
  border-color: #42b983;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-checkbox {
  margin-right: 10px;
}

.todo-text {
  flex: 1;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.todo-stats {
  margin-top: 20px;
  color: #666;
  font-size: 14px;
}
</style>
