import Window from '../ui/Window'

const Contact = ({ onClose }) => {
    return (
        <Window
            title="contact"
            onClose={onClose}
        >
            <h2>Contact Me</h2>

            <p>
                frontend developer
            </p>
        </Window>
    )
}

export default Contact