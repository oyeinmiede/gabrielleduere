import '../../styles/desktop.css'
import Home from '../modals/Home'
import DesktopFooter from '../ui/DesktopFooter'
import WindowRenderer from './WindowRenderer'

const Desktop = () => {
    return (
        <main className="desktop">
            <Home />
            <WindowRenderer />
            <DesktopFooter />
        </main>
    )
}

export default Desktop