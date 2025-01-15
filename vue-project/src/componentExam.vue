<script>
  // export default{
  //   data(){
  //     return{
  //       message:'이게 vue'
  //     }
  //   }
  // }
  
</script>

<template>
  <!-- 다른 컴포넌트들을 붙여보기 -->
  <h1> Food </h1>
  <!-- <item-list></item-list>  -->
  <!-- or -->
  <item-list />
  <item-list />
  <!-- 컴포넌트 호출시 하이픈 사용 -->
  <!-- 두번 부르면 두번 나옴 재사용성 -->

  <test-component />
  <!-- 컴포넌트가 없어도 vue파일을 html 파일로 출력할대 오류는 없음 -->
</template>

<style>

</style>