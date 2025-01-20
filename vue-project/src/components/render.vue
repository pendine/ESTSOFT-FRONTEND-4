<!-- <template>

  <button @:click="updateClick"> click </button>
  <p> {{ times }}</p>

</template>

<script>
export default{  
  props:{
    times :{
      type:Number,
      default:0,
    }
  },
  return(){
    times:0;
  },
  methods:{
    updateClick(){
      this.times += 1;
    }
  },
  computed:{
    reutrn 
  }
}
</script>
<style></style> -->

<template>
  <h2>Component One</h2>
  <p>This is a component.</p>
  <button @click="counter++">Add One</button>
  <p>{{ counter }}</p>
</template>
  
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  renderTracked(evt) {
    console.log("renderTracked: ",evt);
    alert("renderTracked");
  },
  renderTriggered(evt) {
    console.log("renderTriggered: ",evt)
    alert("renderTriggered");
  }
}
</script>