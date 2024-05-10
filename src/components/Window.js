import { useContext, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import ImageMapper from "react-img-mapper";
import GameManager from "../managers/GameManager";

const Window = (props) => {
  const GameMan = useContext(GameManager);
  const imgRef = useRef();
  const [dimensions, setDimensions] = useState(props.config.dimensions);

  useEffect(() => {
    const element = imgRef?.current?.firstElementChild;
    element.setAttribute("draggable", false);
  }, [props.config.minimized]);

  function DragHandler() {
    props.onClick(props.config.layer);
  }

  function DragStopHandler(e, data) {
    props.onDragStop(props.index, data.x, data.y);
  }

  function regionClicked(area, index, e) {
    const title = area.title ?? null;
    if (title != null) {
      if (title.includes("--next")) {
        GameMan.nextScreen();
      } else if (title.includes("--previous")) {
        GameMan.previousScreen();
      } else if (title.includes("--hyperlink")) {
        window.open(area.url ?? "");
      }
    }
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
          }}
        >
          <ImageMapper
            src={props.config.src}
            containerRef={imgRef}
            width={dimensions.width}
            height={dimensions.height}
            responsive={true}
            onClick={regionClicked}
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
