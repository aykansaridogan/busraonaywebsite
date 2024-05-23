import React from 'react';
import '../about/about.css';
import AboutBox from './AboutBox.jsx';

const About = () => {
  const imageURL = 'https://media.licdn.com/dms/image/C4D03AQFCPf5A_QrCsw/profile-displayphoto-shrink_200_200/0/1662749215390?e=2147483647&v=beta&t=KtNcWxtKhUJEqAej3PbijHGeitx6l0HX8h6S0oeCxDY';

  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={imageURL} alt="" className="about__img" />
        

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
            </p>
            <a href="#home" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development" style={{ width: '90%' }}></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui-design" style={{ width: '60%' }}></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography" style={{ width: '80%' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
