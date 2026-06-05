import '../../styles/desktop.css'
import Home from '../modals/Home'
import DesktopFooter from '../ui/DesktopFooter'
import MusicCat from '../ui/MusicCat'
import WindowRenderer from './WindowRenderer'

const Desktop = () => {
    return (
        <main className="desktop">
            <Home />
            <WindowRenderer />
            <DesktopFooter />
            <MusicCat />
        </main>
    )
}

export default Desktop