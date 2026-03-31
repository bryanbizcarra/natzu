import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    const form = useRef();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // IMPORTANT: Replace these IDs with your ones from EmailJS Dashboard
        // Service ID: 'service_id'
        // Template ID: 'template_id'
        // Public Key: 'public_key'

        emailjs.sendForm('service_XXXXX', 'template_XXXXX', form.current, 'user_XXXXX')
            .then((result) => {
                setStatus({ type: 'success', message: '¡Mensaje enviado con éxito! Te contactaremos pronto.' });
                form.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.' });
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="contact-page animate-fade">
            <header className="contact-header section-padding">
                <div className="container">
                    <h1 className="contact-title">Hablemos de tu <span className="text-orange">Próximo Proyecto</span></h1>
                    <p className="contact-subtitle">Estamos listos para transformar tu visión en una experiencia cinematográfica de alto impacto.</p>
                </div>
            </header>

            <section className="contact-content section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="section-title">Información de <span className="text-orange">Contacto</span></h2>
                            <p className="contact-p">
                                ¿Tienes una idea en mente? Nuestro equipo boutique está listo para sumergirse en tu marca
                                y crear contenido que destaque.
                            </p>

                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>contacto@natzu.cl</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <p>+56 9 0000 0000</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4>Ubicación</h4>
                                        <p>Santiago, Chile</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social-section">
                                <h3>Siguenos</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-icon-btn"><Instagram size={20} /></a>
                                    <a href="#" className="social-icon-btn"><Linkedin size={20} /></a>
                                    <a href="#" className="social-icon-btn"><Twitter size={20} /></a>
                                    <a href="#" className="social-icon-btn"><Youtube size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container glass-card">
                            {status.message && (
                                <div className={`form-status ${status.type}`}>
                                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="user_name">Nombre Completo</label>
                                    <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user_email">Email Corporativo</label>
                                    <input type="email" id="user_email" name="user_email" placeholder="tuejemplo@empresa.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="project_type">Tipo de Proyecto</label>
                                    <select id="project_type" name="project_type" required>
                                        <option value="">Selecciona una opción</option>
                                        <option value="Producción Cinematográfica">Producción Cinematográfica</option>
                                        <option value="Contenido para Redes">Contenido para Redes</option>
                                        <option value="Branding Visual">Branding Visual</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Cuéntanos sobre tu idea</label>
                                    <textarea id="message" name="message" rows="5" placeholder="Escribe aquí los detalles del proyecto..." required></textarea>
                                </div>
                                <button type="submit" className="btn-primary form-submit" disabled={loading}>
                                    {loading ? 'Enviando...' : (
                                        <>
                                            Enviar Mensaje <Send size={18} style={{ marginLeft: '10px' }} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
