import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://www.brightfuturebroker.com";
    }, 4000);
  }, []);

  return (
    <div className="container">
      <img src="path/to/logo.png" alt="Bright Future Broker Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h1>Bright Future Broker</h1>
      <h2>We've Moved!</h2>
      <p>Our website has a new home. You will be automatically redirected to our new domain in a few seconds.</p>
      <p>If you are not redirected, please <a href="https://www.brightfuturebroker.com">click here</a> to visit our new site.</p>
      <div className="loader"></div>
    </div>
  );
}

export default App;
