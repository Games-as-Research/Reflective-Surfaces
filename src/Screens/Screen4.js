import Screen from "../components/Screen";
import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen4 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[3].windows);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={DataC.screensState[3].background}
    />
  );
};

export default Screen4;
