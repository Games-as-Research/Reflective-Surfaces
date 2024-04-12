import { P5JS } from "../components/P5JS";
import Screen from "../components/Screen";
import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

const Screen8 = (props) => {
  const DataC = useContext(DataContext);
  const [ordWindows, setOrdWindows] = useState(DataC.screensState[7].windows);

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
