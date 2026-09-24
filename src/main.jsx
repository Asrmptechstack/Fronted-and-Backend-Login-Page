import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Success from './success.jsx'
import Fail from './fail.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} ></Route>
      <Route path='/success' element={<Success />}></Route>
      <Route path='/fail' element={<Fail />} ></Route>
    </Routes>
  </BrowserRouter>
)
