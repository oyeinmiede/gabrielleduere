import Draggable from "react-draggable";

const Window = ({
    title,
    children,
    onClose
}) => {
    return (
        <Draggable handle=".window-header">
            <div className="window">
                <div className="window-header">
                    <h3>{title}</h3>
                    <button onClick={onClose}>[x]</button>
                </div>
                <div className="window-body">
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default Window
