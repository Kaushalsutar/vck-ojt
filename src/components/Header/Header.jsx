import React from 'react';
import{Link} from 'react-router-dom';
import './Header.css';
const Header = () => {
    return(
         <>
             <header className='header1'>
                <div className='logo'>Vivekanand College</div>
                 <nav className='nav-links'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/course">Courses</Link>
                    <Link to="/admission" className='apply-btn'>Apply Now!</Link>
                    
                    
                 </nav>
             </header>
         </>
    )
}

export default Header;