import Desktop from './components/desktop/Desktop'
import Waves from './components/background/Waves'
import ThemeToggle from './components/ui/ThemeToggle'
import MuteButton from './components/ui/MuteButton'

function App() {
    return (
        <>
            <div className="actions">
                <ThemeToggle />
                <MuteButton />
            </div>
            
            <Waves />
            <Desktop />
        </>
    )
}

export default App