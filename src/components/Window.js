import { useContext, useState } from "react";
import { Rnd } from "react-rnd";
import ImageMapper from "react-img-mapper";
import GameManager from "../managers/GameManager";

const Window = (props) => {
  const GameMan = useContext(GameManager);
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
          onResize={(e, d, l, t, p) => {
            setDimensions({
              ...dimensions,
              width: l.clientWidth,
              height: l.clientHeight,
            });
          }}
          default={{
            x: dimensions.left,
            y: dimensions.top,
            width: dimensions.width,
            height: dimensions.height,
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            objectFit: "cover",
            zIndex: props.config.layer,
            cursor: "pointer",

            // border: "1px solid white"
          }}
        >
          <ImageMapper
            src={props.config.src}
            width={dimensions.width}
            height={dimensions.height}
            responsive={true}
            onClick={GameMan.nextScreen}
            parentWidth={dimensions.width}
            map={
              props.config.map ?? {
                name: "",
                areas: [],
              }
            }
          />
          {/* <img
            src={props.config.src}
            draggable={false}
            style={{
              width: dimensions.width,
              height: dimensions.height,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          /> */}
        </Rnd>
      )}
    </>
  );
};

export default Window;
