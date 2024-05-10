import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

const Window = (props) => {
  const [dimensions, setDimensions] = useState(props.config.dimensions);

  function DragHandler() {
    props.onClick(props.config.layer);
  }

  function DragStopHandler(e, data) {
    props.onDragStop(props.index, data.x, data.y);
  }

  return (
    <>
      {props.config.minimized ? null : (
        <Rnd
          lockAspectRatio={true}
          onDragStart={DragHandler}
          onDragStop={DragStopHandler}
          default={{
            x: dimensions.left,
            y: dimensions.top,
            width: dimensions.width,
            height: dimensions.height,
          }}
          style={{
            background: `url(${props.config.src})`,
            backgroundSize: "contain",
            objectFit: "cover",
            cursor: "pointer",
            backgroundRepeat: "no-repeat",
            zIndex: props.config.layer,
          }}
        />
      )}
    </>
  );
};

export default Window;
