import Screen from "../components/Screen";
import { useState } from "react";

const Screen7 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 4,
      src: "./S7_Femke/gif.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 490,
        left: 330,
        width: 464,
        height: 356,
      },
    },
    {
      layer: 3,
      src: "./S7_Femke/blackboard.png",
      dimensions: {
        top: 39,
        left: 352,
        width: 440,
        height: 361,
      },
    },
    {
      layer: 2,
      src: "./S7_Femke/miro.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 268,
        left: 33,
        width: 575,
        height: 619,
      },
    },
    {
      layer: 1,
      src: "./S7_Femke/word.png",
      dimensions: {
        top: 63,
        left: 819,
        width: 746,
        height: 810,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S7_Femke/Background.jpeg"}
      OS={"10"}
    />
  );
};

export default Screen7;
