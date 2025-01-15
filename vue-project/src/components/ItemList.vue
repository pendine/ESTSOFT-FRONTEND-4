<!-- 머리 몸통 다리로 구분하듯
 
template script style 로 둘것
-->

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default{
  data(){
    return{
      name: 'apple'
      , message:'i like apple'
    }
  }
};
</script>

<style>
 #app > div{
  border : 1px solid black;
  display: inline-block;
  margin: 15px;
  padding: 15px;
  background-color: hotpink;
 }
</style>