import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";

const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
  SAVESTATE: "RS_PLAYABLE_SAVEFILE",
};
const DEFAULT_STATE = {
  screens: [
    {
      locked: false,
      thumbnail: "./S1_Pippin/Background.png",
    },
    {
      locked: true,
      thumbnail: "./S2_Matt/Background.png",
    },
    {
      locked: true,
      thumbnail: "./S3_Rilla/Background.jpeg",
    },
    {
      locked: true,
      thumbnail: "./S4_Chip/Background.jpg",
    },
    {
      locked: true,
      thumbnail: "./S5_Kalervo/Background.jpeg",
    },
    {
      locked: true,
      thumbnail: "./S6_Enric/Background.jpg",
    },
    {
      locked: true,
      thumbnail: "./S7_Femke/Background.jpeg",
    },
    {
      locked: true,
      thumbnail: "./S8_Vadim/Background.jpeg",
    },
    {
      locked: true,
      thumbnail: "./S9_Shahrom/Background.png",
    },
  ],
};

const GameManager = createContext(null);
const GameManagementProvider = (props) => {
  const [screens, updateScreens] = useState(DEFAULT_STATE.screens);
  const [activeScreen, setActiveScreen] = useState(-1);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    try {
      if (activeScreen === -1) {
        const storage_val = localStorage.getItem(
          LOCAL_STORAGE_KEYS.SCREEN_INDEX
        );

        if (storage_val) {
          setActiveScreen(parseInt(storage_val));
        } else {
          localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, -1);
        }
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
      }
    } catch (error) {
      console.log("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  // #region Screen Chaning
  function nextScreen() {
    if (activeScreen === 8) {
      setActiveScreen(0);
    } else {
      setActiveScreen(activeScreen + 1);
    }
  }

  function previousScreen() {
    if (activeScreen === 0) {
      setActiveScreen(8);
    } else {
      setActiveScreen(activeScreen - 1);
    }
  }

  function jumpToScreen(index) {
    if (index == null) return;

    
    if (index >= 0 && index <= 8) {
      setActiveScreen(index);
      if (switching) hideSwitcher();
    }
  }

  // #endregion

  // #region Switcher Methods
  function showSwitcher() {
    setSwitching(true);
  }

  function hideSwitcher() {
    setSwitching(false);
  }

  function unlockScreen(index) {
    // Unlocks screen in switcher
    if (index > 0 && index <= 8 && screens[index].locked) {
      const updated_screens_state = screens;
      updated_screens_state[index].locked = false;
      updateScreens(updated_screens_state);
    }
  }
  // #endregion

  return (
    <GameManager.Provider
      value={{
        // State
        activeScreen,

        //Methods
        previousScreen,
        nextScreen,
        unlockScreen,
        jumpToScreen,
        showSwitcher,
      }}
    >
      <ScreenSwitcher
        show={switching}
        screens={screens}
        onClick={jumpToScreen}
        close={hideSwitcher}
      />
      {props.children}
    </GameManager.Provider>
  );
};

export default GameManager;
export { GameManagementProvider };
