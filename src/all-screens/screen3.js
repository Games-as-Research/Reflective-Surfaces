import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen3 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[2].windows);
  useEffect(() => {
    if (GameMan.screensState[2].locked) {
      GameMan.updateScreen(2, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[2].background}
      dock_icons={["CHROME", "PREVIEW", "TEXTEDIT", "DISCORD", "GITHUB"]}
    />
  );
};

export default Screen3;
