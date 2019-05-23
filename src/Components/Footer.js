import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="page-wrapper flex-container">
        <div className="footer-section">
          <a title="My Github" href="https://www.github.com/raygiang8" target="_blank" rel="noopener noreferrer">
            <i id="github-icon" className="fab fa-github"></i>
          </a>
          <a title="Email Me!" href="mailto:raymondgiang@gmail.com">
            <i id="mail-icon" className="far fa-envelope"></i>
          </a>      
        </div>
        <div className="footer-section">
          <div id="copyright">&copy; Raymond Giang 2019</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;