import Screen from "../components/Screen";
import { useState } from "react";

const Screen6 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 6,
      src: "./S6_Enric/docs2.png",
      dimensions: {
        top: 109,
        left: 1123,
        width: 528,
        height: 862,
      },
    },
    {
      layer: 5,
      src: "./S6_Enric/docs1.png",
      dimensions: {
        top: 109,
        left: 532,
        width: 576,
        height: 862,
      },
    },
    {
      layer: 4,
      src: "./S6_Enric/pic3.png",
      dimensions: {
        top: 58,
        left: 82,
        width: 188,
        height: 529,
      },
    },
    {
      layer: 3,
      src: "./S6_Enric/pic2.png",
      dimensions: {
        top: 380,
        left: 192,
        width: 408,
        height: 412,
      },
    },
    {
      layer: 2,
      src: "./S6_Enric/pic4.png",
      dimensions: {
        top: 587,
        left: 20,
        width: 415,
        height: 486,
      },
    },
    {
      layer: 1,
      src: "./S6_Enric/pic1.png",
      dimensions: {
        top: 666,
        left: 461,
        width: 499,
        height: 387,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S6_Enric/Background.jpg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen6;
