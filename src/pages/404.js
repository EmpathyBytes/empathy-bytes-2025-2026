import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/inProgress.css";

// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const NotFoundPage = () => {
  // Workaround for 404 page not properly showing for deployed
  // Handles redirecting to /404 for any unmatched routes in production
  React.useEffect(() => {
      if (typeof window === "undefined") return;
      // if (process.env.NODE_ENV !== "production") return;

      // Opt-out per-request: add ?no-redirect=1 to skip redirect when needed
      const params = new URLSearchParams(window.location.search);
      if (params.get("no-redirect") === "1") return;

      // Avoid redirecting when we're already at the /404 page (or its HTML)
      const pathname = window.location.pathname || "/";
      if (
        pathname === "/404" ||
        pathname === "/404/" ||
        pathname === "/404.html"
      )
        return;

      // Redirect to the 404 page
      const target = `${window.location.origin}/404`;
      window.location.replace(target);
  }, []);

  return (
    <Layout>
    <main className="pageStyles">
      <h1 className="headingStyles">404 Page not found</h1>
      <p className="paragraphStyles">
        Sorry, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="codeStyles">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
