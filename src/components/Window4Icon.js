import { useCallback } from "react";
import "./Window4Icon.css";

const Window4Icon = () => {
  const onWindow4ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <img
      className="window-4-icon"
      loading="eager"
      alt=""
      src="/window-4@2x.png"
      onClick={onWindow4ImageClick}
    />
  );
};

export default Window4Icon;
