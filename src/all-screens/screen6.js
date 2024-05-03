import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen6 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[5].windows);

  useEffect(() => {
    if (GameMan.screensState[5].locked) {
      GameMan.updateScreen(5, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[5].background}
      OS={"11"}
    />
  );
};

export default Screen6;
