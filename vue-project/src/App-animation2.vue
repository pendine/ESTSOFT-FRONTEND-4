<template>
  <h1>애니메이션 응용하기</h1>
  <button @click="newImg">nextImg</button>
  <Transition>
    <!-- <Transition> expects exactly one child element or component.
      Transition 태그를 적용하면 사용해야함. -->
    <img src="./assets/img_pizza.svg" v-if="imgActive === 'pizza'">
    <img src="./assets/img_apple.svg" v-else-if="imgActive === 'apple'">
    <img src="./assets/img_cake.svg"  v-else-if="imgActive === 'cake'">
    <img src="./assets/img_fish.svg"  v-else-if="imgActive === 'fish'">
    <img src="./assets/img_rice.svg"  v-else-if="imgActive === 'rice'">
  </Transition>
</template>

<script>
export default{
  data(){
    return {
      imgActive: 'pizza',
      imgs:['pizza', 'apple' ,'cake','fish','rice' ],
      indexNbr : 0,
    }
  },
  methods:{
    newImg(){
      this.indexNbr++;
      if(this.indexNbr >= this.imgs.length){
        this.indexNbr = 0;
      }
      this.imgActive = this.imgs[this.indexNbr];
    }
  }
}
</script>

<style>
  .v-enter-active {
    animation: swirlAdded 1s;
  }
  .v-leave-active {
    animation: swirlAdded 1s reverse;
  }
  @keyframes swirlAdded {
    from {
      opacity: 0;
      rotate: 0;
      scale: 0.1;
    }
    to {
      opacity: 1;
      rotate: 360deg;
      scale: 1;
    }
  }
  img {
    width: 100px;
    margin: 20px;
  }
  img:hover {
    cursor: pointer;
  }
</style>