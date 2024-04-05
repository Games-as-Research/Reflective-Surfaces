import { useContext, useState } from "react";

import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Screen3 from "./Screens/Screen3";
import Screen4 from "./Screens/Screen4";
import Screen5 from "./Screens/Screen5";
import Screen6 from "./Screens/Screen6";
import Screen7 from "./Screens/Screen7";
import Screen8 from "./Screens/Screen8";
import Screen9 from "./Screens/Screen9";
import DataContext from "./contexts/DataContext";

const Screens = (props) => {
  const [activeScreen, setActiveScreen] = useState(1);
  const DataC = useContext(DataContext);

  function nextScreen() {
    console.log("Next Screen");
    DataC.HelloWorld();
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

  if (activeScreen === 1) {
    return <Screen1 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 2) {
    return <Screen2 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 3) {
    return <Screen3 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 4) {
    return <Screen4 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 5) {
    return <Screen5 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 6) {
    return <Screen6 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 7) {
    return <Screen7 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 8) {
    return <Screen8 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else if (activeScreen === 9) {
    return <Screen9 nextScreen={nextScreen} previousScreen={previousScreen} />;
  } else {
    return <></>;
  }
};

export default Screens;
