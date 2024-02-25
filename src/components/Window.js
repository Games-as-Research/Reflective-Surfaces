import Draggable from "react-draggable";
import { useState } from "react";

const Window = (props) => {
  const [click, setClick] = useState(true);

  function DragHandler() {
    setClick(false);
    props.onClick(props.index);
  }
  function ClickHandler() {
    if (click) {
      OpenLink();
    }
    setClick(true);
  }
  function OpenLink() {
    if (props.link) {
      window.open(props.link);
    }
  }

  return (
    <Draggable onDrag={DragHandler} onStop={ClickHandler}>
      <img
        draggable={"false"}
        style={{
          zIndex: props.index,
          position: "absolute",
          cursor: "pointer",
          objectFit: "cover",
          ...props.dimensions,
        }}
        alt={props.alt ?? ""}
        src={props.src}
      />
    </Draggable>
  );
};

export default Window;
