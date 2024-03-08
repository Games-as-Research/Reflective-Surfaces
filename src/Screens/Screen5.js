import Screen from "../components/Screen";
import { useState } from "react";

const Screen5 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 3,
      src: "./S5_Kalervo/discussion.png",
      dimensions: {
        top: 90,
        left: 708,
        width: 797,
        height: 680,
      },
    },
    {
      layer: 2,
      src: "./S5_Kalervo/docs.png",
      dimensions: {
        top: 90,
        left: 56,
        width: 713,
        height: 894,
      },
    },
    {
      layer: 1,
      src: "./S5_Kalervo/discord_rilla.png",
      dimensions: {
        top: 205,
        left: 750,
        width: 683,
        height: 751,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S5_Kalervo/Background.jpeg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen5;
