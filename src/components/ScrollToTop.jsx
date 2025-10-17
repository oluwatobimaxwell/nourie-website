// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the route has a hash (#section), scroll to that section instead
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return;
      }
    }

    // Otherwise, scroll to top normally
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100);
  }, [pathname, hash]);

  return null;
}