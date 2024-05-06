import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen4 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[3].windows);

  useEffect(() => {
    if (GameMan.screensState[3].locked) {
      GameMan.updateScreen(3, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[3].background}
      dock_icons={[
        "FIREFOX",
        "PAGES",
        "MAIL",
        "BLENDER",
        "MUSIC",
        "GARAGEBAND",
        "TEXTEDIT",
        "DISCORD",
        "ZOTERO",
        "VOICEMEMO",
      ]}
    />
  );
};

export default Screen4;
