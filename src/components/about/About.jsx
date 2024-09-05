import React from 'react';
import '../about/about.css';

const About = () => {
  const imageURL = 'http://localhost:3000/static/media/profil1.a83d1d6a05be585b0d1b.jpeg';

  return (
    <section className='about container section' id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={imageURL} alt="" className="about__img" />
        

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I have advanced knowledge in MS Office, ISO 9001:2015, and the ÜTS (Product Tracking System). I
am highly practical and successful in registering medical devices with the Turkish Ministry of Health.
I excel in efficient and independent work, crisis management, effective time management, and
attention to detail. My proficiency in both Turkish and English allows me to communicate effectively
in written and verbal forms at both national and international levels. I am skilled in using MS Office
applications and can successfully manage complex projects with a systematic approach. With my
research-oriented mindset, I closely follow current regulatory changes. My strong communication
and presentation skills boost my confidence in planning and organization. I work with a resultsoriented focus and have developed my skills in reporting and regulation due to my analytical thinking
abilities. Conducting literature reviews has become both a hobby and a means of personal
development for me. What sets me apart is my research-driven spirit and positive energy, which
consistently puts me in the forefront
            </p>
            
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">MS Office</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development" style={{ width: '90%' }}></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Product Tracking System</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui-design" style={{ width: '80%' }}></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">English</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography" style={{ width: '80%' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default About;
