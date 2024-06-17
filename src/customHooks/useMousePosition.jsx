import { useState, useEffect } from "react";
export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  function updateMousePosition(ev) {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
