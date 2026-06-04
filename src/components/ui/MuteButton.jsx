import { useContext } from 'react'
import { SoundContext } from '../../context/SoundContext'

const MuteButton = () => {
    const { muted, toggleMute } = useContext(SoundContext)
    const { play } = useContext(SoundContext)

    return (
        <button className='mute-btn' onClick={() =>{
            toggleMute()
            play('click')
        }}>
            {muted ? <img src="/public/icons/sound-off.png" alt="" /> : <img src="/public/icons/sound-on.png" alt="" />}
        </button>
    )
}

export default MuteButton