import { P5JS } from "../components/P5JS";
import Screen from "../components/Screen";
import { useState } from "react";

const Screen8 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 6,
      src: "./S8_Vadim/word1.png",
      dimensions: {
        top: 82,
        left: 891,
        width: 658,
        height: 759,
      },
    },
    {
      layer: 5,
      src: "./S8_Vadim/word2.png",
      dimensions: {
        top: 280,
        left: 624,
        width: 596,
        height: 686,
      },
    },
    {
      layer: 4,
      src: "./S8_Vadim/unity.png",
      dimensions: {
        top: 606,
        left: 326,
        width: 521,
        height: 361,
      },
    },
    {
      layer: 3,
      src: "./S8_Vadim/trello.png",
      dimensions: {
        top: 82,
        left: 326,
        width: 476,
        height: 598,
      },
    },
    {
      layer: 2,
      src: "./S8_Vadim/gitKraken.png",
      dimensions: {
        top: 216,
        left: 87,
        width: 492,
        height: 304,
      },
    },
    {
      layer: 1,
      src: "./S8_Vadim/ryder.png",
      dimensions: {
        top: 606,
        left: 86,
        width: 490,
        height: 290,
      },
    },
  ]);

  return (
    <>
      <P5JS />
      <Screen
        windows={ordWindows}
        setWindows={setOrdWindows}
        backgroundImage={"./S8_Vadim/Background.jpeg"}
        OS={"10"}
      />
    </>
  );
};

export default Screen8;
