import { Award, BookOpen, Clock, GraduationCap, Microscope, Users } from 'lucide-react';
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { facultyInfo } from '../data/facultyData';

// Import images directly
import bulusmaImage from '../assets/buluşma.jpg';
import mcbuImage from '../assets/mcbu.jpg';
import okulImage from '../assets/okulI.jpg';

// Modal için gerekli ayar
ReactModal.setAppElement('#root');

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { 
      src: okulImage, 
      alt: "Megan Patch Youngly",
      caption: "Megan Patch Youngly"
    },
    { 
      src: mcbuImage, 
      alt: "Mezuniyet Forenimiz",
      caption: "Mezuniyet Forenimiz"
    },
    { 
      src: bulusmaImage, 
      alt: "Manis Marisa Por Bar",
      caption: "Manis Marisa Por Bar"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{facultyInfo.home.title}</h1>
          <p className="hero-subtitle">{facultyInfo.home.description}</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <Users className="stat-icon" />
              <div>
                <span className="stat-number">{facultyInfo.home.stats.students}+</span>
                <span className="stat-label">Öğrenci</span>
              </div>
            </div>
            
            <div className="stat-card">
              <GraduationCap className="stat-icon" />
              <div>
                <span className="stat-number">{facultyInfo.home.stats.facultyMembers}</span>
                <span className="stat-label">Akademisyen</span>
              </div>
            </div>
            
            <div className="stat-card">
              <Microscope className="stat-icon" />
              <div>
                <span className="stat-number">{facultyInfo.home.stats.labs}</span>
                <span className="stat-label">Laboratuvar</span>
              </div>
            </div>
            
            <div className="stat-card">
              <Clock className="stat-icon" />
              <div>
                <span className="stat-number">{facultyInfo.home.stats.established}</span>
                <span className="stat-label">Kuruluş</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geliştirilmiş Galeri Bölümü */}
      <div className="gallery-section">
        <h2 className="section-title">Galeri</h2>
        <p className="section-subtitle">Fakültemizden en güzel anlar</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image" 
              />
              <div className="image-caption">{image.caption}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <h2 className="section-title">Fakülte Öne Çıkanlar</h2>
        
        <div className="highlights-grid">
          {facultyInfo.home.highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">
                {index === 0 && <Award className="icon" />}
                {index === 1 && <BookOpen className="icon" />}
                {index === 2 && <GraduationCap className="icon" />}
                {index === 3 && <Microscope className="icon" />}
              </div>
              <h3 className="highlight-title">{highlight}</h3>
              <p className="highlight-description">
                {index === 0 && "ABET akreditasyonlu mühendislik programları ile uluslararası standartlarda eğitim"}
                {index === 1 && "Sanayi işbirlikleriyle gerçek dünya problemlerine çözüm odaklı eğitim"}
                {index === 2 && "80+ üniversite ile Erasmus ve değişim programları"}
                {index === 3 && "Girişimcilik ve inovasyon merkezi ile startup destekleri"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ReactModal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        className="modal"
        overlayClassName="overlay"
        closeTimeoutMS={200}
      >
        {selectedImage && (
          <div className="modal-content">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="modal-image"
            />
            <p className="modal-caption">{selectedImage.caption}</p>
            <button 
              onClick={() => setSelectedImage(null)}
              className="modal-close"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default Home;