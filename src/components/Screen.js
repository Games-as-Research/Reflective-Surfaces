import MacMenuBar from "./MacMenuBar";
import Taskbar10 from "./Taskbar10";
import Taskbar11 from "./Taskbar11";
import Window from "./Window";
import { useEffect, useState } from "react";
import "../stylesheets/Screen.css";
import MacDock from "./MacDock";

const MIN_WINDOWS_PER_SCREEN = 3;

// props = {state}
const Screen = (props) => {
  const [screenState, setScreenState] = useState(props.state);
  const [dockIcons, setDockIcons] = useState([]);
  const [top, setTop] = useState(
    props.state.windows?.length ?? MIN_WINDOWS_PER_SCREEN
  );

  useEffect(() => {
    const _dockicons = [];
    for (let index = 0; index < screenState.windows.length; index++) {
      _dockicons.push({
        name: screenState.windows[index].type ?? "",
        onClick: () => toggleWindowMinimized(index),
      });
    }
    setDockIcons(_dockicons);
  }, []);

  function changeWindowOrder(window_layer) {
    const new_order = screenState.windows;
    for (let i = 0; i < new_order.length; i++) {
      if (new_order[i].layer === window_layer && new_order[i].layer !== top) {
        new_order[i].layer = top + 1;
        break;
      }
    }
    setTop(top + 1);
    setScreenState({ ...screenState, windows: new_order });
  }
  function toggleWindowMinimized(index) {
    const new_conf = screenState.windows;
    new_conf[index].minimized = !new_conf[index].minimized;
    setScreenState({ ...screenState, windows: new_conf });
  }
  function updatePosition(index, x, y) {
    const new_conf = screenState.windows;
    new_conf[index].dimensions.top = y;
    new_conf[index].dimensions.left = x;
    setScreenState({ ...screenState, windows: new_conf });
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
          index={idx}
          config={item}
          onClick={changeWindowOrder}
          onDragStop={updatePosition}
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
        <MacDock icons={dockIcons} />
      )}
    </div>
  );
};

export default Screen;
