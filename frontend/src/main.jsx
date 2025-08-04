import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './contexts/AppContextProvider.jsx';
import { Toaster } from 'sonner';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Toaster />
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
