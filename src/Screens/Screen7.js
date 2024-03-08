import Screen from "../components/Screen";
import { useState } from "react";

const Screen7 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 4,
      src: "./S7_Femke/gif.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 686,
        left: 610,
        width: 464,
        height: 356,
      },
    },
    {
      layer: 3,
      src: "./S7_Femke/blackboard.png",
      dimensions: {
        top: 0,
        left: 710,
        width: 500,
        height: 410,
      },
    },
    {
      layer: 2,
      src: "./S7_Femke/miro.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 67,
        left: 0,
        width: 842,
        height: 907,
      },
    },
    {
      layer: 1,
      src: "./S7_Femke/word.png",
      dimensions: {
        top: 0,
        left: 960,
        width: 960,
        height: 1042,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S7_Femke/Background.jpeg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen7;
