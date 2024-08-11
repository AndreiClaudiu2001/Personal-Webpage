import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">Domnița Andrei Claudiu</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">Despre</a></li>
                        <li><a href="#hobbies">Pasiuni</a></li>
                        <li><a href="#projects">Proiecte</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">Domnița Andrei Claudiu</div>
                <div className="hamburger-menu">
                    <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
                        <li><a href="#about" onClick={toggleMenu}>Despre</a></li>
                        <li><a href="#hobbies" onClick={toggleMenu}>Pasiuni</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Proiecte</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
