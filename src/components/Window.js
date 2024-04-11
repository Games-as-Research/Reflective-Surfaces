import { useState } from "react";
import { Rnd } from "react-rnd";

const Window = (props) => {
  const [click, setClick] = useState(true);

  function DragHandler() {
    setClick(false);
    props.onClick(props.layer);
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
    <Rnd
      // bounds={"parent"}
      onDragStart={DragHandler}
      lockAspectRatio={true}
      default={{
        x: props.dimensions.left,
        y: props.dimensions.top,
        width: props.dimensions.width,
        height: props.dimensions.height,
      }}
      style={{
        background: `url(${props.src})`,
        backgroundSize: "contain",
        objectFit: "cover",
        cursor: "pointer",
        backgroundRepeat: "no-repeat",
        top: props.dimensions.top,
        left: props.dimensions.left,
        zIndex: props.layer,
      }}
    />
  );
};

export default Window;
