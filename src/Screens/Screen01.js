import Window from "../components/Window";
import { useState } from "react";

const Screen01 = () => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 3,
      src: "./abstract/window-1-abstract-txt.png",
      dimensions: {
        top: 173,
        left: 81,
        width: 981,
        height: 325,
      },
    },
    {
      layer: 2,
      src: "./abstract/window-2-googledoc.png",
      dimensions: {
        top: 193,
        left: 436,
        width: 1047,
        height: 936,
      },
    },
    {
      layer: 1,
      src: "./abstract/window-3-reorder-pdf.png",
      dimensions: {
        top: 48,
        left: 69,
        width: 1592,
        height: 1066,
      },
    },
  ]);
  const [top, setTop] = useState(4);

  function ChangeScreenOrder(index) {
    const newOrder = ordWindows;
    for (let i = 0; i < newOrder.length; i++) {
      if (newOrder[i].layer === index && newOrder[i].layer !== top) {
        newOrder[i].layer = top + 1;
        break;
      }
    }
    setTop(top + 1);
    setOrdWindows(newOrder);
  }

  return (
    <div
      style={{
        width: "100%",
        height: 1150,
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <img
        style={{
          top: 0,
          left: 0,
          width: 1920,
          height: 1484,
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        src="./abstract/background.png"
        data-scroll-to="backgroundImage"
      />
      {ordWindows.map((item, idx) => (
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

export default Screen01;
