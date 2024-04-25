import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";
import DEFAULT_STATE from "./DefaultState";
const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
};

const GameManager = createContext(null);
const GameManagementProvider = (props) => {
  const [screensState, setScreensState] = useState(DEFAULT_STATE);
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
          setActiveScreen(1);
          localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, 1);
        }
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
      }
    } catch (error) {
      console.log("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  function nextScreen(index = null) {
    if (index && index > 0 && index <= 9) {
      setActiveScreen(index);
    }

    console.log("Next Screen");
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

  function resetScreen(index) {
    const updated_screens_state = screensState;
    console.log(DEFAULT_STATE[index]);
    console.log(updated_screens_state[index]);

    updated_screens_state[index] = DEFAULT_STATE[index];
    updated_screens_state[index].locked = false;
    setScreensState(updated_screens_state);
  }

  function resetSystem() {
    setScreensState(DEFAULT_STATE);
  }
  function updateScreen(index, properties) {
    // pass the index (as defined in each object, not the positional index),
    // and pass an object containing all properties that need to be updated

    if (index <= 8 && index >= 0) {
      const updated_screens_state = screensState;
      const updated_screen = screensState[index];
      for (const key in properties) {
        updated_screen[key] = properties[key];
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
