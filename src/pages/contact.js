import * as React from "react";
import Layout from "../components/layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  paddingTop: 180,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: "center",
  width: "100%",
};
const headingAccentStyles = {
  color: "#663399",
};

const button = {
  background: "#fff",
  borderRadius: "16px",
  padding: "16px 32px",
  width: "30vw",
  height: "1.5vw",
  margin: "1% auto",
  cursor: "pointer",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: "1.7vw",
  color: "#232129",
  textDecoration: "none",
  textAlign: "center",
  border: "3px solid navy",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const labelStyle = {
  fontFamily: "Roboto",
  fontSize: "1.7vw",
  marginBottom: "1%",
};

const contactPage = () => {
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:achung63@gatech.edu";
  };

  return (
    <div style={pageStyles}>
      <Layout>
        <main>
          <div style={headingStyles}>
            <h1>
              <span style={headingAccentStyles}>Contact Us</span>
            </h1>
          </div>
          <div style={{ textAlign: "center" }}>
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
      </Layout>
    </div>
  );
};

export default contactPage;
