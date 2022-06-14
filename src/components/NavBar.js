import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav role='navigation'>
            <Link className="nav-Link" to="/">Prompts </Link>
            <Link className="nav-Link" to="/natureprompts">Nature Prompts</Link>
            <Link className="nav-Link" to="/about">About</Link>
        </nav>
    );
    
}

export default NavBar;