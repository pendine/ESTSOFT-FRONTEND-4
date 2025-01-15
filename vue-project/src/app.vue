<!-- 컴포넌트를 큰단위로 처리 -->

<template>
  <div class="app-container">
    <h1>Todo List</h1>
    <TodoList />
  </div>  
</template>

<script>
import TodoList from "./components/todolist.vue";

export default {
  name: 'App',
  component: {
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