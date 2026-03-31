import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contacto" className="section-padding contact">
            <div className="container">
                <div className="contact-box glass-card animate-fade">
                    <div className="contact-info">
                        <h2 className="section-title">¿Listo para el <span className="text-orange">Siguiente Nivel</span>?</h2>
                        <p>Hablemos sobre tu proyecto y cómo podemos potenciarlo con contenido de alta calidad.</p>
                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <span className="detail-value">atiel@natzutech.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-label">Ubicación</span>
                                <span className="detail-value">Santiago, Chile</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-action">
                        <h3>Contáctanos ahora</h3>
                        <p>Agenda una reunión estratégica de 15 min.</p>
                        <a href="https://wa.me/56900000000" className="btn-primary whatsapp-btn">
                            Escríbenos por WhatsApp
                        </a>
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">YouTube</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
