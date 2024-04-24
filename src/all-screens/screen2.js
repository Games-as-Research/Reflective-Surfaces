import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen2 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[1].windows);

  useEffect(() => {
    if (DataC.screensState[1].locked) {
      DataC.updateScreen(1, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[1].background}
    />
  );
};

export default Screen2;
