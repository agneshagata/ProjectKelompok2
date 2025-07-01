import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlackholeLoader from './BlackholeLoader';

const RouteChangeLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 detik loading tiap ganti halaman

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) return <BlackholeLoader />;
  return children;
};

export default RouteChangeLoader;
