import { Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-container">
      <h1 className="section-title">İletişim</h1>
      
      <div className="contact-grid">
        {/* İletişim Bilgileri */}
        <div className="contact-info">
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <h3>Adres</h3>
              <p>Üniversite Mahallesi, Fakülte Caddesi No:123, İstanbul</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <h3>Telefon</h3>
              <p>+90 212 123 45 67</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>iletisim@fakulte.edu.tr</p>
            </div>
          </div>
        </div>
        
        {/* İletişim Formu */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Adınız Soyadınız</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Adresiniz</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            <Send className="btn-icon" /> Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;