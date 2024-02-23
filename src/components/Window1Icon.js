import { useCallback } from "react";
import "./Window1Icon.css";
import Draggable from "react-draggable";

const Window1Icon = () => {
  const onWindow1ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <Draggable>
      <img
        className="window-1-icon"
        draggable="false"
        alt=""
        src="/window-1@2x.png"
        onClick={onWindow1ImageClick}
      />
    </Draggable>
  );
};

export default Window1Icon;
