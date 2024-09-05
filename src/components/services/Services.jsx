import React from 'react';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import './services.css';

const data = [
    {
        id: 1,
        image: Image1,
        title: "MS Office",
        description: "I am skilled in using MS Office applications and can successfully manage complex projects with a systematic approach.",
    },
    {
        id: 2,
        image: Image2,
        title: "Product Tracking System",
        description: "I have utilized a product tracking system that enhances the efficiency and accuracy of managing inventory. This system enables real-time monitoring of products throughout the supply chain, from production to delivery. By integrating barcode scanning and automated updates, it ensures that inventory levels are always up-to-date, reducing the likelihood of stockouts or overstocking. Additionally, the system provides detailed reports and analytics, allowing for better decision-making and optimization of the supply chain processes",
    },
    {
        id: 3,
        image: Image3,
        title: "English",
        description: "My proficiency in both Turkish and English allows me to communicate effectively in written and verbal forms at both national and international levels.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>
            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => (
                    <div className="services__card" key={id}>
                        <img src={image} alt={title} className="services__img" />
                        <h3 className="services__title">{title}</h3>
                        <p className="service__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
