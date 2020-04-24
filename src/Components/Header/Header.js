import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

export default props => (
    <div className='header-container'>
        <h1>Preceptive</h1>
        <nav>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    </div>
)