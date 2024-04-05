import Screen from "../components/Screen";
import { useState } from "react";

const Screen2 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 5,
      src: "./S2_Matt/obsidian.png",
      dimensions: {
        top: 80,
        left: 805,
        width: 846,
        height: 772,
      },
    },
    {
      layer: 4,
      src: "./S2_Matt/firefox.png",
      dimensions: {
        top: 346,
        left: 415,
        width: 370,
        height: 506,
      },
    },
    {
      layer: 3,
      src: "./S2_Matt/ryder.png",
      dimensions: {
        top: 380,
        left: 33,
        width: 1073,
        height: 566,
      },
    },
    {
      layer: 2,
      src: "./S2_Matt/docs.png",
      dimensions: {
        top: 114,
        left: 65,
        width: 695,
        height: 580,
      },
    },
    {
      layer: 1,
      src: "./S2_Matt/github.png",
      dimensions: {
        top: 338,
        left: 839,
        width: 757,
        height: 591,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S2_Matt/Background.png"}
    />
  );
};

export default Screen2;
