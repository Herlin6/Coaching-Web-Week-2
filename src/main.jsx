import React from 'react'
import ReactDOM from 'react-dom/client'
import {Counter,Identity,InputName,BgColor} from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>
    <Identity name="Herlin Dwi Vitaloka" npm="2327240034" github="https://github.com/Herlin6"/>
    <InputName/>
    <BgColor/>
  </React.StrictMode>,
)