import Screen from "../components/Screen";
import { useState } from "react";

const Screen2 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 5,
      src: "./S2_Matt/obsidian.png",
      dimensions: {
        top: 169,
        left: 810,
        width: 779,
        height: 711,
      },
    },
    {
      layer: 4,
      src: "./S2_Matt/firefox.png",
      dimensions: {
        top: 130,
        left: 241,
        width: 278,
        height: 280,
      },
    },
    {
      layer: 3,
      src: "./S2_Matt/ryder.png",
      dimensions: {
        top: 278,
        left: 155,
        width: 1073,
        height: 566,
      },
    },
    {
      layer: 2,
      src: "./S2_Matt/docs.png",
      dimensions: {
        top: 130,
        left: 192,
        width: 605,
        height: 505,
      },
    },
    {
      layer: 1,
      src: "./S2_Matt/github.png",
      dimensions: {
        top: 214,
        left: 660,
        width: 757,
        height: 591,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S2_Matt/Background.jpg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen2;
