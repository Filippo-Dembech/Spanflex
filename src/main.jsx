import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PageTurnerProvider } from './context/PageContext'
import App from './App.jsx'
import { UserParametersProvider } from './context/UserParametersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageTurnerProvider>
      <UserParametersProvider>
        <App />
      </UserParametersProvider>
    </PageTurnerProvider>
  </StrictMode>,
)
