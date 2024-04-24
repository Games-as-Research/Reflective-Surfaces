import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen6 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[5].windows);

  useEffect(() => {
    if (DataC.screensState[5].locked) {
      DataC.updateScreen(5, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[5].background}
      OS={"10"}
    />
  );
};

export default Screen6;
