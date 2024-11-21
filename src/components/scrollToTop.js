
import React, { useEffect } from "react";
import { useLocation } from "@reach/router";

const ScrollToTop = ({ delay = 300 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, delay);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [pathname, 500]);

  return null;
};

export default ScrollToTop;