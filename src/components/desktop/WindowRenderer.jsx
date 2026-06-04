import { useContext } from 'react'
import { WindowContext } from '../../context/WindowContext'

import useDeviceMode from '../../hooks/useDeviceMode'

import Window from '../ui/Window'
import BottomSheet from '../ui/BottomSheet'

import About from '../modals/About'
import Work from '../modals/Work'
import FAQ from '../modals/FAQ'
import Links from '../modals/Links'
import Contact from '../modals/Contact'

const WindowRenderer = () => {
    const {
        windows,
        closeWindow,
        bringToFront,
        updatePosition
    } = useContext(WindowContext)

    const { mode } = useDeviceMode()

    const renderContent = (window) => {
        switch (window.type) {
            case 'about': return <About />
            case 'work': return <Work />
            case 'faq': return <FAQ />
            case 'links': return <Links />
            case 'contact': return <Contact />
            default: return null
        }
    }

    return (
        <>
            {windows
                .filter(w => w.isOpen)
                .map(window => {

                    if (mode === 'mobile') {
                        return (
                            <BottomSheet
                                key={window.id}
                                title={window.type}
                                onClose={() =>
                                    closeWindow(window.type)
                                }
                            >
                                {renderContent(window)}
                            </BottomSheet>
                        )
                    }

                    return (
                        <div
                            key={window.id}
                            style={{
                                position: 'absolute',
                                zIndex: window.zIndex,
                                transform: `translate(${window.x}px, ${window.y}px)`
                            }}
                            onMouseDown={() =>
                                bringToFront(window.type)
                            }
                        >
                            <Window
                                title={window.type}
                                window={window}
                                onClose={() =>
                                    closeWindow(window.type)
                                }
                                updatePosition={updatePosition}
                                bringToFront={bringToFront}
                            >
                                {renderContent(window)}
                            </Window>
                        </div>
                    )
                })}
        </>
    )
}

export default WindowRenderer