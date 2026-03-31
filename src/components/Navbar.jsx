import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo-natzu.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDark(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleMenu = () => setMenuOpen(false);

    // Helper to determine if a link is internal hash link
    const getPath = (hash) => {
        return location.pathname === '/' ? hash : `/${hash}`;
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-active' : ''}`}>
            <div className="container nav-container">
                <div className="logo-container">
                    <Link to="/" onClick={toggleMenu}>
                        <img src={logo} alt="Natzu Content Lab" className="nav-logo" />
                    </Link>
                </div>

                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                    <li><Link to="/nosotros" onClick={toggleMenu}>Nosotros</Link></li>
                    <li><a href={getPath('#proyectos')} onClick={toggleMenu}>Historias</a></li>
                    <li><a href={getPath('#servicios')} onClick={toggleMenu}>Servicios</a></li>
                    <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
                    <li className="mobile-only">
                        <a href="https://wa.me/56900000000" className="nav-cta-mobile">WhatsApp</a>
                    </li>
                </ul>

                <div className="nav-right">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a href="https://wa.me/56900000000" className="nav-cta desktop-only">WhatsApp</a>
                    <button className={`hamburger ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
