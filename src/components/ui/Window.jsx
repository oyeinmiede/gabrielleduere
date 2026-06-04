import { useRef, useState } from 'react'

const Window = ({ title, children, onClose }) => {
    const windowRef = useRef(null)

    const [pos, setPos] = useState({
        x: 100,
        y: 100
    })

    const [dragging, setDragging] = useState(false)

    const offset = useRef({ x: 0, y: 0 })

    const onMouseDown = (e) => {
        setDragging(true)

        offset.current = {
            x: e.clientX - pos.x,
            y: e.clientY - pos.y
        }
    }

    const onMouseMove = (e) => {
        if (!dragging) return

        setPos({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y
        })
    }

    const onMouseUp = () => {
        setDragging(false)
    }

    return (
        <div
            ref={windowRef}
            className="window"
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`
            }}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
        >
            <div
                className="window-header"
                onMouseDown={onMouseDown}
            >
                <h3>{title}</h3>

                <button onClick={onClose}>
                    [x]
                </button>
            </div>

            <div className="window-body">
                {children}
            </div>
        </div>
    )
}

export default Window