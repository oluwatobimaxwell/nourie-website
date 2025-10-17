import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that section
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // No hash → always scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]); // Only re-run when the route (not just hash) changes

  return null;
}