import React, { useState } from 'react';
import './contact.css'; // Import the CSS file

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        alert('Message sent successfully!');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.log('Failed to send message, please try again.');
        alert('Failed to send message, please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
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
              <input 
                type="text" 
                name="name" 
                className="contact__form-input" 
                placeholder='Insert your name' 
                value={formData.name}
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="contact__form-div">
              <input 
                type="email" 
                name="email" 
                className="contact__form-input" 
                placeholder='Insert your email' 
                value={formData.email}
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="contact__form-div">
              <input 
                type="text" 
                name="subject" 
                className="contact__form-input" 
                placeholder='Insert subject' 
                value={formData.subject}
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="contact__form-div">
              <textarea 
                name="message" 
                className="contact__form-input" 
                placeholder='Insert your message' 
                value={formData.message}
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="contact__form-button">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
