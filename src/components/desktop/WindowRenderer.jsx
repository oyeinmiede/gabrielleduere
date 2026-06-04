import { useContext } from 'react'
import { WindowContext } from '../../context/WindowContext'

import Window from '../ui/Window'

import Home from '../modals/Home'
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

    const renderContent = (window) => {
        const props = {
            window,
            onClose: () => closeWindow(window.type),
            bringToFront,
            updatePosition
        }

        switch (window.type) {
            case 'home':
                return <Home {...props} />
            case 'about':
                return <About {...props} />
            case 'work':
                return <Work {...props} />
            case 'faq':
                return <FAQ {...props} />
            case 'links':
                return <Links {...props} />
            case 'contact':
                return <Contact {...props} />
            default:
                return null
        }
    }

    return (
        <>
            {windows
                .filter(w => w.isOpen)
                .map(window => (
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
                ))}
        </>
    )
}

export default WindowRenderer