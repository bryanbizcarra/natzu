import React from 'react';
import './Services.css';
import gastronomiaImg from '../assets/gastronomia.webp';
import tiendaImg from '../assets/tienda.webp';
import corporativoImg from '../assets/corporativo.webp';

const servicesList = [
    {
        title: "Gastronomía",
        description: "Capturamos la esencia y el sabor de tu restaurante con fotografía y video de alta gama.",
        image: gastronomiaImg,
    },
    {
        title: "E-Commerce",
        description: "Contenido optimizado para ventas que resalta los detalles premium de tus productos.",
        image: tiendaImg,
    },
    {
        title: "Corporativo",
        description: "Producciones cinematográficas que comunican la visión y profesionalismo de tu empresa.",
        image: corporativoImg,
    }
];

const Services = () => {
    return (
        <section id="servicios" className="section-padding services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras <span className="text-orange">Especialidades</span></h2>
                    <p className="section-subtitle">Soluciones de contenido 100% enfocadas en tu industria.</p>
                </div>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div key={index} className="service-card glass-card">
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-info">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
