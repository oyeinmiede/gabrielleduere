import Window from '../ui/Window'

const Contact = ({
    window,
    onClose,
    updatePosition,
    bringToFront
}) => {
    return (
        <Window
            title="contact"
            window={window}
            onClose={onClose}
            updatePosition={updatePosition}
            bringToFront={bringToFront}
        >
            <div className="app-content">

                <h2>contact</h2>

                <p>
                    want to work together or just say hi?
                </p>

                <div className="contact-grid">

                    <div className="contact-item">
                        <h3>email</h3>
                        <p>gabrielle@email.com</p>
                    </div>

                    <div className="contact-item">
                        <h3>github</h3>
                        <p>github.com/gabrielle</p>
                    </div>

                    <div className="contact-item">
                        <h3>linkedin</h3>
                        <p>linkedin.com/in/gabrielle</p>
                    </div>

                </div>

                <div className="contact-note">
                    <p>
                        i usually respond within a few days ✨
                    </p>
                </div>

            </div>
        </Window>
    )
}

export default Contact