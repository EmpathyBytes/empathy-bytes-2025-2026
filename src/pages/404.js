import * as React from "react"
import { Link } from "gatsby"
import "../styles/inProgress.css";

const NotFoundPage = () => {
  return (
    <main className="pageStyles">
      <h1 className="headingStyles">Page not found</h1>
      <p className="paragraphStyles">
        Sorry 😔, we couldn’t find what you were looking for.
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
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
