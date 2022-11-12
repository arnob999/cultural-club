import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link className='headnav' to='/'>Topics</Link>
                <Link className='headnav'>Statics</Link>
                <Link className='headnav'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;