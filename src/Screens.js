import { useState } from "react";
import Screen10 from "./Screens/Screen10";
import Screen01 from "./Screens/Screen01";

const Screens = (props) => {
  const [activeScreen, setActiveScreen] = useState(1);

  if (activeScreen === 1) {
    return <Screen01 />;
  } else if (activeScreen === 10) {
    return <Screen10 />;
  } else {
    return <></>;
  }
};

export default Screens;
