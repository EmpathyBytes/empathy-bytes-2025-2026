// This fixes the problem of links not going straight to the top of the page
import { useEffect } from "react";
import { useLocation } from "@reach/router"; // Gatsby equivalent of react-dom

const ScrollToTop = ({ delay = 300 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delay);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [pathname, 500]); // the delay (500) is IMPORTANT since it will occur after everything is loaded

  return null;
};

export default ScrollToTop;