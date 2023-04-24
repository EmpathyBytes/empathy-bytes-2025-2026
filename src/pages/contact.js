import React from "react";
import Layout from "../components/layout";
import "../styles/contactPage.css"; // Import CSS file for contactPage

const ContactPage = () => {
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:achung63@gatech.edu";
  };

  return (
    <div className="pageStyles">
      <Layout className="layoutStyles">
        <main>
          <div className="headingStyles">
            <h1>
              <span className="headingAccentStyles">Contact Us</span>
            </h1>
          </div>
          <div className="centerStyles">
            <label className="labelStyle">
              <button
                className="button"
                type="button"
                onClick={handleEmailButtonClick}
              >
                Click here to send us an email!
              </button>
            </label>
          </div>
        </main>
        <footer className="footerStyles">
        </footer>
      </Layout>
    </div>
  );
};

export default ContactPage;

