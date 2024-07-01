import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";
import ScreenTransition from "../components/ScreenTransition";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const DEV = process.env.NODE_ENV == "development";
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
      locked: !DEV,
      thumbnail: "./S2_Matt/Background.png",
    },
    {
      locked: !DEV,
      thumbnail: "./S3_Rilla/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S4_Chip/Background.jpg",
    },
    {
      locked: !DEV,
      thumbnail: "./S5_Kalervo/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S6_Enric/Background.jpg",
    },
    {
      locked: !DEV,
      thumbnail: "./S7_Femke/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S8_Vadim/Background.jpeg",
    },
    {
      locked: !DEV,
      thumbnail: "./S9_Shahrom/Background.png",
    },
  ],
};

const GameManager = createContext(null);
const GameManagementProvider = (props) => {
  const [screens, updateScreens] = useState(DEFAULT_STATE.screens);
  const [activeScreen, setActiveScreen] = useState(-1);
  const [switching, setSwitching] = useState(false);
  const [transitioningAlpha, settransitioningAlpha] = useState(0);

  useEffect(() => {
    try {
      if (activeScreen !== null && activeScreen > -1) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
      }
    } catch (error) {
      console.log("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  async function transitionIn() {
    const transition_step = 0.1;
    for (let index = 0; index <= 10; index++) {
      settransitioningAlpha(transition_step * index);
      await delay(30);
    }
  }

  async function transitionOut() {
    const transition_step = 0.1;
    for (let index = 10; index >= 0; index--) {
      settransitioningAlpha(transition_step * index);
      await delay(30);
    }
  }

  // #region Screen Chaning
  async function nextScreen() {
    await transitionIn();
    if (activeScreen === 8) {
      setActiveScreen(0);
    } else {
      setActiveScreen(activeScreen + 1);
    }
    await transitionOut();
  }

  async function previousScreen() {
    await transitionIn();

    if (activeScreen === 0) {
      setActiveScreen(8);
    } else {
      setActiveScreen(activeScreen - 1);
    }

    await transitionOut();
  }

  function jumpToScreen(index) {
    if (index == null) return;

    if (index >= 0 && index <= 8) {
      transitionIn();
      setActiveScreen(index);
      if (switching) hideSwitcher();
      transitionOut();
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
      <CustomCursor
        targets={[".refsurf-control", "map"]}
        customClass="custom-cursor"
        dimensions={35}
        strokeColor={"#000"}
        strokeWidth={2}
        fill={"red"}
        smoothness={{
          movement: 1,
          scale: 0.2,
          opacity: 0.5,
        }}
        targetOpacity={0.5}
      />
      <ScreenTransition alpha={transitioningAlpha} />

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
export { GameManagementProvider, LOCAL_STORAGE_KEYS };
