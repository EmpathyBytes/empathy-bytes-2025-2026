// This fixes the problem of links not going straight to the top of the page
/**
 * A non-rendering component that manages window scroll position on navigation.
 * * This utility uses a slight delay (timeout) to ensure that the browser has 
 * finished rendering the new page content before attempting to scroll, 
 * preventing the scroll from being interrupted by layout shifts.
 * * @component
 * @param {Object} props - The component props.
 * @param {number} [props.delay=300] - The time in milliseconds to wait before scrolling to the top.
 * * @returns {null} This component does not render any UI elements.
 * * @example
 * // Place inside your Layout component:
 * <ScrollToTop delay={500} />
 */
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