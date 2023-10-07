import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // no variable named root is created like react 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
