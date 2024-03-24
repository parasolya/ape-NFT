import { useState, useEffect } from 'react';

function useScroll() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      } else {
        setIsTopOfPage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTopOfPage;
}

export default useScroll;