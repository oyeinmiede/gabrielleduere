import { useContext } from 'react'
import { WindowContext } from '../../context/WindowContext'

const Mushroom = () => {
    const { openWindow } = useContext(WindowContext)

    return (
        <div
            className="mushroom"
            onClick={() => openWindow('fun stuff')}
        >
            <img
                src="/images/mushroom.png"
                alt="mushroom"
                draggable={false}
            />
        </div>
    )
}

export default Mushroom