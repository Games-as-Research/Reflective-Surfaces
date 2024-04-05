import Screen from "../components/Screen";
import { useState } from "react";

const Screen1 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 2,
      src: "./S1_Pippin/github.png",
      dimensions: {
        top: 70,
        left: 800,
        width: 561,
        height: 809,
      },
    },
    {
      layer: 1,
      src: "./S1_Pippin/vscode.png",
      dimensions: {
        top: 70,
        left: 116,
        width: 590,
        height: 847,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S1_Pippin/Background.png"}
    />
  );
};

export default Screen1;
