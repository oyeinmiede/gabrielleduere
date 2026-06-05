import { useContext } from 'react'
import { SoundContext } from '../../context/SoundContext'
import { ThemeContext } from '../../context/ThemeContext'

const MuteButton = () => {

    const { muted, toggleMute, play } = useContext(SoundContext)
    const { theme } = useContext(ThemeContext)

    return (
        <button
            className="mute-btn"
            onClick={() => {
                toggleMute()
                play('click')
            }}
        >
            <img
                className={`mute-icon ${theme}`}
                src={
                    muted
                        ? "/icons/sound-off.png"
                        : "/icons/sound-on.png"
                }
                alt="mute toggle"
            />
        </button>
    )
}

export default MuteButton