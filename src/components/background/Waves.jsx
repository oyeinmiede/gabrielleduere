import Wavify from 'react-wavify'

import '../../styles/waves.css'

const Waves = () => {
    return (
        <div className="waves-wrapper">

            <Wavify
                className="wave wave-1"
                fill="var(--wave-1)"
                paused={false}
                options={{
                    height: 0,
                    amplitude: 30,
                    speed: 0.25,
                    points: 4,
                }}
            />

            <Wavify
                className="wave wave-2"
                fill="var(--wave-2)"
                paused={false}
                options={{
                    height: 5,
                    amplitude: 22,
                    speed: 0.18,
                    points: 3,
                }}
            />

            <Wavify
                className="wave wave-3"
                fill="var(--wave-3)"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 15,
                    speed: 0.12,
                    points: 4,
                }}
            />

        </div>
    )
}

export default Waves