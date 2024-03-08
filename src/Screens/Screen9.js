import Screen from "../components/Screen";
import { useState } from "react";

const Screen9 = (props) => {
  const [ordWindows, setOrdWindows] = useState([]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S9_Shahrom/Background.jpg"}
      nextScreen={props.nextScreen}
      previousScreen={props.previousScreen}
    />
  );
};

export default Screen9;
