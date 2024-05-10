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
      thumbnail: "./S9_Shahrom/Background.jpg",
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
          setActiveScreen(0);
          localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, 0);
        }
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
      }
    } catch (error) {
      console.log("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  function nextScreen(index = null) {
    if (index && index >= 0 && index <= 9) {
      setActiveScreen(index);
    }
    if (activeScreen === 9) {
      setActiveScreen(1);
    } else {
      setActiveScreen(activeScreen + 1);
    }
  }

  function previousScreen() {
    if (activeScreen === 1) {
      setActiveScreen(9);
    } else {
      setActiveScreen(activeScreen - 1);
    }
  }

  function showSwitcher() {
    setSwitching(true);
  }

  function hideSwitcher() {
    setSwitching(false);
  }

  function unlockScreen(index) {
    // Unlocks screen in switcher
    if (index <= 8 && index > 0) {
      if (screens[index].locked) {
        const updated_screens_state = screens;
        updated_screens_state[index].locked = false;
        updateScreens(updated_screens_state);
      }
      updated_screens_state[index] = updated_screen;
      setScreensState(updated_screens_state);
    }
  }

  function switchScreen(idx) {
    if (idx > 0 && idx < 10) setActiveScreen(idx);
    hideSwitcher();
  }
  return (
    <GameManager.Provider
      value={{
        // State
        activeScreen,
        screensState,

        //Methods
        previousScreen,
        nextScreen,
        showSwitcher,
        hideSwitcher,
        switchScreen,
        updateScreen,
        resetScreen,
        resetSystem,
      }}
    >
      <ScreenSwitcher
        show={switching}
        screens={screensState}
        onClick={switchScreen}
        close={hideSwitcher}
      />
      {props.children}
    </GameManager.Provider>
  );
};

export default GameManager;
export { GameManagementProvider };
