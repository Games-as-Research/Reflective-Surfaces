import { useCallback } from "react";
import "./Window1Icon.css";

const Window1Icon = () => {
  const onWindow1ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <img
      className="window-1-icon"
      alt=""
      src="/window-1@2x.png"
      onClick={onWindow1ImageClick}
    />
  );
};

export default Window1Icon;
