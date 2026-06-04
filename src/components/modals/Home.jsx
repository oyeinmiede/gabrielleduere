import Mushroom from '../ui/Mushroom'

import '../../styles/home.css'

const Home = () => {
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
                        frontend developer,
                        videographer,
                        student
                    </p>

                    <div className="modal-links">

                        <div className="modal-link">
                            <img
                                src="/public/icons/icon_about_dark.webp"
                                alt=""
                            />
                            <span>about</span>
                        </div>

                        <div className="modal-link">
                            <img
                                src="/public/icons/icon_links_dark.webp"
                                alt=""
                            />
                            <span>links</span>
                        </div>

                        <div className="modal-link">
                            <img
                                src="/public/icons/icon_work_dark.webp"
                                alt=""
                            />
                            <span>work</span>
                        </div>

                        <div className="modal-link">
                            <img
                                src="/public/icons/icon_faq_dark.webp"
                                alt=""
                            />
                            <span>faq</span>
                        </div>

                        <div className="modal-link">
                            <img
                                src="/public/icons/icon_contact_dark.webp"
                                alt=""
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