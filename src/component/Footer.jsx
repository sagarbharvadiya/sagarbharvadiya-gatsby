import React, { useState, useEffect } from 'react';
const Footer = () => {
  const [text, setText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const fullText = 'Bharvadiya';
  const repeatCount = 5; // Set the desired number of repetitions

  useEffect(() => {
    if (currentCharIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex]);

  useEffect(() => {
    if (currentCharIndex === fullText.length && repeatCount > 1) {
      const timeout = setTimeout(() => {
        setText('');
        setCurrentCharIndex(0);
      }, 4000); // Set a delay of 1 second before restarting

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, repeatCount]);

  return (
    <footer id="footer">
      <div className="container">
        {currentCharIndex < fullText.length ? (
          <h3>Sagar{text}</h3>
        ) : (
          <h3>Sagar Bharvadiya</h3>
        )}
        {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
        <div className="social-links">
          <a href="https://github.com/sagarbharvadiya/" rel="noreferrer" target="_blank" className="github"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/sagar__yadav__dwarka" rel="noreferrer" target="_blank" className="instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://join.skype.com/invite/wndzoaqlmJUE" rel="noreferrer" target="_blank" className="google-plus"><i className="fa-brands fa-skype"></i></a>
          <a href="https://www.linkedin.com/in/sagar-bharvadiya-dwarka/" rel="noreferrer" target="_blank" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="copyright">
          &copy; Copyright
          <strong><span>sagar</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by  <span>Sagar Bharvadiya</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
