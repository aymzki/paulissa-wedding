import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

        return (
            <>
        <nav className='navbar'>
            <div className='navbar-continer'>
               <Link to="/" className='navbar-logo'>
                   Paul & Alissa </Link> 
                <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li className='nav-item'>
                    <Link to='/ourstory' className='nav-links' onClick={closeMobileMenu}>
                    Our Story
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/wedding' className='nav-links' onClick={closeMobileMenu}>
                    Our Wedding
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/celebrate' className='nav-links' onClick={closeMobileMenu}>
                    Celebrate With Us
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar