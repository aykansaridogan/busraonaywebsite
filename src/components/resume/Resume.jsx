import React from 'react';
import "./resume.css";
import Shapes from '../Home/Shapes.jsx';
import Data from './Data.jsx';
import Card from './Card.jsx';

const Resume = () => {
  return (
    <section id="resume" className="resume container section"> {/* id eklendi */}
      <h2 className="section__title">Experience</h2>
      <Shapes />
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card 
                  key={id} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc} 
                />
              );
            }
            return null;
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card 
                  key={index} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc} 
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default Resume;
