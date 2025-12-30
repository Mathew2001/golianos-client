import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1)); // safe
    let tries = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      // wait for Redux/sections to render
      tries += 1;
      if (tries < 30) requestAnimationFrame(tryScroll); // ~0.5 sec
    };

    requestAnimationFrame(tryScroll);
  }, [hash, pathname]);

  return null;
}
export default ScrollToHash;

