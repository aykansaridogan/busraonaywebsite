import React from 'react';

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a href='https://tr.linkedin.com/in/büşra-onay-1b53a0207' title='LinkedIn' className='home__social-link' target='blank'>
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <span className="social-gap"></span> {/* Boşluk ekledim */}
      <a href='https://www.instagram.com/busraa.onay/' title='Instagram' className='home__social-link' target='blank'>
        <i className="fa-brands fa-instagram"></i>
      </a>
      <span className="social-gap"></span> {/* Boşluk ekledim */}
      <a href='https://x.com/siniirkupuu' title='X' className='home__social-link' target='blank'>
        <i className="fa-brands fa-square-x-twitter"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
