import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserStorage } from './context/userContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserStorage>
      <App />
    </UserStorage>
  </StrictMode>,
)
