import Desktop from './components/desktop/Desktop'
import Waves from './components/background/Waves'
import ThemeToggle from './components/ui/ThemeToggle'

function App() {
    return (
        <>
            <ThemeToggle />
            <Waves />
            <Desktop />
        </>
    )
}

export default App