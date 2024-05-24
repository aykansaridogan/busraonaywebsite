import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import ben from '../../assets/profil1.jpeg';

export default function Home() {
  // Resmin URL'sini buraya yerleştirin
  

  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={ben} alt='' className='home__img'/>
        <HeaderSocials />
        <h1 className='home__name'>Büşra ONAY</h1>
        <span className='home__education'>Biomedical Engineer in Öncü Dental</span>
        
        <br/>
        <br/>
        <a href='#contact' className='btn'>Contact Me</a>
        <ScrollDown />
        <Shapes/>
      </div>
      
      
    </section>
  )
}
