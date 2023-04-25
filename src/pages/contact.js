import React from "react";
import Layout from "../components/layout";
import "../styles/contactPage.css";

function ContactPage() {
  function handleEmailButtonClick() {
    window.location.href = "mailto:achung63@gatech.edu";
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
                Click here to send us an email
              </button>
            </label>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default ContactPage;


// import React from "react";
// import Layout from "../components/layout";
// import "../styles/contactPage.css";

// const ContactPage = () => {
//   const handleEmailButtonClick = () => {
//     window.location.href = "mailto:achung63@gatech.edu";
//   };

//   return (
//     <Layout> 
//       <div className="container-contact">
//       <main>
//           <div className="headingStyles">
//            <h1>
//               <span className="headingAccentStyles">Contact Us</span>
//              </h1>
//            </div>
//            <div className="centerStyles">
//              <label className="labelStyle">
//               <button
//                 className="button"
//                 type="button"
//                 onClick={handleEmailButtonClick}>
//                 Click here to send us an email!
//               </button>
//             </label>
//           </div>
//         </main>
//       </div>
//     </Layout>
//   );
// };

// export default ContactPage;

