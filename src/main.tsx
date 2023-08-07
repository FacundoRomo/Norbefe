import ReactDOM from 'react-dom/client'
import './index.css'
import { PricesProvider } from './context/Context.tsx'
import { Router } from './router.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PricesProvider>
    <Router />
  </PricesProvider>
  
)
