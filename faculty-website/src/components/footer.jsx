const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">Teknoloji Fakültesi</div>
            <p>
              İnovasyon odaklı eğitim anlayışıyla geleceğin teknoloji liderlerini yetiştiriyoruz.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Hızlı Linkler</h3>
            <ul>
              <li><a href="/">Anasayfa</a></li>
              <li><a href="./Department">Bölümler</a></li>
              <li><a href="./Classrooms">Derslikler</a></li>
              <li><a href="./Contact">İletişim</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>İletişim</h3>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Üniversite Mahallesi, Fakülte Caddesi No:123
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              info@fakulte.edu.tr
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              +90 212 123 45 67
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Teknoloji Fakültesi. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;