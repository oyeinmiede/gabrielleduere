import { createContext, useState, useEffect } from 'react'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
    const [muted, setMuted] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('muted')
        if (saved) setMuted(JSON.parse(saved))
    }, [])

    useEffect(() => {
        localStorage.setItem('muted', JSON.stringify(muted))
    }, [muted])

    const play = (type) => {
        if (muted) return

        const audio = new Audio(`/sounds/${type}.mp3`)
        audio.volume = 0.4
        audio.play()
    }

    const toggleMute = () => {
        setMuted(prev => !prev)
    }

    return (
        <SoundContext.Provider value={{
            play,
            muted,
            toggleMute
        }}>
            {children}
        </SoundContext.Provider>
    )
}