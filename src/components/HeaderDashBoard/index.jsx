import './styles.css';
import '../../DarkMode.css';
import Switch from 'react-switch'

import { useState } from 'react';


const HeaderDashBoard = ({DashBoard,setDarkMode}) => {    

    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked) => {
      setChecked(nextChecked);
      nextChecked ? setDarkMode('darkMode') : setDarkMode('')
    };

 
    return(
        <header className='headerDashBoard'>    
        <h2>Nu <span>Kenzie</span></h2>
            <nav>
            <button type="button" onClick={DashBoard}>Inicio</button>

            <Switch
            onChange={handleChange}
            checked={checked}            
            onColor="#5c4b51"
            onHandleColor="#E34981"
            />
       
            </nav>

            

        </header>       
    )
}

export default HeaderDashBoard;