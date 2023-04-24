import React from "react";
import Layout from "../components/layout";
import "./contactPage.css"; // Import CSS file for contactPage

const contactPage = () => {
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:achung63@gatech.edu";
  };

  return (
    <div style={pageStyles}>
      <Layout style={layoutStyles}>
        <main>
          <div style={headingStyles}>
            <h1>
              <span style={headingAccentStyles}>Contact Us</span>
            </h1>
          </div>
          <div style={centerStyles}>
            <label style={labelStyle}>
              <button
                style={button}
                type="button"
                onClick={handleEmailButtonClick}
              >
                Click here to send us an email!
              </button>
            </label>
          </div>
        </main>
        <footer style={footerStyles}>
        </footer>
      </Layout>
    </div>
  );
};

export default contactPage;
