<template>
  <h1>Food</h1>
  
  <div class="wrapper">
        <props-exam
         v-for="i in foods"
         :key="i.name"
         :food-name="i.name"
         :food-desc="i.desc"
         :is-favorite="i.favorite"
         @toggle-favorite="receiveEmit"/>
    </div>

  <!-- 
  아래와 같은 방식으로 
  서비스를 제공하는것은
  유지보수 불가
  <div class="wrapper">
  <props-exam 
  food-name="Apples"
  food-desc="사과는 사과 나무에서 자라요"
  v-bind:isFavorite="true"
  />
  <props-exam 
  food-name="Chicken"
  food-desc="치킨은 치킨나무에서 자라요"
  v-bind:isFavorite="true"
  />
  <props-exam 
  food-name="pizza"
  v-bind:isFavorite="false"
  />
  <props-exam 
  food-name="pasta"
  food-desc="파스타는 파스타나무에서 자라요"
  v-bind:isFavorite="false"
  />
  </div> -->
</template>

<script>
export default{
  data(){
    return{
      foods :[
        {name :'사과' , desc : '사과는 빨개' , favorite: true}
        , {name :'피자' , desc : '피자도 속은 빨개' , favorite: false}
      ]
    };
  }
  , methods:{
      // receiveEmit(){ // 자식으로부터 이벤트 수신 성공
      //   alert("헉");
      // }

      // emit을 활용할 경우
      // 자식컴포넌트에는 같은 메서드를
      // 만들 이유가 없기 때문에
      // 재사용성 상승의 효과를 누릴 수 있다.
      receiveEmit(foodname){
        console.log('이름 내놔 : ' + foodname);
        alert('선택한 항목 : ' + foodname );
      }
  }

}
</script>

<style>
  .wrapper{
      display: flex;
      flex-wrap:wrap;
  }

  .wrapper > div{
      border:dashed black 1px;
      flex-basis: 150px;
      margin: 10px;
      padding: 10px;
      background-color: lightgreen;
  }
</style>