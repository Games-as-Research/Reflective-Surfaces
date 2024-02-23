import "./Screen10.css";
import Window from "../components/Window";
import { useState } from "react";

const Screen10 = () => {
  const [ordWindows, setOrdWindows] = useState([
    { index: 4, src: "./window-1@2x.png", className: "screen-10-window-1" }, // 3
    { index: 3, src: "./window-2@2x.png", className: "screen-10-window-3" }, // 2
    { index: 2, src: "./window-3@2x.png", className: "screen-10-window-2" }, // 1
    { index: 1, src: "./window-4@2x.png", className: "screen-10-window-4" }, // 0
  ]);
  const [top, setTop] = useState(4);

  function ChangeScreenOrder(index) {
    const newOrder = ordWindows;
    for (let i = 0; i < newOrder.length; i++) {
      if (newOrder[i].index === index) {
        newOrder[i].index = top + 1;
        break;
      }
    }
    setTop(top + 1);
    setOrdWindows(newOrder);
  }

  return (
    <div className="screen-10">
      <img
        className="background-image"
        alt=""
        src="/background@2x.png"
        data-scroll-to="backgroundImage"
      />
      {ordWindows.map((item, idx) => (
        <Window
          key={idx}
          index={item.index}
          src={item.src}
          className={item.className}
          onClick={ChangeScreenOrder}
        />
      ))}
    </div>
  );
};

export default Screen10;
