import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo-natzu.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src={logo} alt="Natzu Logo" className="footer-logo" />
                        <p className="footer-tagline">Contenido que respira, impacto que perdura.</p>
                        <div className="footer-social">
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Youtube size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Natzu Content Lab. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
