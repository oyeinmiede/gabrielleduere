import { useEffect, useState } from 'react'

const Toast = ({ message, duration = 2500, onClose }) => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            onClose?.()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    if (!visible) return null

    return (
        <div className="toast">
            {message}
        </div>
    )
}

export default Toast