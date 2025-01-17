<template>

  <div>
    <h2> Tel component </h2>
    <Teleport to="body">
      <div
        id="redDiv"
        @click="toggleVal = !toggleVal"
        :style='{background-color : bgColor }'
      >
      ㅎㅇ
      </div>
    </Teleport>
  </div>

</template>

<script>
export default{
  data(){
    return{
      toggleValue:true
    }
  }
  , computed:{
    bgColor(){
      if(this.toggleValue){
        return "lightpink"
      }else{
        return "lightgreen"
      }

    }
  }
}

</script>

<style>

#redDiv {
  margin: 10px;
  padding: 10px;
  display: inline-block;
}

#redDiv:hover {
  cursor: pointer;
}

</style>