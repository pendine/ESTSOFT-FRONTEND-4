import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import HooksReview from './HooksReview.jsx'
// import App from './ContextExam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HooksReview />
  </StrictMode>
)
