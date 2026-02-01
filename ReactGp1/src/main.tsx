import './index.css'

import AppRoutes from './Rotas/Routes.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
  <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
      crossOrigin="anonymous"/>
  <React.StrictMode>
    <AppRoutes></AppRoutes>
  </React.StrictMode>,
  </>
)
