import React from 'react';
import "./resume.css";
import Shapes from '../Home/Shapes.jsx';
import Data from './Data.jsx';
import Card from './Card.jsx';

const Resume = () => {
  const educationData = Data.filter(val => val.category === "education");
  const experienceData = Data.filter(val => val.category === "experience");

  return (
    <section id="resume" className="resume container section">
      <h2 className="section__title">Experience</h2>
      <Shapes />
      <div className="resume__container">
        {educationData.length > 0 && (
          <div className="timeline education">
            {educationData.map((val, id) => (
              <Card 
                key={id} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                desc={val.desc} 
              />
            ))}
          </div>
        )}
        {experienceData.length > 0 && (
          <div className="timeline experience">
            {experienceData.map((val, index) => (
              <Card 
                key={index} 
                icon={val.icon} 
                title={val.title} 
                year={val.year} 
                desc={val.desc} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Resume;
