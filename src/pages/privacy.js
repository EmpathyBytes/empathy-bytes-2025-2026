import React from "react";
import Layout from "../components/layout";
import "../styles/contactPage.css";
import PrivacyPolicy from "../components/privacyPolicy";

function PrivacyPolicyPage() {

  return (
    <Layout>
      <PrivacyPolicy/>
    </Layout>
  );
}

export default PrivacyPolicyPage;

export const Head = () => (
  <>
  <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
  <title>Privacy Policy</title>
  </>
  )
