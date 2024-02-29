import Window from "./Window";
import { useState } from "react";

const MIN_WINDOWS_PER_SCREEN = 3;

// props = {windows, setWindows, backgroundImage (path), backgroundStyle (top, left, width, height, ...)}

const Screen = (props) => {
  const [top, setTop] = useState(
    props.windows?.length ?? MIN_WINDOWS_PER_SCREEN
  );

  function ChangeScreenOrder(index) {
    const newOrder = props.windows;
    for (let i = 0; i < newOrder.length; i++) {
      if (newOrder[i].layer === index && newOrder[i].layer !== top) {
        newOrder[i].layer = top + 1;
        break;
      }
    }
    setTop(top + 1);
    props.setWindows(newOrder);
  }

  return (
    <div
      style={{
        width: "100%",
        height: props.backgroundStyle.height ?? 1080,
        position: "relative",
        backgroundColor: "white",
        overflow: "hidden",
        overscrollBehavior: "unset"
      }}
    >
      <img
        style={{
          // default values
          top: 0,
          left: 0,
          width: 1920,
          height: 1080,
          backgroundSize: "cover",
          objectFit: "cover",

          // custom values
          ...props.backgroundStyle,
        }}
        alt="Screen Background"
        src={props.backgroundImage}
        data-scroll-to="backgroundImage"
      />

      {props.windows.map((item, idx) => (
        <Window
          key={idx}
          layer={item.layer}
          dimensions={item.dimensions}
          src={item.src}
          className={item.className}
          onClick={ChangeScreenOrder}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Screen;
