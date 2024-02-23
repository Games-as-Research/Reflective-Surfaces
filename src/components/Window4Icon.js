import { useCallback } from "react";
import "./Window4Icon.css";
import Draggable from "react-draggable";

const Window4Icon = () => {
  const onWindow4ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <Draggable>
      <img
        className="window-4-icon"
        draggable="false"
        loading="eager"
        alt=""
        src="/window-4@2x.png"
        onClick={onWindow4ImageClick}
      />
    </Draggable>
  );
};

export default Window4Icon;
