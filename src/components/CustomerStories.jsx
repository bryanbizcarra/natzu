import React from 'react';
import './CustomerStories.css';

const stories = [
    {
        client: "Restaurante El Faro",
        project: "Campaña Audiovisual Menu Primavera",
        result: "Aumento del 40% en reservas vía Instagram."
    },
    {
        client: "TechStream Pro",
        project: "Video Lanzamiento Corporativo",
        result: "Posicionamiento de marca en sector C-Level."
    },
    {
        client: "Luxury Watches Inc",
        project: "Fotografía de Producto E-commerce",
        result: "Conversión de ventas incrementada en 25%."
    }
];

const CustomerStories = () => {
    return (
        <section id="proyectos" className="section-padding customer-stories bg-accent">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestras <span className="text-orange">Historias</span></h2>
                    <p className="section-subtitle">Resultados tangibles a través del poder visual.</p>
                </div>
                <div className="stories-list">
                    {stories.map((story, index) => (
                        <div key={index} className="story-item animate-fade">
                            <div className="story-count">0{index + 1}</div>
                            <div className="story-content">
                                <h3>{story.client}</h3>
                                <p className="story-project">{story.project}</p>
                                <p className="story-result">{story.result}</p>
                            </div>
                            <div className="story-link">
                                <span>Leer Caso</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
