<template>
<h1>컴포넌트</h1>

</template>

<script>
export default{
  beforeUnmount(){
    alert('beforeUnmount Alram');
  },
  unmounted(){
    alert('unmounted Alram');
  },
}
</script>

<style></style>