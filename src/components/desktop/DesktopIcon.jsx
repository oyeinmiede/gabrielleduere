const DesktopIcon = ({
    icon,
    label,
    onClick
}) => {
    return (
        <div
            className="desktop-icon"
            onClick={onClick}
        >
            <img src={icon} alt="" />

            <span>{label}</span>
        </div>
    )
}

export default DesktopIcon