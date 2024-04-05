import { createContext, useState } from "react";

const DataContext = createContext(null);
const DataProvider = (props) => {
  const [activeScreen, setActiveScreen] = useState(1);
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
