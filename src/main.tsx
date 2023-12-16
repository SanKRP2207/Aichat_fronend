import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../src/components/context/AuthContext.tsx'


const theme = createTheme({
  typography: {
    fontFamily: "Roboto slab, sarif",
    allVariants: { color: "white" },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>

  </React.StrictMode>
)
