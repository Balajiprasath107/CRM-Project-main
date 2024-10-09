import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextfunc, { Dashboardcontext } from './components/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contextfunc>
      <App />
    </Contextfunc>
  </StrictMode>
)