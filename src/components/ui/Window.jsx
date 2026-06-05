import { useRef, useState, useContext, useEffect } from 'react'
import { SoundContext } from '../../context/SoundContext'
import '../../styles/window.css'

const Window = ({
    title,
    children,
    onClose,
    window,
    updatePosition,
    bringToFront
}) => {
    const [dragging, setDragging] = useState(false)
    const { play } = useContext(SoundContext)
    const offset = useRef({ x: 0, y: 0 })

    const onMouseDown = (e) => {
        setDragging(true)

        bringToFront(window.type)

        offset.current = {
            x: e.clientX - window.x,
            y: e.clientY - window.y
        }
    }

    const onMouseMove = (e) => {
        if (!dragging) return

        const x = e.clientX - offset.current.x
        const y = e.clientY - offset.current.y

        updatePosition(window.type, x, y)
    }

    const onMouseUp = () => {
        setDragging(false)
    }

    useEffect(() => {
        play('open')
    }, [])

    return (
        <div
            className="window"
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <div
                className="window-header"
                onMouseDown={onMouseDown}
            >
                <h3>{title}</h3>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        play('close')
                        onClose()
                    }}
                >
                    [ x ]
                </button>
            </div>

            <div className="window-body">
                {children}
            </div>
        </div>
    )
}

export default Window