import { useCallback } from "react";
import "./Window2Icon.css";

const Window2Icon = () => {
  const onWindow2ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <img
      className="window-2-icon"
      alt=""
      src="/window-2@2x.png"
      onClick={onWindow2ImageClick}
    />
  );
};

export default Window2Icon;
