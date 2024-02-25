import { useState } from "react";
import Screen10 from "./Screens/Screen10";

const Screens = (props) => {
  const [activeScreen, setActiveScreen] = useState(10);

  if (activeScreen == 10) {
    return <Screen10 />;
  } else {
    return <></>;
  }

};

export default Screens;
