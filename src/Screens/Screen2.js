import Screen from "../components/Screen";
import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen2 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[1].windows);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[1].background}
    />
  );
};

export default Screen2;
