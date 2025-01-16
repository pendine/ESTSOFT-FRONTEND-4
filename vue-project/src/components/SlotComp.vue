<template>
  <!-- <div>
    <p>슬롯이 뭐임? </p> -->
    <!-- 컴포넌트의 이름을 정의하지 않고 사용할때 -->
    <!-- <slot></slot>
  </div> -->

  <!-- <div class="container">
    <header> -->
      <!-- 슬롯에는 무조건 slot이라는
           이름으로만 만들어두지는 않음 
           이름을 정할수있음-->
      <!-- <slot name="header">
        <h1>헤더인데 정의된게 있을때만 적용</h1>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div> -->
  <div>
    <slot></slot>
  </div>
  

</template>

<script>
  export default{
    name: 'SlotComp'
  }
</script>

<style scoped>
 div {
        background-color: lightgreen;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        flex-basis: 150px;
        border-radius: 10px;
        border: solid black 2px;
        margin: 10px;
        padding: 20px 10px 0 10px;
    }
    div:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
</style>

