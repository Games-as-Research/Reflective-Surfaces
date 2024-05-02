import { P5JS } from "../components/P5JS";
import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen8 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[7].windows);
  useEffect(() => {
    if (GameMan.screensState[7].locked) {
      GameMan.updateScreen(7, { locked: false });
    }
  }, []);
  return (
    <>
      {/* <P5JS /> */}
      <Screen
        windows={ordWindows}
        setWindows={setOrdWindows}
        backgroundImage={GameMan.screensState[7].background}
        OS={"10"}
      />
    </>
  );
};

export default Screen8;
