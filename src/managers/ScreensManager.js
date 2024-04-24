import { useContext } from "react";

import Screen1 from "../all-screens/screen1";
import Screen2 from "../all-screens/screen2";
import Screen3 from "../all-screens/screen3";
import Screen4 from "../all-screens/screen4";
import Screen5 from "../all-screens/screen5";
import Screen6 from "../all-screens/screen6";
import Screen7 from "../all-screens/screen7";
import Screen8 from "../all-screens/screen8";
import Screen9 from "../all-screens/screen9";
import GameManager from "./GameManager";

const ScreensManager = (props) => {
  const GameMan = useContext(GameManager);
  
  switch (GameMan.activeScreen) {
    case 1:
      return <Screen1 />;
    case 2:
      return <Screen2 />;
    case 3:
      return <Screen3 />;
    case 4:
      return <Screen4 />;
    case 5:
      return <Screen5 />;
    case 6:
      return <Screen6 />;
    case 7:
      return <Screen7 />;
    case 8:
      return <Screen8 />;
    case 9:
      return <Screen9 />;
    default:
      return <Screen1 />;
  }
};

export default ScreensManager;
