import { useCallback } from "react";
import "./Window3Icon.css";

const Window3Icon = () => {
  const onWindow3ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <img
      className="window-3-icon"
      alt=""
      src="/window-3@2x.png"
      onClick={onWindow3ImageClick}
    />
  );
};

export default Window3Icon;
