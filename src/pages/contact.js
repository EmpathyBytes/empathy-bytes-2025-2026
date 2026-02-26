import React from "react";
import Layout from "../components/layout";
import All from "../images/people/fullTeam.jpg"
import "../styles/contactPage.css";

function ContactPage() {
  // Define email handlers as an object
  const emailHandlers = {
    Alison: "alison.valk@library.gatech.edu",
    App: "vchoi3@gatech.edu",
    VR: "vtran22@gatech.edu",
    Media: "aroemer3@gatech.edu",
    Website: "msharma343@gatech.edu",
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
            <div class="container">
                <section>
                    <details>
                        <summary>How do I apply?<span><i className="fa-solid fa-caret-down"></i></span></summary>
                        <p>
                            To register for a VIP at Georgia Tech as an undergraduate, please follow the
                            instructions on the <a href="https://www.vip.gatech.edu/apply-undergraduate-students"
                                                   target="_blank" rel="noopener noreferrer">
                            official VIP application page</a>. We welcome students from all backgrounds!
                        </p>
                    </details>

                    <details>
                        <summary>Can I be on many teams?<span><i className="fa-solid fa-caret-down"></i></span>
                        </summary>
                        <p>
                            Yes! If you want to be on more than one sub-team per semester, make sure to
                            register for the 2-3 credit hour option to account for the additional project work.
                        </p>
                    </details>

                    <details>
                        <summary>Is this for Georgia Tech students only?<span><i className="fa-solid fa-caret-down"></i></span>
                        </summary>
                        <p>
                            Yes, Empathy Bytes is currently open to both undergraduate and graduate
                            students enrolled at Georgia Tech.
                        </p>
                    </details>

                    <details>
                        <summary>Can I join as a freshman?<span><i className="fa-solid fa-caret-down"></i></span>
                        </summary>
                        <p>
                            While we appreciate the early interest, we recommend students wait until
                            their sophomore year to join the VIP.
                        </p>
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
        <title>Contact Us | Empathy Bytes VIP</title>
        <meta name="description" content="Have questions about Empathy Bytes? Contact our VIP coordinator or sub-team leads to learn how you can join our research at Georgia Tech." />
    </>
)
