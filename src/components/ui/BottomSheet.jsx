import { useRef, useState } from 'react'
import { FaAngleDoubleDown } from "react-icons/fa"

const BottomSheet = ({
    title,
    children,
    onClose
}) => {
    const startY = useRef(0)
    const [offset, setOffset] = useState(0)
    const [dragging, setDragging] = useState(false)

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY
        setDragging(true)
    }

    const handleTouchMove = (e) => {
        if (!dragging) return

        const currentY = e.touches[0].clientY
        const diff = currentY - startY.current

        if (diff > 0) {
            setOffset(diff * 0.6)
        }
    }

    const handleTouchEnd = () => {
        setDragging(false)

        if (offset > 120) {
            onClose()
        } else {
            setOffset(0)
        }
    }

    return (
        <div className="bottom-sheet" onClick={onClose}>

            <div
                className="sheet-content-wrapper"
                style={{
                    transform: `translateY(${offset}px)`,
                    transition: dragging ? 'none' : 'transform 0.25s ease'
                }}
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                <div className="sheet-header">
                    <div className="drag-handle" />

                    <h3>{title}</h3>

                    <button onClick={onClose}>
                        <FaAngleDoubleDown size={20} />
                    </button>
                </div>

                <div className="sheet-content">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default BottomSheet