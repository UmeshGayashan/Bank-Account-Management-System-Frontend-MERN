import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider, enqueueSnackbar } from 'notistack'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
    <Router>
      <App/>
    </Router>
    </SnackbarProvider>
  </React.StrictMode>,
)
