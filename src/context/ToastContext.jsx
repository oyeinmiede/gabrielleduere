import { createContext, useState } from 'react'
import Toast from '../components/ui/Toast'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = (content, duration = 2500) => {
        const id = Date.now()

        setToasts(prev => [
            ...prev,
            {
                id,
                content,
                duration
            }
        ])
    }

    const removeToast = (id) => {
        setToasts(prev =>
            prev.filter(t => t.id !== id)
        )
    }

    return (
        <ToastContext.Provider
            value={{ addToast }}
        >
            {children}

            <div className="toast-container">
                {toasts.map(t => (
                    <Toast
                        key={t.id}
                        message={t.content}
                        duration={t.duration}
                        onClose={() => removeToast(t.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    )
}