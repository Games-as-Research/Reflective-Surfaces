import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen7 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[6].windows);
  useEffect(() => {
    if (DataC.screensState[6].locked) {
      DataC.updateScreen(6, { locked: false });
    }
  }, []);
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[6].background}
      OS={"10"}
    />
  );
};

export default Screen7;
