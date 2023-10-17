import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AllContext from './context/AllContext'
import router from './routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AllContext>
    <RouterProvider router={router}></RouterProvider>
   </AllContext>
  </React.StrictMode>,
)
