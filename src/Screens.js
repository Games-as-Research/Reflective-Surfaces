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
  // Lets let each screen deal with its own shit
  
  switch (DataC.activeScreen) {
    case 1:
      return <Screen1 />;
    case 2:
      return <Screen2 />;
    case 3:
      return <Screen3 />;
    case 4:
      return <Screen4 />;
    case 5:
      return <Screen5 />;
    case 6:
      return <Screen6 />;
    case 7:
      return <Screen7 />;
    case 8:
      return <Screen8 />;
    case 9:
      return <Screen9 />;
    default:
      return null;
  }
};

export default Screens;
