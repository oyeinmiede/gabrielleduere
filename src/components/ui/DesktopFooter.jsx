import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import '../../styles/footer.css'

const DesktopFooter = () => {
    return (
        <footer className="desktop-footer">

            <div className="footer-links">
                <a href="https://github.com/oyeinmiede" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>

                <a href="https://linkedin.com/in/gabrielle-duere-380970377" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>

                <a href="https://instagram.com/secretsev7en">
                    <FaInstagram />
                </a>
            </div>

            <p className="copyright">
                © {new Date().getFullYear()} Gabrielle Duere.
            </p>

        </footer>
    )
}

export default DesktopFooter