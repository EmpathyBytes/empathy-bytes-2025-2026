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
            <img src={All} className="contact-full" alt="Empathy Bytes Team Photo, standing together smiling" />          </div>
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
                      key === "Alison" ? "VIP coordinator" : `${key} Team Lead`
                    }`}
                  </button>
                </label>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div id="info">
  <div className="info-section">
    <h1>Frequently Asked Questions</h1>
    <div className="container">
      <section aria-labelledby="faq-heading">
        <details>
          <summary aria-expanded="false" aria-controls="faq-1">
            How do I apply?
            <span aria-hidden="true"><i className="fa-solid fa-caret-down"></i></span>
          </summary>
          <div id="faq-1" role="region" aria-labelledby="faq-1-summary">
            <p>To register for a VIP at Georgia Tech as an undergraduate, please follow this link{" "}
              <a href="https://www.vip.gatech.edu/apply-undergraduate-students">
                https://www.vip.gatech.edu/apply-undergraduate-students
              </a>
            </p>
          </div>
        </details>
        
        <details>
          <summary aria-expanded="false" aria-controls="faq-2">
            Can I be on many teams?
            <span aria-hidden="true"><i className="fa-solid fa-caret-down"></i></span>
          </summary>
          <div id="faq-2" role="region">
            <p>Yes! If you want to be on more than one team per semester, make sure to pick the 2-3 credit option.</p>
          </div>
        </details>
        
        <details>
          <summary aria-expanded="false" aria-controls="faq-3">
            Is this for Georgia Tech students only?
            <span aria-hidden="true"><i className="fa-solid fa-caret-down"></i></span>
          </summary>
          <div id="faq-3" role="region">
            <p>Yes. Both master's and undergraduate students may apply.</p>
          </div>
        </details>
        
        <details>
          <summary aria-expanded="false" aria-controls="faq-4">
            Can I join as a freshman?
            <span aria-hidden="true"><i className="fa-solid fa-caret-down"></i></span>
          </summary>
          <div id="faq-4" role="region">
            <p>Students are eligible to apply beginning in their sophomore year.</p>
          </div>
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
  <title>Contact | Empathy Bytes VIP</title>
  <meta
      name="description"
      content="Get in touch with Empathy Bytes VIP team leads and coordinator. Find answers to frequently asked questions about applying to Georgia Tech's VIP program."
    />

  </>
  )
