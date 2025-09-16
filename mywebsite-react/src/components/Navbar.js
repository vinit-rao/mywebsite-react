import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
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
            <div className='navbar-right'>
                <a href='/cart' className='cart-icon'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='cart-count'>0</span>
                </a>
                <a href='/account' className='user-icon'>
                    <i className='fas fa-user'></i>
                </a>
            </div>
        </nav>
    )
}



export default Navbar;