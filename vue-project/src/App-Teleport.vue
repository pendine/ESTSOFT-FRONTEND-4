<template>

  <h1>텔레포트 실정 예시</h1>
  <tel></tel>

  <!-- 여기는 텔레포트 구역이 아닙니다. (div id=app에 들어가는 구역)
  <TeleportExample /> -->

</template>

<script>
// @ = vite가 설정한 명칭. 프로젝트 루트 디렉토리를 의미
// import TeleportExample from "@/components/teleport/TeleportExample";
// export default {
//   components: {
//     TeleportExample
//   }
// };

</script>

<style scoped>

#app {
  width: 350px;
  margin: 10px;
}

#app > div {
  border: solid black 2px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(186, 228, 255);
}

h2 {
  text-decoration: underline;
}
</style>