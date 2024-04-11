import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";

const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
};

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [screensState, setScreensState] = useState([
    { index: 1, locked: false, thumbnail: "./S1_Pippin/Background.png" },
    { index: 2, locked: false, thumbnail: "./S2_Matt/Background.png" },
    { index: 3, locked: false, thumbnail: "./S3_Rilla/Background.jpeg" },
    { index: 4, locked: false, thumbnail: "./S4_Chip/Background.jpg" },
    { index: 5, locked: true, thumbnail: "./S5_Kalervo/Background.jpeg" },
    { index: 6, locked: true, thumbnail: "./S6_Enric/Background.jpg" },
    { index: 7, locked: true, thumbnail: "./S7_Femke/Background.jpeg" },
    { index: 8, locked: false, thumbnail: "./S8_Vadim/Background.jpeg" },
    { index: 9, locked: false, thumbnail: "./S9_Shahrom/Background.jpg" },
  ]);
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

  function nextScreen() {
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

  function switchScreen(idx) {
    if (idx > 0 && idx < 10) setActiveScreen(idx);
    hideSwitcher();
  }
  return (
    <DataContext.Provider
      value={{
        // State
        activeScreen,

        //Methods
        previousScreen,
        nextScreen,
        showSwitcher,
        hideSwitcher,
        switchScreen,
      }}
    >
      <ScreenSwitcher
        show={switching}
        screens={screensState}
        onClick={switchScreen}
        close={hideSwitcher}
      />
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
