import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar' role='navigation'>
            <div className='navbar-left'>
                <a href='/' className='logo'>
                    Vinit Rao
                </a>
            </div>
            <div className='navbar-center'>
                <ul className='nav-links'>
                    <li>
                        <a href='/About'>About</a>
                    </li>
                    <li>
                        <a href='/Projects'>Projects</a>
                    </li>
                    <li>
                        <a href='/Contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar;