import * as React from "react";
import Layout from "../components/layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  paddingTop: 180,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};

const button = {
  background: "#fff",
  borderRadius: "4px", // Update border radius for a more rounded shape
  padding: "8px 16px", // Update padding for better spacing
  width: "15vw",
  height: "1.5vw",
  margin: "1%",
  border: "none", // Remove default button border
  cursor: "pointer", // Add cursor pointer for hover effect
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
    <div>
      <Layout>
        <main style={pageStyles}>
          <div className="row">
            <div className="column" width="50%">
              <h1 style={headingStyles}>
                <span style={headingAccentStyles}>Contact Us</span>
              </h1>
              <div>insert image of team here</div>
            </div>
            <div className="column">
              <label style={labelStyle}>
                Email <br />
                <button
                  style={button}
                  type="button"
                  onClick={handleEmailButtonClick}
                >
                  Contact via Email
                </button>
              </label>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default contactPage;



// import * as React from "react";
// // import "../styles.css";
// // import NavBar from "../components/navbar";
// import Layout from "../components/layout";

// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   paddingTop: 180,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// };
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// };
// const headingAccentStyles = {
//   color: "#663399",
// };

// const button = {
//   background: "#fff",
//   borderRadius: "1%",
//   padding: "1%",
//   width: "15vw",
//   height: "1.5vw",
//   margin: "1%",
// };

// const labelStyle = {
//   fontFamily: "Roboto",
//   fontSize: "1.7vw",
//   marginBottom: "1%",
// };

// const contactPage = () => {
//   return (
//     <div>
//       <Layout>
//       <main style={pageStyles}>
//         <div class="row">
//           <div class="column" width="50%">
//             <h1 style={headingStyles}>
//               <span style={headingAccentStyles}>Contact Us</span>
//             </h1>
//             <div>insert image of team here</div>
//           </div>
//           <div class="column">
//             <form method="post" action="mailto: audreychung10@gmail.com">
//               <label style={labelStyle}>
//                 Name <br />
//                 <input style={button} type="text" name="name" id="name" />
//               </label>
//               <br />
//               <label style={labelStyle}>
//                 Email <br />
//                 <input style={button} type="email" name="email" id="email" />
//               </label>
//               <br />
//               <label style={labelStyle}>
//                 Subject <br />
//                 <input style={button} type="text" name="subject" id="subject" />
//               </label>
//               <br />
//               <label style={labelStyle}>
//                 Message <br />
//                 <textarea name="message" id="message" rows="5" />
//               </label>
//               <br />
//               <button type="submit">Send</button>
//               <button type="reset">Clear</button>
//             </form>
//           </div>
//         </div>
//         <div></div>
//       </main>
//       </Layout>
//     </div>
//   );
// };

// export default contactPage;
// //export default contactBox;
