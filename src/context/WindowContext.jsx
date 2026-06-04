import { createContext, useState } from 'react'

export const WindowContext = createContext()

export const WindowProvider = ({ children }) => {
    const [windows, setWindows] = useState([])

    const [topZ, setTopZ] = useState(2)

    const openWindow = (type) => {
        setWindows(prev => {
            const exists = prev.find(w => w.type === type)

            if (exists) {
                return prev.map(w =>
                    w.type === type
                        ? {
                            ...w,
                            isOpen: true,
                            zIndex: topZ
                        }
                        : w
                )
            }

            return [
                ...prev,
                {
                    id: `${type}-${Date.now()}`,
                    type,
                    x: 120,
                    y: 80,
                    zIndex: topZ,
                    isOpen: true
                }
            ]
        })

        setTopZ(prev => prev + 1)
    }

    const closeWindow = (type) => {
        if (type === 'home') return

        setWindows(prev =>
            prev.map(w =>
                w.type === type
                    ? { ...w, isOpen: false }
                    : w
            )
        )
    }

    const bringToFront = (type) => {
        setWindows(prev =>
            prev.map(w =>
                w.type === type
                    ? { ...w, zIndex: topZ }
                    : w
            )
        )

        setTopZ(prev => prev + 1)
    }

    const updatePosition = (type, x, y) => {
        setWindows(prev =>
            prev.map(w =>
                w.type === type
                    ? { ...w, x, y }
                    : w
            )
        )
    }

    return (
        <WindowContext.Provider
            value={{
                windows,
                openWindow,
                closeWindow,
                bringToFront,
                updatePosition
            }}
        >
            {children}
        </WindowContext.Provider>
    )
}