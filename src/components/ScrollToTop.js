import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Outlet />
  );
}

export default ScrollToTop;
