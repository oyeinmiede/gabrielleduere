import Window from '../ui/Window'

const About = ({ onClose }) => {
    return (
        <Window
            title="about"
            onClose={onClose}
        >
            <h2>About Me</h2>

            <p>
                frontend developer
            </p>
        </Window>
    )
}

export default About