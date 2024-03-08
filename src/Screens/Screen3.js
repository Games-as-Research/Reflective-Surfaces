import Screen from "../components/Screen";
import { useState } from "react";

const Screen3 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 3,
      src: "./S3_Rilla/Abstract/abstract.png",
      dimensions: {
        top: 100,
        left: 129,
        width: 867,
        height: 261,
      },
    },
    {
      layer: 2,
      src: "./S3_Rilla/Abstract/docs.png",
      dimensions: {
        top: 454,
        left: 129,
        width: 571,
        height: 508,
      },
    },
    {
      layer: 1,
      src: "./S3_Rilla/Abstract/pdf.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 1260,
        height: 833,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S3_Rilla/Background.jpeg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen3;
