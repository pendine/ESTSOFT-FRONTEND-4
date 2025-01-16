<!-- 컴포넌트 만들때는 3개 필요한거뭐였음?
template script style 
-->
<template>
    <div class="app-container">
        <h1>할 일을 관리하는 목록</h1>
        <TodoList />
    </div>
</template>
<script>
import TodoList from "./components/TodoList.vue";

// 사용할 컴포넌트를 등록하는 방법.
export default {
    name: 'App',
    components: {
        TodoList
    }
}

</script>
<style>
.app-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  background-color: #fff;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}
</style>