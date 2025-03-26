import React, { useState } from 'react';
import Classrooms from './components/Classrooms';
import Contact from './components/Contact'; // Yeni eklenen bileşen
import Departments from './components/Department';
import Footer from './components/Footer'; // Footer bileşenini içe aktar
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return <Home />;
      case 'departments': return <Departments />;
      case 'classrooms': return <Classrooms />;
      case 'contact': return <Contact />; // Yeni eklenen case
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <main className="main-content">
        {renderContent()}
      </main>
      <Footer /> {/* Footer bileşenini ekle */}
    </div>
  );
}

export default App;