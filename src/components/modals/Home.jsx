import Mushroom from '../ui/Mushroom'
import { useContext } from 'react'
import { WindowContext } from '../../context/WindowContext'

import '../../styles/home.css'

const Home = () => {
    const { openWindow } = useContext(WindowContext)

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

                        <div
                            className="modal-link"
                            onClick={() => openWindow('about')}
                        >
                            <img
                                src="/icons/icon_about_dark.webp"
                                alt="about"
                            />
                            <span>about</span>
                        </div>

                        <div
                            className="modal-link"
                            onClick={() => openWindow('links')}
                        >
                            <img
                                src="/icons/icon_links_dark.webp"
                                alt="links"
                            />
                            <span>links</span>
                        </div>

                        <div
                            className="modal-link"
                            onClick={() => openWindow('work')}
                        >
                            <img
                                src="/icons/icon_work_dark.webp"
                                alt="work"
                            />
                            <span>work</span>
                        </div>

                        <div
                            className="modal-link"
                            onClick={() => openWindow('faq')}
                        >
                            <img
                                src="/icons/icon_faq_dark.webp"
                                alt="faq"
                            />
                            <span>faq</span>
                        </div>

                        <div
                            className="modal-link"
                            onClick={() => openWindow('contact')}
                        >
                            <img
                                src="/icons/icon_contact_dark.webp"
                                alt="contact"
                            />
                            <span>contact</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home