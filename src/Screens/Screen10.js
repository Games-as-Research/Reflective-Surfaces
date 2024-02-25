import "./Screen10.css";
import Window from "../components/Window";
import { useState } from "react";

const Screen10 = () => {
  const [ordWindows, setOrdWindows] = useState([
    {
      index: 4,
      src: "./window-1@2x.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 686,
        left: 610,
        width: 464,
        height: 356,
      },
    },
    {
      index: 3,
      src: "./window-2@2x.png",
      dimensions: {
        top: 0,
        left: 710,
        width: 500,
        height: 410,
      },
    },
    {
      index: 2,
      src: "./window-3@2x.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 67,
        left: 0,
        width: 842,
        height: 907,
      },
    },
    {
      index: 1,
      src: "./window-4@2x.png",
      dimensions: {
        top: 0,
        left: 960,
        width: 960,
        height: 1042,
      },
    },
  ]);
  const [top, setTop] = useState(4);

  function ChangeScreenOrder(index) {
    const newOrder = ordWindows;
    for (let i = 0; i < newOrder.length; i++) {
      if (newOrder[i].index === index && newOrder[i].index !== top) {
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

export default Screen10;
