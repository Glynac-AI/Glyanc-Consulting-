import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RedirectHandler = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if there's a redirect query parameter
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter from the URL
      urlParams.delete('redirect');
      const newSearch = urlParams.toString();
      const newPath = redirectPath + (newSearch ? `?${newSearch}` : '');
      
      // Navigate to the correct path
      navigate(newPath, { replace: true });
    }
  }, [location.search, navigate]);

  return <>{children}</>;
};

export default RedirectHandler; 