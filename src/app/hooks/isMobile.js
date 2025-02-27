'use client'
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
 
    return typeof window !== 'undefined' ? window.matchMedia("(max-width: 900px)").matches : false;
  });

  useEffect(() => {
    // Function to check if the screen is mobile
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 900px)").matches);
    };

    // Check on mount
    checkIfMobile();

    // Add resize event listener
    window.addEventListener('resize', checkIfMobile);

    return () => {
      // Clean up listener on unmount
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
