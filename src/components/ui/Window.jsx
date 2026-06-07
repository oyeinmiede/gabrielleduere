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

    const onPointerDown = (e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        if (e.target.closest('button')) return
        setDragging(true)

        bringToFront(window.type)

        offset.current = {
            x: e.clientX - window.x,
            y: e.clientY - window.y
        }

        document.addEventListener('pointermove', onPointerMove)
        document.addEventListener('pointerup', onPointerUp)
    }

    const onPointerMove = (e) => {
        const x = e.clientX - offset.current.x
        const y = e.clientY - offset.current.y

        updatePosition(window.type, x, y)
    }

    const onPointerUp = () => {
        setDragging(false)

        document.removeEventListener('pointermove', onPointerMove)
        document.removeEventListener('pointerup', onPointerUp)
    }

    useEffect(() => {
        play('open')
    }, [])

    return (
        <div className="window">
            <div
                className="window-header"
                onPointerDown={onPointerDown}
            >
                <h3>{title}</h3>

                <button
                    onPointerDown={(e) => {
                        e.stopPropagation()
                    }}
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