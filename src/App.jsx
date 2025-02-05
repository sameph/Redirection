import React, { useEffect } from 'react';
import './App.css';
import logo from './assets/logo-min.png'; // Import the image

const App = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://www.brightfuturebroker.com";
    }, 4000);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="container">
      <img 
        src={logo} // Use the imported image
        alt="Bright Future Broker Logo" 
        className="logo" 
        style={{ width: '150px', marginBottom: '20px' }}
      />
      <h1>Bright Future Broker</h1>
      <h2>We've Moved!</h2>
      <p>
        Our website has a new home. You will be automatically redirected to our new domain in a few seconds.
      </p>
      <p>
        If you are not redirected, please{' '}
        <a href="https://www.brightfuturebroker.com" className="redirect-link">
          click here
        </a>{' '}
        to visit our new site.
      </p>
      <div className="loader"></div>
    </div>
  );
};

export default App;