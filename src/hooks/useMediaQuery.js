

import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const handleResize = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;