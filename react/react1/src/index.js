import React from 'react';
import ReactDOM from 'react-dom/client';
// 훅전용 인덱스 파일
import Hooks1 from './hooks/useStateExam.js'
import Hooks2 from './hooks/useEffectExam.js'
import Hooks3 from './hooks/useContextExam.js'
import Hooks4 from './hooks/useRefExam.js'
import Hooks5 from './hooks/useReducer.js'
import Hooks6 from './hooks/useReducer2.js'

import Quiz4 from './quiz/quiz4.js'
import Quiz5 from './quiz/quiz5.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Hooks1 />
  // <Hooks2 />
  // <Hooks3 />
  // <Hooks4 />
  // <Quiz4 />
  // <Hooks5 />
  <Quiz5 />
  
);
