import { createContext, useEffect, useState } from "react";
import ScreenSwitcher from "../components/ScreenSwitcher";

const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
};

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [activeScreen, setActiveScreen] = useState(
    parseInt(localStorage.getItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX)) ?? 1
  );
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
    } catch (error) {
      console.error("DEBUG:: Local storage failed.\n" + error);
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
        onClick={switchScreen}
        close={hideSwitcher}
      />
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
