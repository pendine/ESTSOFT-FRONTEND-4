<template>
<h1>컴포넌트 (beforeMount)</h1>

</template>

<script>
export default{
  beforeMount(){
    alert('컴포넌트 beforeMount 메서드 실행 완료')
  }, 
  mounted(){
    // beforeMount, mounted 메서드의 차이는 육안, 체감이 어려움
    // DOM에 조작이 필요한지, 불필요한지 알아야하는것 또한 개발자의 몫
    alert('컴포넌트 mounted 메서드 실행 완료')
  }
}
</script>

<style scoped>
</style>