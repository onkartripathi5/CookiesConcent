import React from 'react';
import CookieConsent from './CookieConsent';

function App() {
  const handleAccept = () => {
    console.log('Accept');
  };

  const handlePersonalize = () => {
    console.log('Personalize');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my website</h1>
      </header>
      <main>
        <p>This is the main content of my website.</p>
      </main>
      <CookieConsent onAccept={handleAccept} onPersonalize={handlePersonalize} />
    </div>
  );
}

export default App;
