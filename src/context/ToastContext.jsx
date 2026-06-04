import { createContext, useState } from 'react'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([])

    const addToast = (content, duration = 2500) => {
        const id = Date.now()

        setToasts(prev => [
            ...prev,
            { id, content, duration }
        ])

        setTimeout(() => {
            removeToast(id)
        }, duration)
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
                    <div key={t.id} className="toast">
                        {t.content}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}