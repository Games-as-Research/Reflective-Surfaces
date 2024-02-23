import { useCallback } from "react";
import "./Window3Icon.css";
import Draggable from "react-draggable";

const Window3Icon = () => {
  const onWindow3ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <Draggable>
      <img
        className="window-3-icon"
        draggable="false"
        alt=""
        src="/window-3@2x.png"
        onClick={onWindow3ImageClick}
      />
    </Draggable>
  );
};

export default Window3Icon;
