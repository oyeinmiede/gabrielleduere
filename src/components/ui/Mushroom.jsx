import { useContext, useRef } from 'react'
import { SoundContext } from '../../context/SoundContext'
import { WindowContext } from '../../context/WindowContext'

const Mushroom = () => {
    const { openWindow } = useContext(WindowContext)
    const { play } = useContext(SoundContext)
    const lastPlayed = useRef(0)

    const handleHover = () => {
        const now = Date.now()
        if (now - lastPlayed.current < 500) return

        lastPlayed.current = now
        play('chime')
    }

    return (
        <div
            className="mushroom"
            onMouseEnter={handleHover}
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