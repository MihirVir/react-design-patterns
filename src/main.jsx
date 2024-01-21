import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UncontrolledApp } from './UncontrolledApp.jsx'
import { ControlledModalApp } from './ControlledModalApp.jsx'
import { UncontrolledFlowApp } from './UntrolledFlowApp.jsx'
import { ControlledFlowApp } from './ControlledFlowApp.jsx'
import { HOCApp } from './HOCApp.jsx'
import CustomHooksApp from "./CustomHooksApp.jsx";
import { RecursiveApp } from "./RecursiveApp.jsx";
import CompoundApp from "./CompoundApp.jsx";
import { ObserverApp } from "./ObserverApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ObserverApp />
  </React.StrictMode>,
) 
