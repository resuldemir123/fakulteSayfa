import {
  BookOpen,
  Building2,
  ChevronRight,
  Contact,
  Home,
  Users
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  
  const navItems = [
    { icon: Home, section: 'home', label: 'Anasayfa' },
    { icon: Building2, section: 'departments', label: 'Bölümler' },
    { icon: Users, section: 'classrooms', label: 'Derslikler' },
    { icon: BookOpen, section: 'programs', label: 'Programlar' },
    { icon: Contact, section: 'contact', label: 'İletişim' }
  ];

  const handleNavigation = (section) => {
    setActiveSection(section);
    navigate(`/${section}`);
  };

  return (
    <nav className={`navigation ${expanded ? 'expanded' : ''}`}>
      <button 
        className="toggle-btn"
        onClick={() => setExpanded(!expanded)}
      >
        <ChevronRight className={`toggle-icon ${expanded ? 'rotated' : ''}`} />
      </button>
      
      <div className="navigation-logo" onClick={() => handleNavigation('home')}>
        {expanded ? 'TEKNOLOJİ FAKÜLTESİ' : 'TF'}
      </div>
      
      <div className="nav-items-container">
        {navItems.map(({ icon: Icon, section, label }) => (
          <button
            key={section}
            onClick={() => handleNavigation(section)}
            className={`nav-button ${activeSection === section ? 'active' : ''}`}
            aria-label={label}
          >
            <Icon className="nav-icon" />
            {expanded && <span className="nav-label">{label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;