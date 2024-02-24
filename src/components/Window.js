import "./Window.css";
import Draggable from "react-draggable";
import { useState } from "react";

const Window = (props) => {
  const [click, setClick] = useState(true);
  function OpenLink() {
    if (props.link) {
      window.open(props.link);
    }
  }

  return (
    <Draggable
      onDrag={() => {
        setClick(false);
        props.onClick(props.index);
      }}
      onStop={() => {
        if (click) {
          OpenLink();
        }
        setClick(true);
      }}
    >
      <img
        className={props.className ?? "default"}
        draggable={props.draggable ?? "false"}
        style={{ zIndex: props.index }}
        alt={props.alt ?? ""}
        src={props.src}
      />
    </Draggable>
  );
};

export default Window;
