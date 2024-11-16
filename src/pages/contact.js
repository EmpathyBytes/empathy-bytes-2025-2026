import React from "react";
import Layout from "../components/layout";
import All from "../images/people/fullTeam.jpg"
import "../styles/contactPage.css";

function ContactPage() {
  // Define email handlers as an object
  const emailHandlers = {
    Alison: "alison.valk@library.gatech.edu",
    App: "mempel3@gatech.edu",
    VR: "troth7@gatech.edu",
    Media: "jacqueline7@gatech.edu",
    Website: "ecraven6@gatech.edu",
  };

  // Handle email button click
  const handleEmailButtonClick = (emailKey) => {
    window.location.href = `mailto:${emailHandlers[emailKey]}`;
  };

  return (
    <Layout>
      <div className="container-contact">
        <main>
          <div className="top-contact dim"></div>
          <div className="bottom-contact">
            <img src={All} className="contact-full"></img>
          </div>
          <div className="headerStyles">
            <h1>
              <span className="centerStyles">Interested in Learning More About Empathy Bytes?</span>
            </h1>
          </div>
          <div className="button-container">
            {Object.keys(emailHandlers).map((key) => (
              <div className="centerStyles" key={key}>
                <label className="labelStyle">
                  <button
                    className="button"
                    type="button"
                    onClick={() => handleEmailButtonClick(key)}
                  >
                    {`Contact our ${
                      key === "Alison" ? "VIP coordinator" : `Team Lead for ${key}`
                    }`}
                  </button>
                </label>
              </div>
            ))}
          </div>
          {/* <div className="centerStyles">
            <label className="labelStyle">
              <a href="#info">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </a>
            </label>
          </div> */}
        </main>
      </div>
      <div id="info">
        <div className="info-section">
          <h1>Frequently Asked Questions</h1>
          <div class="container">
            <section>
              <details>
                <summary>How do I apply?<span><i class="fa-solid fa-caret-down"></i></span></summary>
                <p>To register for a VIP at Georgia Tech as an undergraduate, please follow this link{" "} <a href="https://www.vip.gatech.edu/apply-undergraduate-students">
              https://www.vip.gatech.edu/apply-undergraduate-students
            </a></p>
              </details>
              <details>
                <summary>Can I be on many teams?<span><i class="fa-solid fa-caret-down"></i></span></summary>
                <p>Yes! If you want to be on more than one team per semester, make sure to pick the 2-3 credit option.</p>
              </details>
              <details>
                <summary>Is this for Georgia Tech students only?<span><i class="fa-solid fa-caret-down"></i></span></summary>
                <p>Yes. Masters and undergrads.</p>
              </details>
              <details>
                <summary>Can I join as a freshman?<span><i class="fa-solid fa-caret-down"></i></span></summary>
                <p>Please wait until your Sophomore year.</p>
              </details>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;

export const Head = () => (
  <>
  <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
  <title>Contact</title>
  </>
  )
