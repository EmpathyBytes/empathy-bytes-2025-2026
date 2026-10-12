import React from 'react';
/**
 * Renders an full-screen iframe containing the Privacy Policy PDF.
 * * This component utilizes a direct link to the Drupal file system 
 * (empathybytes.library.gatech.edu) to ensure the document is always 
 * up-to-date with the latest version uploaded by administrators.
 * * @component
 * @returns {JSX.Element} An iframe spanning the full viewport width and height.
 */

function PrivacyPolicy() {
  return (
        <iframe 
            src="https://empathybytes.library.gatech.edu/sites/default/files/2024-12/privacyPolicy.pdf" //pulling from privacy policy, which is stored in Drupal
            width="100vw" 
            height="100vh" 
            title="Privacy Policy"
        />
  );
}

export default PrivacyPolicy;