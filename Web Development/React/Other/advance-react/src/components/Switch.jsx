import { useContext } from 'react';
import '../assets/themeButton.css'
import ThemeContext from '../context/ThemeContext';

function Switch(){
    const {theme, setTheme} = useContext(ThemeContext)
    return(
        <div>
            <label className="switch">
            <input type="checkbox" onChange={()=>setTheme(!theme)} defaultChecked></input>
            <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Switch;