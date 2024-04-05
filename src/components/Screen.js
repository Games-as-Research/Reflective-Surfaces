import MacMenuBar from "./MacMenuBar";
import Taskbar10 from "./Taskbar10";
import Window from "./Window";
import { useState } from "react";

const MIN_WINDOWS_PER_SCREEN = 3;

// props = {windows, setWindows, OS ("10", "11"), backgroundImage (path)}
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
    <>
      {props.OS !== "10" && props.OS !== "11" ? <MacMenuBar /> : null}
      <img
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          backgroundSize: "cover",
          objectFit: "cover",
          overflow: "auto",
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
      {props.OS === "10" ? <Taskbar10 /> : props.OS === "11" ? null : null}
    </>
  );
};

export default Screen;
