import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_tb0mkis', 'template_vy2pwya', e.target, 'IQrw8pCinj98N0BCk')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message, please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact container section">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">Don't like forms? Send me an email</p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" name="name" className="contact__form-input" placeholder='Insert your name' onChange={handleChange} required />
            </div>
            <div className="contact__form-div">
              <input type="email" name="email" className="contact__form-input" placeholder='Insert your email' onChange={handleChange} required />
            </div>
            <div className="contact__form-div">
              <input type="text" name="subject" className="contact__form-input" placeholder='Insert your subject' onChange={handleChange} required />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Write your message' onChange={handleChange} required></textarea>
            </div>
            <button className="btn" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
