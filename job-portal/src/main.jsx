import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App.jsx';

const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#14b8a6' },
    background: { default: '#f5f7fb' },
  },
  shape: { borderRadius: 12 },
  typography: { fontFamily: 'Inter, Arial, sans-serif' },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
