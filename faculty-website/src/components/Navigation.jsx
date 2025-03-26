import { Building2, ChevronDown, Contact, Home, Menu, Users, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Daha güvenli navItems tanımı
  const navItems = [
    {
      label: 'Anasayfa',
      section: 'home',
      icon: <Home size={18} />,
      dropdown: null
    },
    {
      label: 'Bölümler',
      section: 'departments',
      icon: <Building2 size={18} />,
      dropdown: [
        { label: 'Bilgisayar Mühendisliği', section: 'computer' },
        { label: 'Elektrik-Elektronik', section: 'electrical' },
        { label: 'Makine Mühendisliği', section: 'mechanical' }
      ]
    },
    {
      label: 'Derslikler',
      section: 'classrooms',
      icon: <Users size={18} />,
      dropdown: [
        { label: 'Amfiler', section: 'amphitheaters' },
        { label: 'Laboratuvarlar', section: 'labs' },
        { label: 'Seminer Salonları', section: 'seminar' }
      ]
    },
    {
      label: 'İletişim',
      section: 'contact',
      icon: <Contact size={18} />,
      dropdown: null
    }
  ];

  const handleNavigation = (section) => {
    try {
      setActiveSection(section);
      navigate(`/${section}`);
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback to home if navigation fails
      navigate('/');
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div 
          className="nav-logo" 
          onClick={() => handleNavigation('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavigation('home')}
        >
          <span className="nav-logo-icon">🏛️</span>
          <span>HASAN FERDİ TEKNOLOJİ FAKÜLTESİ</span>
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <div key={item.section} className="nav-item">
              <div 
                className={`nav-link ${activeSection === item.section ? 'active' : ''}`}
                onClick={() => !item.dropdown && handleNavigation(item.section)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => !item.dropdown && e.key === 'Enter' && handleNavigation(item.section)}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.dropdown && <ChevronDown className="chevron" size={16} />}
              </div>
              
              {item.dropdown && (
                <div className="dropdown-menu">
                  {item.dropdown.map((subItem, index) => (
                    <React.Fragment key={subItem.section}>
                      <div 
                        className="dropdown-item"
                        onClick={() => handleNavigation(subItem.section)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleNavigation(subItem.section)}
                      >
                        {subItem.label}
                      </div>
                      {index !== item.dropdown.length - 1 && (
                        <div className="dropdown-divider" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;