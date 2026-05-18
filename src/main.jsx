import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    {/* <BrowserRouter> es un componente en React 
    Router que envuelve mi  aplicación para habilitar la navegación 
    enrutada */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
)
