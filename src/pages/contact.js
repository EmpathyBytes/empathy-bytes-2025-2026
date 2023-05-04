import React from "react";
import Layout from "../components/layout";
import "../styles/contactPage.css";

function ContactPage() {
  function handleEmailButtonClick() {
    window.location.href = "mailto:alison.valk@library.gatech.edu";
  }

  function handleEmailButtonClick2() {
    window.location.href = "mailto:mempel3@gatech.edu";
  }

  function handleEmailButtonClick3() {
    window.location.href = "mailto:troth7@gatech.edu";
  }

  function handleEmailButtonClick4() {
    window.location.href = "mailto:jacqueline7@gatech.edu";
  }

  function handleEmailButtonClick5() {
    window.location.href = "mailto:ecraven6@gatech.edu";
  }

  return (
    <Layout>
      <div className="container-contact">
        <main>
          <div className="headerStyles">
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
                Contact our VIP coordinator at alison.valk@library.gatech.edu
              </button>
            </label>
          </div>
          <div className="centerStyles">
            <label className="labelStyle">
              <button
                className="button"
                type="button"
                onClick={handleEmailButtonClick2}
              >
                Contact our App Team lead to learn more about Empathy Bytes' app
              </button>
            </label>
          </div>
          <div className="centerStyles">
            <label className="labelStyle">
              <button
                className="button"
                type="button"
                onClick={handleEmailButtonClick3}
              >
                Contact our Media Team lead if you're interested in being interviewed or 
                want to learn more about the Media Team's work
              </button>
            </label>
          </div>
          <div className="centerStyles">
            <label className="labelStyle">
              <button
                className="button"
                type="button"
                onClick={handleEmailButtonClick4}
              >
                Contact our VR Team lead to learn more about Empathy Bytes' VR work
              </button>
            </label>
          </div>
          <div className="centerStyles">
            <label className="labelStyle">
              <button
                className="button"
                type="button"
                onClick={handleEmailButtonClick5}
              >
                Contact our Web Team lead to learn more about Empathy Bytes' website
              </button>
            </label>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default ContactPage;

