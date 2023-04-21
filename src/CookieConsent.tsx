import React, { useEffect, useState } from 'react';
import ToggleableSubheading from './ToggleSubheading';

interface CookieConsentProps {
  onAccept: () => void;
  onPersonalize: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onPersonalize }) => {
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const handleFunctionalCookies = localStorage.getItem('handleFunctionalCookies');
const performanceCookiesAllowed = localStorage.getItem('performanceCookiesAllowed');
const handleAdvertisingCookies = localStorage.getItem('handleAdvertisingCookies');

 
if (cookiesAccepted === 'true' || performanceCookiesAllowed === 'true' || handleAdvertisingCookies === 'true' || handleFunctionalCookies === 'true') {
  setShowBanner(false);
  setShowPreferenceCenter(false);
}else{
  setShowBanner(true);
}
}, []);

  const [showBanner, setShowBanner] = useState(false);

  const [showPreferenceCenter, setShowPreferenceCenter] = useState(false);

  const handleAccept = () => {
    setShowBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
    onAccept();
    const cookies = document.cookie.split("; ");
    cookies.forEach(cookie => {
      const [name, value] = cookie.split("=");
      localStorage.setItem(name, value);
    });
  };

  const handlePersonalize = () => {
    setShowBanner(false);
    setShowPreferenceCenter(true);
  };

  const handleAllowAll = () => {
    setShowPreferenceCenter(false);
    localStorage.setItem('cookiesAccepted', 'true');
    const cookies = document.cookie.split("; ");
    if (cookies.length > 0) {
      cookies.forEach(cookie => {
        const [name, value] = cookie.split("=");
        localStorage.setItem(name, value);
      });
    }
  };
  

  const handlePerformanceCookies = () => {
    setShowPreferenceCenter(false);
    setShowBanner(false);
    localStorage.setItem('performanceCookiesAllowed', 'true');
  };
  const handleFunctionalCookies = () => {
    setShowPreferenceCenter(false);
    setShowBanner(false);
    localStorage.setItem('handleFunctionalCookies', 'true');
  };

  const handleAdvertisingCookies = () => {
    setShowPreferenceCenter(false);
    setShowBanner(false);
    localStorage.setItem('handleAdvertisingCookies', 'true');
  };

  const performanceCookiesAllowed = localStorage.getItem('performanceCookiesAllowed') === 'true';

  if (performanceCookiesAllowed) {
  
  }

  return (
    <>
      {showBanner && (
        <div style={{ backgroundColor: '#EFEFEF', padding: '10px', position: 'fixed', top: '20%', left: '50%', transform: 'translate(-5cm, -2.5cm)', width: '10cm', height: '5cm', zIndex: 1000 }}>
          <p style={{ fontSize: '12px', marginBottom: '10px' }}>
            We and our partners use tracking devices to measure the audience of our website, provide you with offers and advertising tailored to your interests, and to enable interactive social platform features such as share buttons.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px' }} onClick={handleAccept}>Accept</button>
            <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px', marginLeft: '10px' }} onClick={handlePersonalize}>Personalize my choices</button>
          </div>
        </div>
      )}

      {showPreferenceCenter && (
        <div style={{ backgroundColor: '#EFEFEF', padding: '10px', position: 'fixed', top: '20%', left: '50%', transform: 'translate(-5cm, -2.5cm)', width: '10cm', height: '5cm', zIndex: 1000 }}>
          <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Privacy Preference Center</h2>
          <p style={{ fontSize: '12px', marginBottom: '10px' }}>
            When you visit any web site, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device. We have provided a simple tool below to accept or refuse them as you wish.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px' }} onClick={handleAllowAll}>Allow All</button>
          </div>
          <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>Manage Consent Preferences</h2>
          <div>
      <ToggleableSubheading title="Performance Cookies" value={true}>
        <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site</p>
      </ToggleableSubheading>
      <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px' }} onClick={handlePerformanceCookies}>Allow Performance Cookies</button>
    </div>
    <div>
      <ToggleableSubheading title="Functional Cookies" value={true}>
        <p>These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.    If you do not allow these cookies then some or all of these services may not function properly.</p>
      </ToggleableSubheading>
      <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px' }} onClick={handleFunctionalCookies}>Allow Functional Cookies</button>
    </div>
    <div>
      <ToggleableSubheading title="Advertising Cookies" value={true}>
        <p>These cookies may be set through our site by us and our advertising partners to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, selecting advertisements that are based on your interests and measuring the number of ads displayed and their performance, such as how many people clicked on a given ad. These trackers are also used to measure and improve the effectiveness of our marketing campaigns on third party sites or apps. They may be used by partners to build a profile of your interests and show you relevant adverts on other sites. If you do not allow these cookies, the ads may be less relevant to your interests.</p>
      </ToggleableSubheading>
      <button style={{ backgroundColor: '#0070F3', color: '#FFFFFF', padding: '10px 40px', borderRadius: '5px' }} onClick={handleAdvertisingCookies}>Allow Advertising Cookies</button>
    </div>

        </div>
      )}
    </>
  );
};

export default CookieConsent;
