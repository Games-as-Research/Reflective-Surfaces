import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen5 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[4].windows);
  useEffect(() => {
    if (GameMan.screensState[4].locked) {
      GameMan.updateScreen(4, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[4].background}
    />
  );
};

export default Screen5;
