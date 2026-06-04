import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'

import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)