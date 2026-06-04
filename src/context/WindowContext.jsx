import { createContext, useState } from "react";

export const WindowContext = createContext()
export const WindowProvider = ({ children }) => {
    const [openWindows, setOpenWindows] = useState(['home'])
    const [highestZ, setHighestZ] = useState(100)
    const openWindow = (name) => {
        if(openWindows.includes(name)) return
        setOpenWindows(prev => [
            ...prev,
            name
        ])
    }

    const closeWindow = (name) => {
        if (name === 'home') return
        setOpenWindows(prev => 
            prev.filter(
                window => window !== name
            )
        )
    }

    const getNextZIndex = () => {
        const next = highestZ + 1
        setHighestZ(next)
        return next
    }

    return (
        <WindowContext.Provider
            value={{
                openWindows,
                openWindow,
                closeWindow,
                getNextZIndex
            }}
        >
            {children}
        </WindowContext.Provider>
    )
}