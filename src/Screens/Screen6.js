import Screen from "../components/Screen";
import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen6 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[5].windows);

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
