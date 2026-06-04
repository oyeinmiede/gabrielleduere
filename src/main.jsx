import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'

import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import { WindowProvider } from './context/WindowContext'
import { SoundProvider } from './context/SoundContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <ToastProvider>
            <WindowProvider>
                <SoundProvider>
                    <App />
                </SoundProvider>
            </WindowProvider>
        </ToastProvider>
    </ThemeProvider>
)