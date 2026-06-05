import { useContext, useEffect, useRef } from 'react'
import { ToastContext } from '../../context/ToastContext'
import { WindowContext } from '../../context/WindowContext'

import useDeviceMode from '../../hooks/useDeviceMode'

import Window from '../ui/Window'
import BottomSheet from '../ui/BottomSheet'

import About from '../modals/About'
import Work from '../modals/Work'
import FAQ from '../modals/FAQ'
import Links from '../modals/Links'
import Contact from '../modals/Contact'
import FunStuff from '../modals/FunStuff'

const WindowRenderer = () => {
    const {
        windows,
        closeWindow,
        bringToFront,
        updatePosition
    } = useContext(WindowContext)

    const { mode } = useDeviceMode()
    const { addToast } = useContext(ToastContext)

    const hasShown = useRef(false)

    useEffect(() => {
        if (mode === 'mobile' && !hasShown.current) {
            addToast(
                <div>
                    <h3>hey there!</h3>
                    <p>
                        just letting you know that this site is best experienced on desktop,
                        some features might be wonky on different devices.
                    </p>
                </div>,
                10000
            )
            hasShown.current = true
        }
    }, [mode])

    const renderContent = (window) => {
        switch (window.type) {
            case 'about': return <About />
            case 'work': return <Work />
            case 'faq': return <FAQ />
            case 'links': return <Links />
            case 'contact': return <Contact />
            case 'fun stuff' : return <FunStuff />
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