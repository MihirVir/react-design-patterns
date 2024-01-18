import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UncontrolledApp } from './UncontrolledApp.jsx'
import { ControlledModalApp } from './ControlledModalApp.jsx'
import { UncontrolledFlowApp } from './UntrolledFlowApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <UncontrolledFlowApp />
  </React.StrictMode>,
)
