import { P5JS } from "../components/P5JS";
import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen8 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[7].windows);
  useEffect(() => {
    if (DataC.screensState[7].locked) {
      DataC.updateScreen(7, { locked: false });
    }
  }, []);
  return (
    <>
      <P5JS />
      <Screen
        windows={ordWindows}
        setWindows={setOrdWindows}
        backgroundImage={DataC.screensState[7].background}
        OS={"10"}
      />
    </>
  );
};

export default Screen8;
