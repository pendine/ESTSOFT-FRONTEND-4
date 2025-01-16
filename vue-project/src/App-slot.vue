<template>
  <!-- 
    <div id="app">
      <slot-comp>
        <template v-slot:header> -->

          <!-- 이건 슬롯이름이 header에 적용됨 -->

          <!-- <h1>슬록 적용시 이게 나옴</h1>
        </template> -->
        <!-- 이건 이름없는 슬롯에 적용됨 -->
        <!-- <h2>이건 어디서 어떻게 나옴</h2>
        <template v-slot:footer> -->
          <!-- 이건 슬롯이름이 footer에 적용됨 -->
          <!-- <h1>footer 정의</h1>
        </template>
      </slot-comp>
    </div>
    
    <slot-comp>
      이 영역에 작성하면 여기에 쓸수있음
    </slot-comp> 
  
    <div id="wrapper">
      <slot-comp v-for="i in foods">
        <img v-bind:src="i.url">
        <h3> {{ i.name }} </h3>
        <p> {{ i.desc }} </p>
      </slot-comp>
    </div> -->
  
  
</template>

<script>
// import SlotComp from './components/SlotComp.vue'
// 컴포넌트 지역화
// 원하는 컴포넌트에 선언함으로 지역화
// import CompOne from './components/CompOne.vue'

// 이 컴포넌트를 이용하지 않는 이상 사용 불가
// export default{
//   components:{
//     'comp-one' : CompOne
//   }
// }

// import SlotComp from './components/SlotComp.vue';

// export default{
//   name : 'App'
//   , components : {
//     SlotComp
//   }
// }

  // export default {
  // components: { SlotComp },
  //   data() {
  //     return {
  //       foods: [
  //       { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: '/src/assets/img_apple.svg'},
  //       { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: '/src/assets/img_pizza.svg'},
  //       { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: '/src/assets/img_rice.svg'},
  //       { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: '/src/assets/img_fish.svg'},
  //       { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: '/src/assets/img_cake.svg'}
  //     ]
  //     }
  //   }
  // }

</script>

<style>
/* <style scoped> */
  /* p {
    width: 200px;
  }
  #app div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
  .compOneDiv {
    background-color: lightgreen;
  }
  .compTwoDiv {
    background-color: lightcoral;
  } */

  /* #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper img {
    display: block; 
    margin: auto; 
    width: 60%;
  } */
  div{
    width : 300px;
    margin: 15px;
    padding :15px;
    border : 3px solid black;
  }
  
</style>