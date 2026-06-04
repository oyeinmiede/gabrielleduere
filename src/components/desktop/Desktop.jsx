import '../../styles/desktop.css'
import Home from '../modals/Home'

import WindowRenderer from './WindowRenderer'

const Desktop = () => {
    return (
        <main className="desktop">
            <Home />
            <WindowRenderer />
        </main>
    )
}

export default Desktop