// src/theme/Zoom.js
import { useLocation } from "@docusaurus/router";
import mediumZoom from "medium-zoom";
import { useEffect } from "react";

export default function Zoom() {
  const location = useLocation();

  useEffect(() => {
    const zoom = mediumZoom(".markdown img", {
      background: getComputedStyle(document.documentElement).getPropertyValue(
        "--ifm-background-color"
      ),
    });

    return () => {
      zoom.detach();
    };
  }, [location]);

  return null;
}
