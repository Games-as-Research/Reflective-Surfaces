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
      map: {
        name: "Screen1",
        areas: [
          {
            id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
            title: "git-commit",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [140, 665, 520, 665, 520, 725, 140, 725],
            polygon: [
              [140, 665],
              [520, 665],
              [520, 725],
              [140, 725],
            ],
          },
        ],
      },
    },
  ],
  dock_icons: ["UNITY"],
};

const Screen1 = (props) => {
  return <Screen state={DEFAULT_STATE} />;
};

export default Screen1;
