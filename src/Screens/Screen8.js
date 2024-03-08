import Screen from "../components/Screen";
import { useState } from "react";

const Screen8 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 3,
      src: "./S3_Rilla/Abstract/abstract.png",
      dimensions: {
        top: 173,
        left: 81,
        width: 981,
        height: 325,
      },
    },
    {
      layer: 2,
      src: "./S3_Rilla/Abstract/docs.png",
      dimensions: {
        top: 193,
        left: 436,
        width: 1047,
        height: 936,
      },
    },
    {
      layer: 1,
      src: "./S3_Rilla/Abstract/pdf.png",
      dimensions: {
        top: 48,
        left: 69,
        width: 1592,
        height: 1066,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S8_Vadim/Background.jpeg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen8;
