import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen9 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[8].windows);
  useEffect(() => {
    if (GameMan.screensState[8].locked) {
      GameMan.updateScreen(8, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[8].background}
    />
  );
};

export default Screen9;
