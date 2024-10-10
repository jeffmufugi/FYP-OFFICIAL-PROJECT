import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    console.log("Pathname changed:", pathname); // Debug: check if pathname is changing
    // Use a small timeout to ensure the DOM has updated
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}

export default ScrollToTop;