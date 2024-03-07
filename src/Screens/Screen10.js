import Screen from "../components/Screen";
import { useState } from "react";

const Screen10 = () => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 4,
      src: "./page10/window-1@2x.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 686,
        left: 610,
        width: 464,
        height: 356,
      },
    },
    {
      layer: 3,
      src: "./page10/window-2@2x.png",
      dimensions: {
        top: 0,
        left: 710,
        width: 500,
        height: 410,
      },
    },
    {
      layer: 2,
      src: "./page10/window-3@2x.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 67,
        left: 0,
        width: 842,
        height: 907,
      },
    },
    {
      layer: 1,
      src: "./page10/window-4@2x.png",
      dimensions: {
        top: 0,
        left: 960,
        width: 960,
        height: 1042,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./page10/background@2x.png"}
      backgroundStyle={{
        top: 0,
        left: 0,
        width: 1920,
        height: 1080,
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    />
  );
};

export default Screen10;
