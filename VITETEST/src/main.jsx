import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './HooksReview.jsx'
// import App from './ContextExam.jsx'
// import App from './memoCallback/MemoCallbackExam.jsx'
// import App from './memoCallback/Private1.jsx'
// import App from './memoCallback/Private2.jsx'
// import App from './quiz/0220/App.jsx'
// import App from './customHook/LoginForm.jsx'
// import App from './ReactQuery/UserList.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { reactQueryDevTools } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import App from './StyleComponent/VarCss'
// import App from './project1/App'
// import App from './Redux/ReduxExam'
// import App from './Redux2/App'
// import { Provider } from 'react-redux'
// import App from './middleware/project/BookList'
// import store from './middleware/project/store'

// import App from './Recoil2/App'
// import App from './Recoil3/App'
// import App from './atomFamilly/App'
import { StrictMode } from 'react'
// import App from './zustandExam/ZutandExam'
// import App from './zustandExam/Exam2'
// import App from './zustandExam2/ProductList'
// import App from './zustandMiddleware/Exam1'
// import App from './zustandMiddleware/Exam2'
// import App from './zustandMiddleware/Exam3'
import App from './project2/App'
// import App from './project2/App2'
// import App from './quiz/0228/quiz1'

// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    {/* // <ReactQueryDevtools initialIsOpen={true} /> */}
    {/* // <App /> */}
    {/* </QueryClientProvider> */}
    <App />
    {/* <Provider store={store}> */}
    {/* <App /> */}
    {/* </Provider> */}
  </StrictMode>
  // <RecoilRoot>
  //   <App />
  // </RecoilRoot>
)
