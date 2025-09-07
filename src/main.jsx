import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './component/animation/stair.jsx'
import NavContext from './context/navbarcontext.jsx'
import LenisProvider from './component/animation/lenis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
    <BrowserRouter> 
     <Stair>
        <NavContext>
          <App/>
        </NavContext>
       </Stair>
    </BrowserRouter>
    </LenisProvider>
  </StrictMode>,
)
