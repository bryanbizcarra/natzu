import React from 'react';
import './About.css';
import camara1 from '../assets/camara-1.webp';
import camara2 from '../assets/camara-2.webp';
import camara3 from '../assets/camara-3.webp';

const About = () => {
    return (
        <section id="nosotros" className="section-padding about">
            <div className="container about-container">
                <div className="about-text">
                    <h2 className="section-title">Enfoque <span className="text-orange">Boutique</span></h2>
                    <p className="about-highlight">
                        A diferencia de las grandes agencias, en Natzu Content Lab elegimos trabajar con un grupo exclusivo de clientes.
                    </p>
                    <p className="about-p">
                        Esta filosofía nos permite volcar toda nuestra energía, creatividad y enfoque estratégico en cada proyecto.
                        No buscamos cantidad, buscamos la excelencia cinematográfica que tu marca merece para destacar en un mercado saturado.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">Enfoque en Contenido</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-num">Premium</span>
                            <span className="stat-label">Calidad de Producción</span>
                        </div>
                    </div>
                </div>
                <div className="about-visual glass-card">
                    <div className="creative-grid">
                        <div className="grid-box box-1">
                            <img src={camara1} alt="Enfoque Boutique 1" className="about-img" />
                        </div>
                        <div className="grid-box box-2">
                            <img src={camara2} alt="Enfoque Boutique 2" className="about-img" />
                        </div>
                        <div className="grid-box box-3">
                            <img src={camara3} alt="Enfoque Boutique 3" className="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
