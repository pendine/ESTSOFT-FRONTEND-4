<template>
  <div>
      <h2>{{ foodName }}</h2>
      <img src="../assets/img_quality.svg" v-show="foodIsFavorite">
      <p>{{ foodDesc }}</p>
      <button v-on:click="toggleFavorite">Favorite</button>
  </div>
</template>

<script>
export default{

  //props를 쓰는 다른 패턴
  //아래와 같이 사용하는 경우는 사실 좀 복잡하긴함.
  props: [
      'foodName', 'foodDesc', 'isFavorite'
  ],
  data(){
      return{
          foodIsFavorite: this.isFavorite
      }
  },
  methods:{
      toggleFavorite(){
          // this.foodIsFavorite = !this.foodIsFavorite;
        //   this.$emit('toggle-favorite');
          // 부모에게 이벤트 전달 
          // (이벤트 처리를 위임했다고 봐도 됨)
          // 이건 인자가 없어서 안넘어감
            console.log(this.foodName);
          this.$emit('toggle-favorite', this.foodName); //emit을 활용하여 인자값을 넘기는 방법

      }
  }

  // props는 단순하게 문자열로만 쓰는것은 아님.
  //  -> 객체 타입등 다양한 방법으로 데이터를 받아온후 처리

  // props: {
  //     foodName:{
  //         type:String,
  //         required:true //필수값 정의시 사용
  //     },
  //     foodDesc: {
  //         type:String,
  //         required: false,
  //         default: '아무것도 안적혀서 기본값 적어둠',
  //         //props 검증 기능
  //         // 아래의 기능은 10자 이상 100자 이하의 데이터만 입력할수 있도록 처리.
  //         validator: function(value){
  //             if(value.length>10 && value.length <100){
  //                 return true;
  //             }else{
  //                 return false;
  //             }
  //         }
  //     },
  //     isFavorite:{
  //         type:Boolean,
  //         require:false,
  //         default: false
  //     }
  // }



};
</script>

<style>
  img{
      height: 1.5em;
      float:right;
  }
</style>