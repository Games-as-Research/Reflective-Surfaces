import MacMenuBar from "./MacMenuBar";
import Taskbar10 from "./Taskbar10";
import Taskbar11 from "./Taskbar11";
import Window from "./Window";
import { useState } from "react";
import "../stylesheets/Screen.css";
import MacDock from "./MacDock";

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
    <div className="screen-container">
      {props.OS !== "10" && props.OS !== "11" ? <MacMenuBar /> : null}
      <img
        className="background-image"
        style={{
          height: props.OS ? "95vh" : "97vh",
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
      {props.OS ? (
        props.OS === "10" ? (
          <Taskbar10 />
        ) : (
          <Taskbar11 />
        )
      ) : (
        <MacDock icons={props.dock_icons} />
      )}
    </div>
  );
};

export default Screen;
