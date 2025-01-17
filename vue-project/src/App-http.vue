<template>
  <h1>Example</h1>
  <p>Click the button to fetch data with an HTTP request.</p>
  <p>Each click generates an object with a random user from <a href="https://random-data-api.com/" target="_blank">https://random-data-api.com/</a>.</p>
  <p>The robot avatars are lovingly delivered by <a href="http://robohash.org/" target="_blank">RoboHash</a>.</p>
  <button @click="fetchData">Fetch data</button>
  <div v-if="data" id="dataDiv">
    <img :src="data.data.avatar" alt="avatar">
    <pre>{{ data.data.first_name + " " + data.data.last_name }}</pre>
    <p>"{{ data.data.employment.title }}"</p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {
        this.data = await axios.get("https://random-data-api.com/api/v2/users");
      }
    }
  };
</script>

<style>
#dataDiv {
  width: 240px;
  background-color: aquamarine;
  border: solid black 1px;
  margin-top: 10px;
  padding: 10px;
}
#dataDiv > img {
  width: 100%;
}
pre {
  font-size: larger;
  font-weight: bold;
}
</style>