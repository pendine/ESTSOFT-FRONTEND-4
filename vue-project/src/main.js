import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
// import PropsExam from './components/PropsExam.vue'
// 아이템 리스트.vue 파일을 굳이 main.js에서 임포트 하지 않아도 됨.
// ItemList를 사용하는 App.vue파일에서 호출해도 됨.
// import ItemList from './components/ItemList.vue'

// import CompOne from './components/CompOne.vue'
// import CompTwo from './components/CompTwo.vue'

// import SlotComp from './components/SlotComp.vue'
// import Teleport from './App-Teleport.vue';
// import Tel from './teleport/Tel.vue';
// import App from './AppQuiz.vue';
import App from './App-http.vue'


// createApp(App).mount('#app')

const app = createApp(App);
// const app = createApp(Teleport);


//app.component('item-list', ItemList);
// app.component('props-exam', PropsExam); // 불러온 컴포넌트를 
                                        // 어떤 태그에 할당할건지 정의

// app.component('comp-one', CompOne);
// app.component('comp-two', CompTwo);

// app.component('slot-comp' , SlotComp);

// app.component('tel', Tel);



app.mount('#app');