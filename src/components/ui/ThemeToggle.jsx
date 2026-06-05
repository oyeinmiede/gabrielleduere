import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'light'
                ? <img src="/icons/moon.png" alt="" />
                : <img src="/icons/sun.png" alt="" />
            }
        </button>
    )
}

export default ThemeToggle