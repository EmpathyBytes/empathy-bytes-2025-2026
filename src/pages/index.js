import * as React from "react"
import Layout from "../components/layout"

const topPadding = {
  padding: "10% 5% 10% 5%",
};

function IndexPage() {
  return (
    <Layout>
      <div style={topPadding}>
        <h1>Welcome to EmpathyBytes!</h1>
        <a href="/articles/meeting2/">Click to See the Article Page from Drupal</a>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>