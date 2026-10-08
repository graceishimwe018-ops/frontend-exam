import React from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App.jsx'
import './styles.css'

const theme = createTheme({ palette: { mode: 'light', primary: { main: '#356859' }, secondary: { main: '#d48b62' }, background: { default: '#f7f8fa', paper: '#fff' }, success: { main: '#438b6e' }, warning: { main: '#d58a35' }, error: { main: '#d55c58' } }, typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', h4: { fontWeight: 700, letterSpacing: '-.04em' }, h5: { fontWeight: 700, letterSpacing: '-.03em' }, h6: { fontWeight: 650, letterSpacing: '-.02em' }, button: { textTransform: 'none', fontWeight: 600 } }, shape: { borderRadius: 12 }, components: { MuiCard: { styleOverrides: { root: { border: '1px solid #eaedf0', boxShadow: '0 2px 10px rgba(28,39,35,.035)' } } }, MuiButton: { defaultProps: { disableElevation: true } } } })
createRoot(document.getElementById('root')).render(<React.StrictMode><ThemeProvider theme={theme}><CssBaseline/><App/></ThemeProvider></React.StrictMode>)
