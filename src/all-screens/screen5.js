import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen5 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[4].windows);
  useEffect(() => {
    if (DataC.screensState[4].locked) {
      DataC.updateScreen(4, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[4].background}
    />
  );
};

export default Screen5;
