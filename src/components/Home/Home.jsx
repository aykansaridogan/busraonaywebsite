import React from 'react';
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

export default function Home() {
  // Resmin URL'sini buraya yerleştirin
  const imageURL = 'https://media.licdn.com/dms/image/C4D03AQFCPf5A_QrCsw/profile-displayphoto-shrink_200_200/0/1662749215390?e=2147483647&v=beta&t=KtNcWxtKhUJEqAej3PbijHGeitx6l0HX8h6S0oeCxDY';

  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={imageURL} alt='' className='home__img'/>
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
