import { useContext } from "react";

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
  const DataC = useContext(DataContext);

  if (DataC.activeScreen === 1) {
    return <Screen1 />;
  } else if (DataC.activeScreen === 2) {
    return <Screen2 />;
  } else if (DataC.activeScreen === 3) {
    return <Screen3 />;
  } else if (DataC.activeScreen === 4) {
    return <Screen4 />;
  } else if (DataC.activeScreen === 5) {
    return <Screen5 />;
  } else if (DataC.activeScreen === 6) {
    return <Screen6 />;
  } else if (DataC.activeScreen === 7) {
    return <Screen7 />;
  } else if (DataC.activeScreen === 8) {
    return <Screen8 />;
  } else if (DataC.activeScreen === 9) {
    return <Screen9 />;
  } else {
    return <></>;
  }
};

export default Screens;
