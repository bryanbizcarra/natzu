import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="hero-overlay"></div>
            <div className="container animate-fade">
                <div className="hero-content-wrapper">
                    <h2 className="hero-subtitle">Contenido con Propósito</h2>
                    <h1 className="hero-title">Elevamos tu Marca con <span className="text-orange">Impacto Visual</span></h1>
                    <p className="hero-description">
                        En Natzu Content Lab, transformamos la esencia de tu negocio en experiencias visuales de alta fidelidad.
                        Enfoque boutique para resultados extraordinarios.
                    </p>
                    <div className="hero-btns">
                        <a href="#proyectos" className="btn-primary">Ver Portfolio</a>
                        <a href="#contacto" className="btn-secondary">Hablemos</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
