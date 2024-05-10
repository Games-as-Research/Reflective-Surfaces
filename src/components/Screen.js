import MacMenuBar from "./MacMenuBar";
import Taskbar10 from "./Taskbar10";
import Taskbar11 from "./Taskbar11";
import Window from "./Window";
import { useState } from "react";
import "../stylesheets/Screen.css";
import MacDock from "./MacDock";

const MIN_WINDOWS_PER_SCREEN = 3;

// props = {state}
const Screen = (props) => {
  const [screenState, setScreenState] = useState(props.state);
  const [top, setTop] = useState(
    props.state.windows?.length ?? MIN_WINDOWS_PER_SCREEN
  );

  function changeWindowOrder(index) {
    const new_order = screenState.windows;
    for (let i = 0; i < new_order.length; i++) {
      if (new_order[i].layer === index && new_order[i].layer !== top) {
        new_order[i].layer = top + 1;
        break;
      }
    }
    setTop(top + 1);
    setScreenState({ ...screenState, windows: new_order });
  }

  function resetScreen() {
    setScreenState(props.state);
  }

  return (
    <div className="screen-container">
      {/* Top */}
      {screenState.OS ? null : <MacMenuBar />}

      {/* Background */}
      <img
        className="background-image"
        style={{
          height: screenState.OS ? "95vh" : "97vh",
        }}
        alt="Screen Background"
        src={screenState.background}
        data-scroll-to="backgroundImage"
        draggable={false}
      />

      {/* Windows */}
      {screenState.windows.map((item, idx) => (
        <Window
          key={idx}
          layer={item.layer}
          dimensions={item.dimensions}
          src={item.src}
          className={item.className}
          onClick={changeWindowOrder}
          link={item.link}
        />
      ))}

      {/* Bottom */}
      {screenState.OS ? (
        screenState.OS === "10" ? (
          <Taskbar10 />
        ) : (
          <Taskbar11 />
        )
      ) : (
        <MacDock icons={screenState.dock_icons} />
      )}
    </div>
  );
};

export default Screen;
