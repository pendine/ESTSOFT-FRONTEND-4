<!-- <template>
  <h1>Basic Css</h1>
  <button @click="this.doesRotate=true">회전 회오리</button>
  <div :class="{rotate: doesRotate}"></div>
</template>

<script>
export default{
  data(){
    return{
      doesRotate:false
    }
  }
}
</script>


<style scoped>
  .rotate {
    rotate: 160deg;
    transition: rotate 1s;
  }
  div {
    border: solid black 2px;
    background-color: lightcoral;
    width: 60px;
    height: 60px;
  }
  h1, button, div {
    margin: 10px;
  }
</style> -->

<template>
  <h1>Add/Remove &lt;p&gt; Tag</h1>
  <button @click="this.exists = !this.exists">{{btnText}}</button><br>
  
  <button @click="this.exists2 = !this.exists2">{{btnText2}}</button><br>
  <Transition>
    <p v-if="exists" id="p1">Hello World!</p>
  </Transition>

  <Transition name="test">
    <p v-if="exists2" id="p2">Hello World2</p>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      exists: false,
      exists2: false
    }
  },
  computed: {
    btnText() {
      if(this.exists) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    },
    
    btnText2() {
      if(this.exists2) {
        return 'Remove';
      }
      else {
        return 'Add';
      }
    }
  }
}
</script>

<style>
/*애니메이션 속성 활용하기*/
.v-enter-active{
  background-color: lightgreen;
  animation : added 1s;
}

.v-leave-active{
  background-color:brown;
  animation : added 1s reverse;
}

@keyframes added{
  from{
    opacity: 0;
    translate : -100px 0;
  }
  to {
    opacity: 1;
    translate : 0 0;
  }
}


.test-enter-active{
  background-color: lightgreen;
  animation : added2 1s;
}

.test-leave-active{
  background-color:brown;
  animation : added2 1s reverse ease;
}

@keyframes added2{
  from{
    opacity: 0;
    rotate : 0;
    scale : 0.1;
  }
  to {
    opacity: 1;
    rotate : 360000deg;
    scale : 1;
  }
}
/* add 버튼을 누를때 실행됌 */
/* .v-enter-from{
  opacity: 0;
  translate : -100px 0;
}
.v-enter-to{
  opacity: 1;
  translate : 0 0;
} */
/* remove 버튼을 누를때 실행됌 */
/* .v-leave-from{
  opacity: 1;
  translate : 0 0;
}
.v-leave-to{
  opacity: 0;
  translate : 100px 0;
} */
  p {
    background-color: lightgreen;
    display: inline-block;
    padding: 10px;
    transition: all 0.6s ease;
  }

  #p1, #p2 {
    display: inline-block;
    padding: 10px;
    border: dashed black 1px;
  }
  #p2 {
    background-color: lightcoral;
  }
</style>