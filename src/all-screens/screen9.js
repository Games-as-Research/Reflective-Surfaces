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
        dock_icons={["FIREFOX", "OBSIDIAN", "UNITY", "DISCORD"]}
      />
      <DesktopIcon
        default={{ x: 1650, y: 50 }}
        label={"Macintosh HD"}
        sprite={"./Icons/macintosh_hd.png"}
      />
      <DesktopIcon
        default={{ x: 1650, y: 200 }}
        label={"Photos"}
        sprite={"./Icons/images_folder.png"}
      />
      <DesktopIcon
        default={{ x: 1650, y: 300 }}
        label={"Unity 2022.3.15f1"}
        sprite={"./Icons/unity.png"}
      />
      <DesktopIcon
        default={{ x: 1650, y: 500 }}
        label={"Spotify"}
        sprite={"./Icons/spotify.png"}
      />
    </>
  );
};

export default Screen9;
