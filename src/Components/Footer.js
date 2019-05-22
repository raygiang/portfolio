import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="page-wrapper flex-container">
        <a href="http://github.com/raygiang8" id="github-link" target="_blank" rel="noopener noreferrer">
          <i id="github-icon" class="fab fa-github">
            <div className="hidden">Github Link</div>
          </i>
        </a>
        <div id="contact-area"><i class="far fa-envelope" style={{fontSize: "25px", marginRight: "10px"}}/><a href="mailto:raymondgiang@gmail.com">raymondgiang@gmail.com</a></div>
        <div id="copyright">&copy; Raymond Giang 2019</div>
      </div>
    </footer>
  );
}

export default Footer;