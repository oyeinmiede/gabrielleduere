import { useEffect } from 'react'

const Toast = ({
    message,
    duration = 2500,
    onClose
}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <div className="toast">
            {message}

            <button
                className="toast-btn"
                onClick={() => {
                    onClose()
                }}
            >
                okay!
            </button>
        </div>
    )
}

export default Toast