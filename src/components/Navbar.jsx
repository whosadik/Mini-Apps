import {useState, useEffect} from 'react'
import LogoLight from '../images/logo.svg'
import LogoDark from '../images/logo-dark.svg'

import  './Navbar.css'
import Sun from '../images/icon-sun.svg'
import Moon from '../images/icon-moon.svg'

function Navbar(){

    

    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        document.body.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return( 
    <div className='container'>
        <div className='nav'>
            <img className='logo' src={theme === 'light' ? LogoLight: LogoDark} alt="Logo icon" />
            <button onClick={toggleTheme} className='toggleTheme'><img src= {theme === 'light' ? Moon: Sun} alt="Light theme icon" /></button>
        </div>
    </div>)
}

export default Navbar;

