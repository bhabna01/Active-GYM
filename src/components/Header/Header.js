
import React from 'react';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-logo'>
                <FontAwesomeIcon icon={faPersonWalking} size="5px" ></FontAwesomeIcon>
                <h1>ActiveGym</h1>
            </div>

            <div>
                <a href="/home">Home</a>
                <a href="/tutorial">Tutorial</a>
                <a href="/contact">Contact</a>
                <a href="/about">About me</a>

            </div>
        </nav>
    );
};

export default Header;