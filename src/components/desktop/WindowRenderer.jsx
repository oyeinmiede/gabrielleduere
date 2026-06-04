import { useContext } from 'react'
import { WindowContext } from '../../context/WindowContext'

import Home from '../modals/Home'
import About from '../modals/About'
import Work from '../modals/Work'
import FAQ from '../modals/FAQ'
import Links from '../modals/Links'
import Contact from '../modals/Contact'

const WindowRenderer = () => {
    const {
        openWindows,
        closeWindow
    } = useContext(WindowContext)

    const renderWindow = (name) => {
        switch (name) {
            case 'home':
                return <Home key="home" />

            case 'about':
                return (
                    <About
                        key="about"
                        onClose={() => closeWindow('about')}
                    />
                )

            case 'work':
                return (
                    <Work
                        key="work"
                        onClose={() => closeWindow('work')}
                    />
                )

            case 'faq':
                return (
                    <FAQ
                        key="faq"
                        onClose={() => closeWindow('faq')}
                    />
                )

            case 'links':
                return (
                    <Links
                        key="links"
                        onClose={() => closeWindow('links')}
                    />
                )

            case 'contact':
                return (
                    <Contact
                        key="contact"
                        onClose={() => closeWindow('contact')}
                    />
                )

            default:
                return null
        }
    }

    return (
        <>
            {openWindows.map(name =>
                renderWindow(name)
            )}
        </>
    )
}

export default WindowRenderer