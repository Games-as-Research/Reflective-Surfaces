import Screen from "../components/Screen";

const DEFAULT_STATE = {
  background: "./S1_Pippin/Background.png",
  windows: [
    {
      layer: 2,
      type: "CHROME",
      minimized: false,
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
      minimized: false,
      type: "VSCODE",
      src: "./S1_Pippin/vscode.png",
      dimensions: {
        top: 70,
        left: 116,
        width: 590,
        height: 847,
      },
    },
  ],
  dock_icons: ["CHROME", "VSCODE", "UNITY"],
};

const Screen1 = (props) => {
  return <Screen state={DEFAULT_STATE} />;
};

export default Screen1;
