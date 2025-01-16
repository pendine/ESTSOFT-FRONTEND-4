<script>

  // export default {
  //   data(){
  //     return{
  //       message: '오 이게 vue구나.'
  //     };
  //   }
  // };
</script>

<template>
  <!-- 다른 컴포넌트들을 붙여오겠음.-->
  <h1>음식들</h1>
  <item-list/>
  <item-list/>
</template>

<style>
  #app >div{
    border: 1px solid black;
    display: inline-block;
    margin: 15px;
    padding: 15px;
    background: crimson;
  }
</style>