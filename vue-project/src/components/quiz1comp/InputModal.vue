<template>
  <!-- .self = 이벤트가 정확하게 이 요소를 가리켰을때만 실행 
   event객체의 target과 비슷한 효과 -->
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <input v-model="inputValue" @keyup.enter="confirm" />
      <div class="modal-buttons">
        <button @click="confirm">확인</button>
        <button @click="$emit('close')">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:first-child {
  background-color: #42b983;
  color: white;
}

button:last-child {
  background-color: #666;
  color: white;
}
</style>
