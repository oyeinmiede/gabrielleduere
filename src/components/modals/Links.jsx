import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaSnapchatGhost,
    FaFileDownload
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import '../../styles/links.css';

const Links = () => {

    const links = [
        {
            icon: <FaGithub />,
            name: "GitHub",
            url: "https://github.com/oyeinmiede"
        },
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            url: "https://linkedin.com/in/gabrielle-duere-380970377"
        },
        {
            icon: <FaXTwitter />,
            name: "X (Twitter)",
            url: "https://x.com/brimightbegiddy"
        },
        {
            icon: <FaEnvelope />,
            name: "Email",
            url: "mailto:godd3101@gmail.com"
        },
        {
            icon: <FaInstagram />,
            name: "Instagram",
            url: "https://instagram.com/secretsev7en"
        },
        {
            icon: <FaSnapchatGhost />,
            name: "Snapchat",
            url: "https://snapchat.com/add/oyeinmiede"
        },
        {
            icon: <FaWhatsapp />,
            name: "WhatsApp",
            url: "https://wa.me/2349061176115"
        },
        {
            icon: <FaFileDownload />,
            name: "Download CV",
            url: "/files/Gabrielle-Duere-CV.pdf"
        }
    ];

    return (
        <div className="links-page">

            <div className="links-grid">

                {links.map((link, index) => (

                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-box"
                    >
                        <div className="icon">
                            {link.icon}
                        </div>

                        <p>
                            {link.name}
                        </p>
                    </a>

                ))}

            </div>

            <div className="note-box">
                <p>
                    clicking any of the links will open a new tab!
                </p>
            </div>

        </div>
    );
};

export default Links;