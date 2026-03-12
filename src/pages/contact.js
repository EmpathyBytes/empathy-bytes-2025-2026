import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import All from "../images/people/fullTeam.jpg"
import "../styles/contactPage.css";

function ContactPage({data}) {
   const contacts = data.nodeContactPage.field_contact_items
  .map(item => {
    const clean = item.processed
      .replace(/<[^>]*>/g, "")   // remove HTML tags
      .replace(/&nbsp;/g, " ")   // remove html spaces
      .trim();

    const parts = clean.split("|");

    if (parts.length < 2) return null;

    return {
      role: parts[0].trim(),
      email: parts[1].trim()
    };
  })
  .filter(Boolean);

  const faqs = data.nodeContactPage.field_faq_items.map(item => {
    const html = item.processed;

    const cleanText = html.replace(/<[^>]*>/g, "").trim();
    const parts = cleanText.split("?");

    if (parts.length < 2) return null;

    const answerHtml = html
      .substring(html.indexOf("?") + 1)
      .replace(/^<\/p>/, "") // remove leftover closing p
      .replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');

    return {
      question: parts[0].trim() + "?",
      answer: answerHtml
    };
  }).filter(Boolean);

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
            {contacts.map((contact, index) => (
              <div className="centerStyles" key={index}>
                <label className="labelStyle">
                  <button
                    className="button"
                    type="button"
                    onClick={() => window.location.href = `mailto:${contact.email}`}
                  >
                    {`Contact our ${contact.role}`}
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
                <section>
                  {faqs.map((faq, index) => (
                    <details key={index}>
                      <summary>
                        {faq.question}
                        <span>
                          <i className="fa-solid fa-caret-down"></i>
                        </span>
                      </summary>

                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} /> 
                    </details>
                  ))}
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

export const query = graphql`
query ContactPageQuery {
  nodeContactPage {
    field_contact_items {
      processed
    }
    field_faq_items {
      processed
    }
  }
}
`;
