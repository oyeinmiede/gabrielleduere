import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaGlobe } from "react-icons/fa";
import '../../styles/links.css';

const Links = () => {
    const links = [
        { icon: <FaGithub />, name: "GitHub", url: "https://github.com" },
        { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com" },
        { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com" },
        { icon: <FaEnvelope />, name: "Email", url: "mailto:godd3101@gmail.com" },
        { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com" },
        { icon: <FaYoutube />, name: "YouTube", url: "https://youtube.com" },
        { icon: <FaFacebook />, name: "Facebook", url: "https://facebook.com" },
        { icon: <FaGlobe />, name: "Portfolio", url: "https://yourportfolio.com" },
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
                        <div className="icon">{link.icon}</div>
                        <p>{link.name}</p>
                    </a>
                ))}
            </div>
            <div className="note-box">
                <p>Clicking any of the links will open a new tab!</p>
            </div>
        </div>
    );
};

export default Links;
