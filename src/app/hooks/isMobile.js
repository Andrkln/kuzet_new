'use client'; 
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const match = window.matchMedia("(max-width: 900px)").matches;
      setIsMobile(match);
    };

    checkIfMobile(); // Initial check

    window.addEventListener('resize', checkIfMobile); // Listen to resize event

    return () => {
      window.removeEventListener('resize', checkIfMobile); // Cleanup on unmount
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
