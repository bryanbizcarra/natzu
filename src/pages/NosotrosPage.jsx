import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';
import './NosotrosPage.css';

const NosotrosPage = () => {
    return (
        <div className="nosotros-page animate-fade">
            <header className="nosotros-header section-padding">
                <div className="container">
                    <h1 className="nosotros-title">Más que una <span className="text-orange">Agencia</span></h1>
                    <p className="nosotros-subtitle">Somos un laboratorio de contenido diseñado para marcas que buscan elevar su narrativa visual.</p>
                </div>
            </header>

            <section className="nosotros-content section-padding">
                <div className="container">
                    <div className="nosotros-grid">
                        <div className="nosotros-text">
                            <h2 className="section-title">Nuestra <span className="text-orange">Esencia</span></h2>
                            <p className="about-p">
                                En Natzu Content Lab, no solo producimos videos; creamos experiencias cinematográficas.
                                Nacimos con la visión de romper el molde de la producción convencional,
                                enfocándonos en la calidad sobre la cantidad.
                            </p>
                            <p className="about-p">
                                Nuestro enfoque "Boutique" nos permite sumergirnos profundamente en la identidad de cada marca,
                                traduciendo valores abstractos en imágenes potentes y narrativas que conectan emocionalmente con la audiencia.
                            </p>

                            <div className="social-links-container">
                                <h3 className="social-title">Conecta con nosotros</h3>
                                <div className="social-icons">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                                        <Linkedin size={24} />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                                        <Twitter size={24} />
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                                        <Youtube size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="nosotros-visual glass-card">
                            <div className="experience-badge">
                                <span className="years">7+</span>
                                <span className="label">Años de Innovación</span>
                            </div>
                            <div className="vision-card">
                                <h3>Nuestra Visión</h3>
                                <p>Ser el referente regional en la creación de contenido de alto impacto visual y estratégico.</p>
                                <ArrowRight className="text-orange" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="nosotros-values section-padding bg-accent">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-num">01</span>
                            <h3>Excelencia</h3>
                            <p>Cada frame es tratado como una obra de arte, cuidando cada detalle técnico y estético.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-num">02</span>
                            <h3>Estrategia</h3>
                            <p>No grabamos sin un propósito. Todo contenido responde a un objetivo de negocio claro.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-num">03</span>
                            <h3>Innovación</h3>
                            <p>Utilizamos tecnología de vanguardia y nuevas narrativas para mantener a nuestras marcas adelante.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NosotrosPage;
