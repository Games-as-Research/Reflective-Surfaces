import { useCallback } from "react";
import "./Window2Icon.css";
import Draggable from "react-draggable";

const Window2Icon = () => {
  const onWindow2ImageClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <Draggable>
      <img
        className="window-2-icon"
        draggable="false"
        alt=""
        src="/window-2@2x.png"
        onClick={onWindow2ImageClick}
      />
    </Draggable>
  );
};

export default Window2Icon;
