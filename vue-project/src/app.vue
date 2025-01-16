<template>
  <h1>동적 컴포넌트 예시</h1>
  <button @click="toggleValue=!toggleValue">컴포넌트 스위치</button>
  <component :is="activeComp"></component>
</template>

<script>
// 동적 컴포넌트 예시
export default{
  data(){
    return{
      toggleValue:true
    }
  }
  ,computed:{
    activeComp(){
      if(this.toggleValue){
        return 'comp-one';
      }else{
        return 'comp-two';
      }
    }
  }

}
</script>

<style>
div{
    width : 300px;
    margin: 15px;
    padding :15px;
    border : 3px solid black;
  }
</style>