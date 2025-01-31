import React from 'react';
import '../../styles/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-name">Onda ODEAI</p>
      </div>
      <div className="footer-center">
        <p className="footer-text">Feito por @UFBA Todos os direitos reservados</p>
      </div>
      <div className="footer-right">
        <a
          href="https://www.instagram.com/panafroindigena_ufba?igsh=MTloaXl6b2h6NWVseg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://paulregnier.wordpress.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fas fa-blog"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
