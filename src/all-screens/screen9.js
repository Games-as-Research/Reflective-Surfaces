import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";
import DesktopIcon from "../components/DesktopIcon";

const Screen9 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[8].windows);
  useEffect(() => {
    if (GameMan.screensState[8].locked) {
      GameMan.updateScreen(8, { locked: false });
    }
  }, []);
  return (
    <>
      <Screen
        windows={ordWindows}
        setWindows={setOrdWindows}
        backgroundImage={GameMan.screensState[8].background}
      />
      <DesktopIcon
        default={{ x: 1550, y: 50 }}
        label={"Macintosh HD"}
        sprite={null}
      />
      <DesktopIcon
        default={{ x: 1550, y: 200 }}
        label={"Screenshot 2024-02-11-11.59PM.png"}
        sprite={null}
      />
      <DesktopIcon
        default={{ x: 1550, y: 300 }}
        label={"Unity 2022.3.15f1"}
        sprite={null}
      />
      <DesktopIcon
        default={{ x: 1550, y: 300 }}
        label={"Spotify"}
        sprite={null}
      />
    </>
  );
};

export default Screen9;
