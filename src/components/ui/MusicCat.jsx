import { useContext } from 'react'
import { SoundContext } from '../../context/SoundContext'
import '../../styles/music-cat.css'

const MusicCat = () => {
    const { musicOn, toggleMusic } = useContext(SoundContext)

    return (
        <div
            className={`music-cat ${musicOn ? 'on' : 'off'}`}
            onClick={toggleMusic}
        >
            <img
                src={musicOn ? "/images/music-cat-on.png" : "/images/music-cat.png"}
                alt="music cat"
                draggable={false}
            />
        </div>
    )
}

export default MusicCat