import Screen from "../components/Screen";
import { useContext, useState, useEffect } from "react";
import DataContext from "../contexts/DataContext";

const Screen1 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[0].windows);

  useEffect(() => {
    if (DataC.screensState[0].locked) {
      DataC.updateScreen(0, { locked: false });
    }
  }, []);
  
  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[0].background}
    />
  );
};

export default Screen1;
