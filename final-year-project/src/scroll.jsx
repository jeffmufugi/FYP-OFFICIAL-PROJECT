import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return <div ref={pageRef}>{/* Your page content here */}</div>;
}

export default ScrollToTop;