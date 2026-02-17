import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });

    // Remove hash after scroll
    setTimeout(() => {
      navigate(pathname, { replace: true });
    }, 300); // match scroll timing
  }, [hash, pathname, navigate]);

  return null;
}