import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen7 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[6].windows);
  useEffect(() => {
    if (GameMan.screensState[6].locked) {
      GameMan.updateScreen(6, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[6].background}
      OS={"10"}
    />
  );
};

export default Screen7;
