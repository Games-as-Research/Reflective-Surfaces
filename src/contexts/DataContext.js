import { createContext, useEffect, useState } from "react";

const LOCAL_STORAGE_KEYS = {
  SCREEN_INDEX: "active_screen",
};

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [activeScreen, setActiveScreen] = useState(
    parseInt(localStorage.getItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX)) ?? 1
  );
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
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.SCREEN_INDEX, activeScreen);
    } catch (error) {
      console.error("DEBUG:: Local storage failed.\n" + error);
    }
  }, [activeScreen]);

  return (
    <DataContext.Provider
      value={{
        // State
        activeScreen,

        //Methods
        previousScreen,
        nextScreen,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
