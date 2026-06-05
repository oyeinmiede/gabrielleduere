import { createContext, useState, useEffect, useRef } from 'react'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
    const [muted, setMuted] = useState(false)
    const [musicOn, setMusicOn] = useState(false)

    // ✅ persistent audio instance
    const musicRef = useRef(null)

    useEffect(() => {
        const savedMuted = localStorage.getItem('muted')
        const savedMusic = localStorage.getItem('musicOn')

        if (savedMuted) setMuted(JSON.parse(savedMuted))
        if (savedMusic) setMusicOn(JSON.parse(savedMusic))
    }, [])

    useEffect(() => {
        localStorage.setItem('muted', JSON.stringify(muted))
    }, [muted])

    useEffect(() => {
        localStorage.setItem('musicOn', JSON.stringify(musicOn))
    }, [musicOn])

    // initialize music once
    useEffect(() => {
        musicRef.current = new Audio('/sounds/music.mp3')
        musicRef.current.loop = true
        musicRef.current.volume = 0.3
    }, [])

    const play = (type) => {
        if (muted) return

        const audio = new Audio(`/sounds/${type}.mp3`)
        audio.volume = 0.4
        audio.play()
    }

    const toggleMusic = () => {
        const audio = musicRef.current
        if (!audio) return

        setMusicOn(prev => {
            const next = !prev

            if (next) {
                if (!muted) {
                    audio.currentTime = 0
                    audio.play()
                }
            } else {
                audio.pause()
                audio.currentTime = 0
            }

            return next
        })
    }

    const toggleMute = () => {
        setMuted(prev => {
            const next = !prev

            const audio = musicRef.current
            if (!audio) return next

            if (next) {
                audio.pause()
            } else {
                if (musicOn) audio.play()
            }

            return next
        })
    }

    return (
        <SoundContext.Provider value={{
            play,
            muted,
            toggleMute,
            musicOn,
            toggleMusic
        }}>
            {children}
        </SoundContext.Provider>
    )
}