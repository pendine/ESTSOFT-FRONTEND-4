import React from 'react';
import ReactDOM from 'react-dom/client';

import Hooks1 from './hooks/useStateExam.js'
import Hooks2 from './hooks/useEffectExam.js'
import Hooks3 from './hooks/useContextExam.js'
import Hooks4 from './hooks/useRefExam.js'
import Hooks5 from './hooks/useReducer.js'
import Hooks6 from './hooks/useReducer2.js'
import Hooks7 from './hooks/useMemo.js'
import Hooks8 from './hooks/customHook.js'

import Quiz4 from './quizHook/quiz4.js'
import Quiz5 from './quizHook/quiz5.js'
import Quiz6 from './quizHook/quiz6.js'
import Quiz7 from './quizHook/quiz7.js'


import RoutingApp from './RoutingApp.js';

import RoutingQuiz1 from './quizRouter/App.js';
import RoutingQuiz2 from './quizRouter2/ProductList.js';
import RoutingQuiz3 from './quizRouter3/App.js';
import RoutingQuiz4 from './quizRouter4/App.js';

import {Provider} from 'react-redux'
// import {store} from './redux/Store.js'

import Redux1 from './redux/Counter.js';
import Redux2 from './reduxThunk/App.js';

import ReduxQuiz2 from './reduxQuiz2/App.js';

import {store} from './dataChange/store.js';
import ReduxQuiz3 from './dataChange/App.js';

// 훅전용 인덱스 파일
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Hooks1 />
  // <Hooks2 />
  // <Hooks3 />
  // <Hooks4 />
  // <Quiz4 />
  // <Hooks5 />
  // <Quiz5 />
  // <Hooks6 />
  // <Hooks7 />
  // <Quiz6 />
  // <Hooks8 />
  // <Quiz7 />

  // <RoutingApp />  
  // <RoutingQuiz1 />
  // <RoutingQuiz2 />
  // <RoutingQuiz3 />
  // <RoutingQuiz4 />

// redux를 사용하기 위해서는 Provider 컴포넌트 필요
// provider에 store props를 필수로 전달해야함
// Redux를 사용할땐느 최상위 컴포넌트는
// 반드시 Provider 컴포넌트에 감싸져야함
// store props 또한 필수적으로 전달해줄 필요가 있음
  <React.StrictMode>
    <Provider store={store} >
      {/* <Redux1 /> */}
      {/* <Redux2 /> */}
      {/* <ReduxQuiz2 /> */}
      <ReduxQuiz3 />
    </Provider>
  </React.StrictMode>
);
