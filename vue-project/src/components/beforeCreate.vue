<template>
  <h2>Component</h2>
  <p>This is the component</p>
  <p id="pResult">{{ text }}</p>
</template>

<script>
export default {
  data() {
    return {
      text: '...'
    }
  },
  // beforeCreate는 DOM 요소들을 모드 불러오기전 로딩되서
  // text 프로퍼티에 값을 세팅하기가 불가능해진다
  //  - 돔 구조가 생성되기전 실행되기 때문에
  beforeCreate() {
    this.text = 'initial text'; // 이 텍스트의 내용은 적용 안됨.
    console.log("beforeCreate: The component is not created yet.");
  }
  ,created() {
    // 여기에 async await 를 사용한다면 
    // 로딩하자마자 데이터를 적제하는것도 가능함
    this.text = 'initial text'; // 이 텍스트의 내용은 적용됨
    console.log("beforeCreate: The component is not created yet.");
  }
}
</script>