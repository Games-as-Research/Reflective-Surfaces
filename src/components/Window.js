import { useCallback } from "react";
import "./Window.css";
import Draggable from "react-draggable";


const Window = (props) => {
  const onWindowClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='backgroundImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <Draggable>
      <img
        className={props.className ?? "default"}
        draggable={props.draggable ?? "false"}
        alt={props.alt ?? ""}
        src={props.src}
        onClick={onWindowClick}
      />
    </Draggable>
  );
};

export default Window;
