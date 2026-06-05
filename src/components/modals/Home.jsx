import { useContext } from 'react'

import Mushroom from '../ui/Mushroom'

import { WindowContext } from '../../context/WindowContext'
import { ThemeContext } from '../../context/ThemeContext'

import '../../styles/home.css'

const Home = () => {

    const { openWindow } = useContext(WindowContext)
    const { theme } = useContext(ThemeContext)

    const links = [
        {
            id: 'about',
            label: 'about'
        },
        {
            id: 'links',
            label: 'links'
        },
        {
            id: 'work',
            label: 'work'
        },
        {
            id: 'faq',
            label: 'faq'
        },
        {
            id: 'contact',
            label: 'contact'
        }
    ]

    const icon = (name) =>
        `/icons/icon_${name}_${theme}.webp`

    return (
        <div className="home-modal">

            <div className="mushroom-slot">
                <Mushroom />
            </div>

            <div className="modal home">

                <div className="header">
                    <h3>home</h3>
                </div>

                <div className="modal-content">

                    <h1>
                        <span>hey!</span> i'm gabrielle
                    </h1>

                    <p>
                        frontend developer, videographer, student
                    </p>

                    <div className="modal-links">

                        {links.map((link) => (
                            <div
                                key={link.id}
                                className="modal-link"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    openWindow(link.id)
                                }}
                            >
                                <img
                                    src={icon(link.id)}
                                    alt={link.label}
                                />

                                <span>
                                    {link.label}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home