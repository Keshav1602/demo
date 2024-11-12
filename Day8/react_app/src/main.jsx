import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import Marks from './Marks.jsx'
import Display from './display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"keshav agarwal"} email={"keshav@gmail.com"}  mob={"9410014740"}/>
    <Display/>
  </StrictMode>,
)
