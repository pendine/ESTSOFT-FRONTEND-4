import { StrictMode } from 'react'
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
import App from './Redux/ReduxExam'

// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
      </QueryClientProvider> */}
    <App />
  </StrictMode>
)
