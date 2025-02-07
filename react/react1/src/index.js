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
  <RoutingQuiz2 />
);
