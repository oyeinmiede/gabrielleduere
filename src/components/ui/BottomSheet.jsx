import { FaAngleDoubleDown } from "react-icons/fa";

const BottomSheet = ({
    title,
    children,
    onClose
}) => {
    return (
        <div className="bottom-sheet">

            <div className="sheet-header">
                <h3>{title}</h3>

                <button onClick={onClose}>
                    <FaAngleDoubleDown size={20} />
                </button>
            </div>

            <div className="sheet-content">
                {children}
            </div>

        </div>
    )
}

export default BottomSheet