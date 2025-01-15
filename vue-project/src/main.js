import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue'
// 아이템 리스트.vue 파일을 굳이 main.js에서 임포트 하지 않아도 됨.
// ItemList를 사용하는 App.vue파일에서 호출해도 됨.
// import ItemList from './components/ItemList.vue'

// createApp(App).mount('#app')

const app = createApp(App);
// app.component('item-list', ItemList);

app.mount('#app');